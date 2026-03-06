import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ======================================================
   Pain Points — Methodology-style natural scroll
   ====================================================== */

/* ---- Animation: Manual repetitive tasks ---- */
const ManualTasksAnimation = ({ isActive }) => {
    const [tasksDone, setTasksDone] = useState(0);
    useEffect(() => {
        if (!isActive) { setTasksDone(0); return; }
        let t = 0;
        const interval = setInterval(() => {
            t += 1;
            if (t > 6) { t = 0; setTasksDone(0); return; }
            setTasksDone(t);
        }, 600);
        return () => clearInterval(interval);
    }, [isActive]);

    const tasks = ['Copiar datos', 'Rellenar Excel', 'Enviar correo', 'Generar informe', 'Actualizar CRM', 'Revisar facturas'];

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-4 flex flex-col font-mono">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Tareas pendientes — HOY</span>
                <span className="ml-auto text-[9px] text-red-400 font-mono">{tasks.length - Math.min(tasksDone, tasks.length)} pendientes</span>
            </div>
            <div className="flex-1 space-y-1.5">
                {tasks.map((task, i) => {
                    const done = i < tasksDone;
                    return (
                        <motion.div
                            key={task}
                            animate={{ opacity: done ? 0.4 : 1, x: done ? 0 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2 text-[10px] md:text-xs"
                        >
                            <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors duration-300 ${done ? 'bg-white/5 border-white/10' : 'border-red-500/30 bg-red-500/5'
                                }`}>
                                {done && <span className="text-[8px] text-white/30">✓</span>}
                            </div>
                            <span className={`transition-all duration-300 ${done ? 'text-white/25 line-through' : 'text-white/70'}`}>
                                {task}
                            </span>
                            {i === tasksDone && isActive && (
                                <motion.span
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 1 }}
                                    className="ml-auto text-[8px] text-red-400"
                                >procesando...</motion.span>
                            )}
                        </motion.div>
                    );
                })}
            </div>
            <div className="mt-2 pt-2 border-t border-white/[0.04] flex items-center justify-between">
                <span className="text-[8px] text-white/20">Tiempo estimado: 4h 20min</span>
                <motion.span
                    animate={isActive ? { opacity: [0.5, 1, 0.5] } : { opacity: 0.5 }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="text-[8px] text-red-400"
                >⚠ Cada día lo mismo</motion.span>
            </div>
        </div>
    );
};

/* ---- Animation: Disconnected tools ---- */
const DisconnectedToolsAnimation = ({ isActive }) => {
    const [brokenLink, setBrokenLink] = useState(0);
    useEffect(() => {
        if (!isActive) { setBrokenLink(0); return; }
        let b = 0;
        const interval = setInterval(() => {
            b = (b + 1) % 5;
            setBrokenLink(b);
        }, 800);
        return () => clearInterval(interval);
    }, [isActive]);

    const tools = [
        { name: 'CRM', x: 12, y: 15 },
        { name: 'ERP', x: 62, y: 15 },
        { name: 'Email', x: 12, y: 60 },
        { name: 'Excel', x: 62, y: 60 },
    ];

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-4 relative flex flex-col">
            <div className="flex items-center gap-2 mb-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Estado de integraciones</span>
            </div>
            <div className="flex-1 min-h-0">
                <svg className="w-full h-full" viewBox="0 0 100 90" preserveAspectRatio="xMidYMid meet">
                    {/* Broken connections */}
                    {[[0, 1], [0, 2], [1, 3], [2, 3], [0, 3], [1, 2]].map(([a, b], i) => (
                        <line
                            key={`${a}-${b}`}
                            x1={tools[a].x + 13} y1={tools[a].y + 7}
                            x2={tools[b].x + 13} y2={tools[b].y + 7}
                            stroke={i === brokenLink ? '#ef4444' : '#ffffff'}
                            strokeWidth="0.5"
                            opacity={i === brokenLink ? 0.6 : 0.04}
                            strokeDasharray={i === brokenLink ? '3 2' : '0'}
                            style={{ transition: 'all 0.5s ease' }}
                        />
                    ))}
                    {/* Tool boxes */}
                    {tools.map((tool, i) => (
                        <g key={tool.name}>
                            <rect
                                x={tool.x} y={tool.y}
                                width="26" height="14" rx="3"
                                fill="#ffffff" opacity="0.04"
                                stroke={i === brokenLink || (i + 1) % 4 === brokenLink ? '#ef4444' : '#ffffff'}
                                strokeWidth="0.4"
                                style={{ transition: 'all 0.5s ease' }}
                            />
                            <text
                                x={tool.x + 13} y={tool.y + 9}
                                textAnchor="middle" fill="#ffffff"
                                opacity="0.5" fontSize="4" fontWeight="600"
                            >{tool.name}</text>
                        </g>
                    ))}
                    {/* Error badge */}
                    <g style={{ transition: 'all 0.3s ease' }}>
                        <circle cx="50" cy="42" r="6" fill="#0D0D0D" stroke="#ef4444" strokeWidth="0.5" opacity="0.9" />
                        <text x="50" y="44" textAnchor="middle" fill="#ef4444" fontSize="6" fontWeight="700">✕</text>
                    </g>
                </svg>
            </div>
        </div>
    );
};

/* ---- Animation: No visibility / blind data ---- */
const NoVisibilityAnimation = ({ isActive }) => {
    const [flickerBar, setFlickerBar] = useState(-1);
    useEffect(() => {
        if (!isActive) { setFlickerBar(-1); return; }
        let b = -1;
        const interval = setInterval(() => {
            b = (b + 1) % 7;
            setFlickerBar(b);
        }, 500);
        return () => clearInterval(interval);
    }, [isActive]);

    const bars = [25, 60, 40, 70, 35, 55, 45];

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-4 flex flex-col">
            <div className="flex items-center justify-between mb-3 pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="text-[9px] text-white/40">Dashboard — Datos obsoletos</span>
                </div>
                <span className="text-[8px] text-yellow-500/60 font-mono">Hace 5 días</span>
            </div>
            {/* Blurry chart */}
            <div className="flex-1 flex items-end gap-1.5 px-2 relative">
                {bars.map((h, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 rounded-t-sm"
                        animate={{
                            height: isActive ? `${h}%` : '0%',
                            opacity: flickerBar === i ? 0.15 : 0.3,
                            filter: 'blur(2px)',
                        }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                        style={{ background: 'linear-gradient(to top, #ef4444, #f97316)' }}
                    />
                ))}
                {/* Blur overlay */}
                <div className="absolute inset-0 bg-[#0D0D0D]/40 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-base font-bold text-white/30">???</div>
                        <div className="text-[8px] text-white/15 mt-1">Sin datos en tiempo real</div>
                    </div>
                </div>
            </div>
            {/* Fake metrics row */}
            <div className="mt-3 pt-2 border-t border-white/[0.04] grid grid-cols-3 gap-2">
                {['Ventas', 'Coste', 'Margen'].map((m) => (
                    <div key={m} className="text-center">
                        <div className="text-xs font-mono text-white/10 blur-[3px]">--,--€</div>
                        <div className="text-[7px] text-white/15">{m}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ---- Animation: Scaling cost ---- */
const ScalingCostAnimation = ({ isActive }) => {
    const [step, setStep] = useState(0);
    useEffect(() => {
        if (!isActive) { setStep(0); return; }
        let s = 0;
        const interval = setInterval(() => {
            s = (s + 1) % 5;
            setStep(s);
        }, 900);
        return () => clearInterval(interval);
    }, [isActive]);

    const stages = [
        { people: 5, cost: '€10K', volume: '100%' },
        { people: 8, cost: '€16K', volume: '150%' },
        { people: 12, cost: '€24K', volume: '200%' },
        { people: 18, cost: '€36K', volume: '250%' },
        { people: 25, cost: '€50K', volume: '300%' },
    ];

    const current = stages[step];

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Simulador de crecimiento lineal</span>
            </div>
            {/* Main metrics */}
            <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white/[0.02] rounded-lg p-2 text-center border border-white/[0.03]">
                    <motion.div
                        key={current.people}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-lg font-bold text-white/90 font-mono"
                    >{current.people}</motion.div>
                    <div className="text-[7px] text-white/25">Empleados</div>
                </div>
                <div className="bg-white/[0.02] rounded-lg p-2 text-center border border-red-500/10">
                    <motion.div
                        key={current.cost}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-lg font-bold text-red-400 font-mono"
                    >{current.cost}</motion.div>
                    <div className="text-[7px] text-white/25">Coste/mes</div>
                </div>
                <div className="bg-white/[0.02] rounded-lg p-2 text-center border border-white/[0.03]">
                    <motion.div
                        key={current.volume}
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        className="text-lg font-bold text-white/90 font-mono"
                    >{current.volume}</motion.div>
                    <div className="text-[7px] text-white/25">Volumen</div>
                </div>
            </div>
            {/* People icons row */}
            <div className="flex-1 flex items-center justify-center flex-wrap gap-1">
                {Array.from({ length: current.people }).map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.02 }}
                        className="w-4 h-4 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center"
                    >
                        <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    </motion.div>
                ))}
            </div>
            <div className="mt-2 pt-2 border-t border-white/[0.04] text-center">
                <span className="text-[8px] text-red-400/60">Crecimiento lineal = costes exponenciales</span>
            </div>
        </div>
    );
};

/* ---- Animation: Competition gap ---- */
const CompetitionAnimation = ({ isActive }) => {
    const [gap, setGap] = useState(0);
    useEffect(() => {
        if (!isActive) { setGap(0); return; }
        let g = 0;
        const interval = setInterval(() => {
            g += 1;
            if (g > 10) { g = 0; setGap(0); return; }
            setGap(g);
        }, 400);
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-4 flex flex-col">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Brecha tecnológica</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-4 px-2">
                {/* Competitor bar */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] text-green-400/80 font-semibold">Tu competencia</span>
                        <span className="text-[9px] text-green-400/60 font-mono">{Math.min(50 + gap * 5, 95)}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-green-500/50 rounded-full"
                            animate={{ width: `${Math.min(50 + gap * 5, 95)}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
                {/* Your bar */}
                <div>
                    <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[9px] text-red-400/80 font-semibold">Tu empresa</span>
                        <span className="text-[9px] text-red-400/60 font-mono">{Math.max(50 - gap * 3, 15)}%</span>
                    </div>
                    <div className="w-full h-3 bg-white/[0.04] rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-red-500/50 rounded-full"
                            animate={{ width: `${Math.max(50 - gap * 3, 15)}%` }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>
                {/* Gap indicator */}
                <div className="text-center mt-2">
                    <motion.div
                        animate={{ opacity: gap > 5 ? [0.5, 1, 0.5] : 0.5 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="text-xs font-bold text-red-400"
                    >
                        Brecha: {Math.min(gap * 8, 80)}%
                    </motion.div>
                    <div className="text-[8px] text-white/20 mt-1">Crece cada día sin acción</div>
                </div>
            </div>
        </div>
    );
};

/* ---- Animation resolver ---- */
const AnimationForType = ({ type, isActive }) => {
    switch (type) {
        case 'manual-tasks': return <ManualTasksAnimation isActive={isActive} />;
        case 'disconnected-tools': return <DisconnectedToolsAnimation isActive={isActive} />;
        case 'no-visibility': return <NoVisibilityAnimation isActive={isActive} />;
        case 'scaling-cost': return <ScalingCostAnimation isActive={isActive} />;
        case 'competition': return <CompetitionAnimation isActive={isActive} />;
        default: return null;
    }
};

/* ======================================================
   Pain Points Data
   ====================================================== */
const painPoints = [
    {
        id: 1,
        tag: 'Crecimiento',
        title: 'Escalar significa contratar más',
        description: 'Cada vez que crece tu volumen de trabajo, necesitas contratar más gente. Más personas implica más coordinación, más errores humanos y más costes fijos. Tu modelo de crecimiento es lineal cuando debería ser exponencial. Automatizar procesos te permite crecer sin multiplicar tu plantilla.',
        stat: { value: '3x', label: 'más coste al duplicar volumen' },
        animation: 'scaling-cost',
    },
    {
        id: 2,
        tag: 'Operaciones',
        title: 'Procesos manuales que devoran horas',
        description: 'Tu equipo pierde cientos de horas al mes en tareas que deberían estar automatizadas: copiar datos entre hojas de cálculo, generar informes a mano, enviar correos uno a uno. Es tiempo que nunca vuelve y que podrías estar dedicando a tareas que realmente generan valor para tu negocio.',
        stat: { value: '72%', label: 'del tiempo en tareas repetitivas' },
        animation: 'manual-tasks',
    },
    {
        id: 3,
        tag: 'Competitividad',
        title: 'Tu competencia ya se ha digitalizado',
        description: 'Mientras sigues operando con procesos del 2015, tus competidores automatizan, integran sistemas y responden diez veces más rápido que tú. La brecha tecnológica crece cada día que pasa sin actuar. Cada semana que tardas en digitalizar tu operativa, pierdes terreno frente a quienes ya lo hicieron.',
        stat: { value: '-40%', label: 'de competitividad cada año' },
        animation: 'competition',
    },
    {
        id: 4,
        tag: 'Control',
        title: 'Cero visibilidad sobre tu negocio',
        description: 'No tienes un panel donde ver qué está pasando en tu empresa en tiempo real. Las decisiones se toman con datos de la semana pasada — o peor, por pura intuición. Mientras tú esperas a que alguien te prepare un informe, tu competencia ya tomó la decisión correcta basándose en datos actualizados.',
        stat: { value: '5 días', label: 'de retraso medio en datos' },
        animation: 'no-visibility',
    },
    {
        id: 5,
        tag: 'Tecnología',
        title: 'Herramientas desconectadas entre sí',
        description: 'CRM por un lado, facturación por otro, el ERP en su propio mundo. Cada herramienta funciona en un silo. La información no fluye entre sistemas, se duplica y se pierde. Y tú sigues pagando licencias mensuales de todas estas aplicaciones sin ser capaz de sacarle el máximo partido a ninguna de ellas.',
        stat: { value: '€2.400', label: '/mes en apps infrautilizadas' },
        animation: 'disconnected-tools',
    },
];

/* ======================================================
   Main Section — Scroll-pinned single card swap
   ====================================================== */
const PainPoints = () => {
    const sectionRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const total = painPoints.length;

    useEffect(() => {
        const handleScroll = () => {
            const section = sectionRef.current;
            if (!section) return;

            const rect = section.getBoundingClientRect();
            const sectionHeight = section.offsetHeight;
            const viewportH = window.innerHeight;
            const scrollableRange = sectionHeight - viewportH;

            if (scrollableRange <= 0) return;

            // How far we've scrolled into the section (0 = top visible, 1 = fully scrolled)
            const progress = Math.max(0, Math.min(1, -rect.top / scrollableRange));
            const idx = Math.min(total - 1, Math.floor(progress * total));
            setActiveIndex(idx);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [total]);

    const activePoint = painPoints[activeIndex];
    const isLastSlide = activeIndex === total - 1;

    return (
        <section
            ref={sectionRef}
            className="relative bg-background"
            style={{ height: `${(total + 1) * 100}vh` }}
        >
            <div className="sticky top-0 left-0 w-full h-screen flex items-center justify-center z-10">
                {/* Subtle background grid pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    {/* Section Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-center mb-10"
                    >
                        <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4 block">
                            ¿Te suena familiar?
                        </span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] font-display mb-4">
                            ¿Por qué estás<br />
                            <span className="text-accent">perdiendo dinero?</span>
                        </h2>
                        <p className="text-secondary text-sm md:text-base max-w-lg mx-auto leading-relaxed">
                            La mayoría de las empresas pierden el 30% de sus ingresos por procesos ineficientes.
                        </p>
                    </motion.div>

                    {/* Step dots */}
                    <div className="flex items-center justify-center gap-2 mb-8">
                        {painPoints.map((_, i) => (
                            <div
                                key={i}
                                className={`h-1 rounded-full transition-all duration-500 ${i === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-white/10'
                                    }`}
                            />
                        ))}
                    </div>

                    {/* Single card — swaps on scroll */}
                    <div className="bg-[#0A0A0A] border border-white/[0.06] rounded-3xl p-8 lg:p-10 max-w-4xl mx-auto">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activePoint.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            >
                                {/* Tag + Counter */}
                                <div className="flex items-center justify-between mb-6">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                                        {activePoint.tag}
                                    </span>
                                    <span className="text-[10px] text-white/30 font-mono">
                                        {activeIndex + 1} / {total}
                                    </span>
                                </div>

                                {/* Content grid */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" style={{ minHeight: '280px' }}>
                                    {/* Left: Text */}
                                    <div className="flex flex-col justify-between h-full" style={{ minHeight: '260px' }}>
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 font-display">
                                                {activePoint.title}
                                            </h3>
                                            <p className="text-secondary text-sm md:text-base leading-relaxed mb-6">
                                                {activePoint.description}
                                            </p>
                                        </div>
                                        {/* Stat */}
                                        <div className="flex items-baseline gap-2 px-4 py-3 bg-red-500/5 border border-red-500/10 rounded-xl inline-flex">
                                            <span className="text-2xl font-extrabold text-red-400 font-mono">
                                                {activePoint.stat.value}
                                            </span>
                                            <span className="text-xs text-red-400/60">
                                                {activePoint.stat.label}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Right: Animation */}
                                    <div className="h-64">
                                        <AnimationForType type={activePoint.animation} isActive={true} />
                                    </div>
                                </div>

                                {/* CTA on last slide */}
                                {isLastSlide && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="mt-8 pt-6 border-t border-white/[0.04] text-center"
                                    >
                                        <p className="text-secondary text-sm mb-4">¿Te sientes identificado? Podemos solucionarlo.</p>
                                        <a
                                            href="#contacto"
                                            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,40,0,0.3)] hover:scale-105"
                                        >
                                            Trabajemos juntos
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </a>
                                    </motion.div>
                                )}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Scroll hint */}
                    {!isLastSlide && (
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, duration: 2 }}
                            className="text-center mt-6"
                        >
                            <span className="text-[10px] text-white/20">Desliza para ver más</span>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default PainPoints;

