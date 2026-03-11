import React, { useState, useMemo, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';

/* Touch-friendly slider component with proper mobile dragging */
const Slider = ({ label, value, onChange, min, max, suffix }) => {
    const trackRef = useRef(null);
    const isDragging = useRef(false);

    const getValueFromTouch = useCallback((clientX) => {
        if (!trackRef.current) return value;
        const rect = trackRef.current.getBoundingClientRect();
        const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        return Math.round(min + percent * (max - min));
    }, [min, max, value]);

    const handleTouchStart = useCallback((e) => {
        isDragging.current = true;
        const touch = e.touches[0];
        onChange(getValueFromTouch(touch.clientX));
    }, [onChange, getValueFromTouch]);

    const handleTouchMove = useCallback((e) => {
        if (!isDragging.current) return;
        e.preventDefault(); // Prevent page scroll while dragging
        const touch = e.touches[0];
        onChange(getValueFromTouch(touch.clientX));
    }, [onChange, getValueFromTouch]);

    const handleTouchEnd = useCallback(() => {
        isDragging.current = false;
    }, []);

    const handleClick = useCallback((e) => {
        onChange(getValueFromTouch(e.clientX));
    }, [onChange, getValueFromTouch]);

    const percent = ((value - min) / (max - min)) * 100;

    return (
        <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-secondary tracking-wide">{label}</span>
                <span className="text-lg font-bold text-white">{value}{suffix}</span>
            </div>
            {/* Custom touch-friendly slider track */}
            <div
                ref={trackRef}
                className="relative w-full h-10 flex items-center cursor-pointer"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={handleClick}
                style={{ touchAction: 'none' }}
            >
                {/* Track background */}
                <div className="absolute left-0 right-0 h-2 bg-white/[0.06] rounded-full">
                    {/* Filled portion */}
                    <div
                        className="h-full bg-accent rounded-full transition-[width] duration-75"
                        style={{ width: `${percent}%` }}
                    />
                </div>
                {/* Thumb */}
                <div
                    className="absolute w-6 h-6 bg-white rounded-full shadow-lg shadow-black/30 border-2 border-accent"
                    style={{
                        left: `calc(${percent}% - 12px)`,
                        transition: isDragging.current ? 'none' : 'left 0.075s ease',
                    }}
                />
            </div>
        </div>
    );
};

const GrandirAnalytics = () => {
    const [manualPercent, setManualPercent] = useState(12);
    const [hoursPerWeek, setHoursPerWeek] = useState(25);
    const [hourlyValue, setHourlyValue] = useState(45);

    const calculations = useMemo(() => {
        const weeklyLoss = hoursPerWeek * hourlyValue * (manualPercent / 100);
        const annualLoss = weeklyLoss * 52;
        const monthlyLoss = annualLoss / 12;
        const efficiency = Math.round((manualPercent / 100) * 20 + (hoursPerWeek / 40) * 10);
        return {
            annual: Math.round(annualLoss).toLocaleString('es-ES'),
            monthly: Math.round(monthlyLoss).toLocaleString('es-ES'),
            hoursYear: Math.round(hoursPerWeek * 52 * (manualPercent / 100)).toLocaleString('es-ES'),
            costWeek: Math.round(weeklyLoss).toLocaleString('es-ES'),
            efficiency: Math.min(efficiency, 30),
        };
    }, [manualPercent, hoursPerWeek, hourlyValue]);

    return (
        <section id="analytics" className="relative py-16 overflow-hidden">
            {/* Background radial glow — smaller for mobile */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="px-5 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4 block">
                        Grandir Analytics
                    </span>
                    <h2 className="text-[26px] font-extrabold tracking-tighter leading-[1] font-display mb-4">
                        Calcula la ineficiencia<br />
                        <span className="text-accent">real de tu empresa.</span>
                    </h2>
                    <p className="text-secondary text-sm max-w-xs mx-auto leading-relaxed">
                        Calcula el capital y el tiempo que la gravedad operativa devora anualmente.
                    </p>
                </div>

                {/* Sliders */}
                <div className="mb-8">
                    <Slider
                        label="Porcentaje de Operativa Manual"
                        value={manualPercent}
                        onChange={setManualPercent}
                        min={1}
                        max={100}
                        suffix="%"
                    />
                    <Slider
                        label="Horas Empleadas / Semana"
                        value={hoursPerWeek}
                        onChange={setHoursPerWeek}
                        min={1}
                        max={80}
                        suffix="h"
                    />
                    <Slider
                        label="Valor / Hora"
                        value={hourlyValue}
                        onChange={setHourlyValue}
                        min={10}
                        max={200}
                        suffix="€"
                    />
                </div>

                {/* Results Dashboard */}
                <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-6 relative overflow-hidden">
                    {/* Subtle glow behind card */}
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />

                    <div className="relative z-10">
                        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                            Pérdida Anual
                        </span>
                        <div className="mt-2 mb-4">
                            <span className="text-4xl font-extrabold tracking-tighter text-white font-display">
                                {calculations.annual} €
                            </span>
                        </div>

                        {/* Divider */}
                        <div className="flex items-center justify-between mb-5">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[2px] bg-accent rounded-full" />
                                <span className="text-xs text-secondary">{calculations.hoursYear} h/año</span>
                            </div>
                            <span className="text-xs text-secondary">{calculations.costWeek} €/sem</span>
                        </div>

                        {/* Sub-metrics */}
                        <div className="grid grid-cols-2 gap-2.5 mb-5">
                            <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-3">
                                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary block mb-1">
                                    Pérdida Mensual
                                </span>
                                <span className="text-lg font-bold text-white">
                                    {calculations.monthly} €
                                </span>
                            </div>
                            <div className="bg-accent/10 border border-accent/20 rounded-xl p-3">
                                <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-1">
                                    Eficiencia con Grandir
                                </span>
                                <span className="text-lg font-bold text-accent">
                                    +{calculations.efficiency}%
                                </span>
                            </div>
                        </div>

                        {/* CTA */}
                        <a
                            href="https://cal.com/grupograndir/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full flex items-center justify-between bg-white/[0.04] border border-white/[0.1] rounded-full px-5 py-3.5 transition-all group cursor-pointer"
                        >
                            <span className="text-sm font-semibold text-white">Recuperar inversión</span>
                            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>

                        <p className="text-[10px] text-secondary/60 text-center mt-3">
                            *Datos basados en auditorías previas. Resultados sujetos a análisis técnico.
                        </p>
                    </div>
                </div>

                <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 mt-4">
                    <p className="text-xs text-secondary leading-relaxed">
                        Esta simulación calcula la pérdida en operativa directa y coste de oportunidad. No incluye pérdida de ventas.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default GrandirAnalytics;
