import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const Slider = ({ label, value, onChange, min, max, suffix }) => (
    <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-secondary tracking-wide">{label}</span>
            <span className="text-lg font-bold text-white">{value}{suffix}</span>
        </div>
        <input
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="grandir-slider w-full"
        />
    </div>
);

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
        <section id="analytics" className="relative py-32 overflow-hidden">
            {/* Background radial glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-6 block">
                        Grandir Analytics
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] font-display mb-6">
                        Calcula la ineficiencia<br />
                        <span className="text-accent">real de tu empresa.</span>
                    </h2>
                    <p className="text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Calcula el capital y el tiempo que la gravedad operativa de tu empresa devora anualmente en tareas que ya no deberían ser manuales.
                    </p>
                </motion.div>

                {/* Calculator Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left: Sliders */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    >
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

                        <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-5 mt-4">
                            <p className="text-xs text-secondary leading-relaxed">
                                Esta simulación calcula únicamente la pérdida en operativa directa y coste de oportunidad. No incluye pérdida de ventas por falta de respuesta inmediata o pérdida de leads por mala gestión.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: Results Dashboard */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-[#0A0A0A] border border-white/[0.06] rounded-3xl p-8 lg:p-10 relative overflow-hidden"
                    >
                        {/* Subtle glow behind card */}
                        <div className="absolute -top-20 -right-20 w-60 h-60 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

                        {/* Annual Loss */}
                        <div className="relative z-10">
                            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                                Pérdida Anual
                            </span>
                            <div className="mt-2 mb-4">
                                <span className="text-5xl md:text-6xl font-extrabold tracking-tighter text-white font-display">
                                    {calculations.annual} €
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-[2px] bg-accent rounded-full" />
                                    <span className="text-xs text-secondary">{calculations.hoursYear} h/año</span>
                                </div>
                                <span className="text-xs text-secondary">{calculations.costWeek} €/sem</span>
                            </div>

                            {/* Sub-metrics */}
                            <div className="grid grid-cols-2 gap-3 mb-6">
                                <div className="bg-white/[0.04] border border-white/[0.06] rounded-xl p-4">
                                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-secondary block mb-1">
                                        Pérdida Mensual
                                    </span>
                                    <span className="text-xl font-bold text-white">
                                        {calculations.monthly} €
                                    </span>
                                </div>
                                <div className="bg-accent/10 border border-accent/20 rounded-xl p-4">
                                    <span className="text-[10px] font-semibold tracking-[0.15em] uppercase text-accent block mb-1">
                                        Eficiencia con Grandir
                                    </span>
                                    <span className="text-xl font-bold text-accent">
                                        +{calculations.efficiency}%
                                    </span>
                                </div>
                            </div>

                            {/* CTA */}
                            <motion.a
                                href="https://cal.com/grupograndir/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full flex items-center justify-between bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-full px-6 py-4 transition-all group cursor-pointer"
                            >
                                <span className="text-sm font-semibold text-white">Recuperar inversión</span>
                                <svg className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </motion.a>

                            <p className="text-[10px] text-secondary/60 text-center mt-4">
                                *Datos basados en auditorías previas. Resultados finales sujetos a análisis técnico.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GrandirAnalytics;
