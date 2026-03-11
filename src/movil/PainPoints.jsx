import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, animate } from 'framer-motion';

/* ======================================================
   Pain Points — Horizontal swipe cards for mobile
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
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col font-mono">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Tareas pendientes — HOY</span>
                <span className="ml-auto text-[9px] text-red-400 font-mono">{tasks.length - Math.min(tasksDone, tasks.length)} pendientes</span>
            </div>
            <div className="flex-1 space-y-1">
                {tasks.map((task, i) => {
                    const done = i < tasksDone;
                    return (
                        <div key={task} className={`flex items-center gap-2 text-[10px] transition-opacity duration-300 ${done ? 'opacity-40' : 'opacity-100'}`}>
                            <div className={`w-3 h-3 rounded border flex items-center justify-center shrink-0 transition-colors duration-300 ${done ? 'bg-white/5 border-white/10' : 'border-red-500/30 bg-red-500/5'}`}>
                                {done && <span className="text-[7px] text-white/30">✓</span>}
                            </div>
                            <span className={done ? 'text-white/25 line-through' : 'text-white/70'}>{task}</span>
                        </div>
                    );
                })}
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
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 relative flex flex-col">
            <div className="flex items-center gap-2 mb-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Estado de integraciones</span>
            </div>
            <div className="flex-1 min-h-0">
                <svg className="w-full h-full" viewBox="0 0 100 90" preserveAspectRatio="xMidYMid meet">
                    {[[0, 1], [0, 2], [1, 3], [2, 3], [0, 3], [1, 2]].map(([a, b], i) => (
                        <line key={`${a}-${b}`}
                            x1={tools[a].x + 13} y1={tools[a].y + 7}
                            x2={tools[b].x + 13} y2={tools[b].y + 7}
                            stroke={i === brokenLink ? '#ef4444' : '#ffffff'}
                            strokeWidth="0.5"
                            opacity={i === brokenLink ? 0.6 : 0.04}
                            strokeDasharray={i === brokenLink ? '3 2' : '0'}
                        />
                    ))}
                    {tools.map((tool, i) => (
                        <g key={tool.name}>
                            <rect x={tool.x} y={tool.y} width="26" height="14" rx="3" fill="#ffffff" opacity="0.04"
                                stroke={i === brokenLink || (i + 1) % 4 === brokenLink ? '#ef4444' : '#ffffff'} strokeWidth="0.4" />
                            <text x={tool.x + 13} y={tool.y + 9} textAnchor="middle" fill="#ffffff" opacity="0.5" fontSize="4" fontWeight="600">
                                {tool.name}
                            </text>
                        </g>
                    ))}
                    <g>
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
    const bars = [25, 60, 40, 70, 35, 55, 45];
    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <span className="text-[9px] text-white/40">Dashboard — Datos obsoletos</span>
                </div>
                <span className="text-[8px] text-yellow-500/60 font-mono">Hace 5 días</span>
            </div>
            <div className="flex-1 flex items-end gap-1 px-1 relative">
                {bars.map((h, i) => (
                    <div key={i} className="flex-1 rounded-t-sm" style={{ height: isActive ? `${h}%` : '0%', opacity: 0.3, filter: 'blur(2px)', background: 'linear-gradient(to top, #ef4444, #f97316)', transition: 'height 0.4s ease' }} />
                ))}
                <div className="absolute inset-0 bg-[#0D0D0D]/40 flex items-center justify-center">
                    <div className="text-center">
                        <div className="text-base font-bold text-white/30">???</div>
                        <div className="text-[8px] text-white/15 mt-1">Sin datos en tiempo real</div>
                    </div>
                </div>
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
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Simulador de crecimiento lineal</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 mb-3">
                {[
                    { val: current.people, label: 'Empleados', color: 'text-white/90' },
                    { val: current.cost, label: 'Coste/mes', color: 'text-red-400' },
                    { val: current.volume, label: 'Volumen', color: 'text-white/90' },
                ].map((m) => (
                    <div key={m.label} className="bg-white/[0.02] rounded-lg p-2 text-center border border-white/[0.03]">
                        <div className={`text-sm font-bold font-mono ${m.color}`}>{m.val}</div>
                        <div className="text-[7px] text-white/25">{m.label}</div>
                    </div>
                ))}
            </div>
            <div className="flex-1 flex items-center justify-center flex-wrap gap-0.5">
                {Array.from({ length: current.people }).map((_, i) => (
                    <div key={i} className="w-3 h-3 rounded-full bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                    </div>
                ))}
            </div>
            <div className="mt-1 pt-1 border-t border-white/[0.04] text-center">
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
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col">
            <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <span className="text-[9px] text-white/40">Brecha tecnológica</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-3 px-1">
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-green-400/80 font-semibold">Tu competencia</span>
                        <span className="text-[9px] text-green-400/60 font-mono">{Math.min(50 + gap * 5, 95)}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <div className="h-full bg-green-500/50 rounded-full transition-all duration-300" style={{ width: `${Math.min(50 + gap * 5, 95)}%` }} />
                    </div>
                </div>
                <div>
                    <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] text-red-400/80 font-semibold">Tu empresa</span>
                        <span className="text-[9px] text-red-400/60 font-mono">{Math.max(50 - gap * 3, 15)}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-white/[0.04] rounded-full overflow-hidden">
                        <div className="h-full bg-red-500/50 rounded-full transition-all duration-300" style={{ width: `${Math.max(50 - gap * 3, 15)}%` }} />
                    </div>
                </div>
                <div className="text-center mt-1">
                    <div className="text-xs font-bold text-red-400">Brecha: {Math.min(gap * 8, 80)}%</div>
                    <div className="text-[8px] text-white/20 mt-0.5">Crece cada día sin acción</div>
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
        description: 'Cada vez que crece tu volumen de trabajo, necesitas contratar más gente. Tu modelo de crecimiento es lineal cuando debería ser exponencial.',
        stat: { value: '3x', label: 'más coste al duplicar volumen' },
        animation: 'scaling-cost',
    },
    {
        id: 2,
        tag: 'Operaciones',
        title: 'Procesos manuales que devoran horas',
        description: 'Tu equipo pierde cientos de horas al mes en tareas que deberían estar automatizadas. Es tiempo que nunca vuelve.',
        stat: { value: '72%', label: 'del tiempo en tareas repetitivas' },
        animation: 'manual-tasks',
    },
    {
        id: 3,
        tag: 'Competitividad',
        title: 'Tu competencia ya se ha digitalizado',
        description: 'Mientras sigues con procesos del 2015, tus competidores automatizan y responden diez veces más rápido que tú.',
        stat: { value: '-40%', label: 'de competitividad cada año' },
        animation: 'competition',
    },
    {
        id: 4,
        tag: 'Control',
        title: 'Cero visibilidad sobre tu negocio',
        description: 'No tienes un panel donde ver qué pasa en tu empresa en tiempo real. Las decisiones se toman con datos de la semana pasada.',
        stat: { value: '5 días', label: 'de retraso medio en datos' },
        animation: 'no-visibility',
    },
    {
        id: 5,
        tag: 'Tecnología',
        title: 'Herramientas desconectadas entre sí',
        description: 'CRM, facturación y ERP en su propio mundo. La información no fluye entre sistemas, se duplica y se pierde.',
        stat: { value: '€2.400', label: '/mes en apps infrautilizadas' },
        animation: 'disconnected-tools',
    },
];

/* ======================================================
   Main Section — Horizontal swipe cards for mobile
   ====================================================== */
const PainPoints = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const total = painPoints.length;
    const containerRef = useRef(null);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const startY = useRef(0);
    const currentTranslate = useRef(0);

    const goTo = (index) => {
        const clamped = Math.max(0, Math.min(total - 1, index));
        setActiveIndex(clamped);
    };

    const activePoint = painPoints[activeIndex];

    return (
        <section id="problemas" className="relative bg-background py-16 overflow-hidden">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 px-5">
                {/* Section Header */}
                <div className="text-center mb-8">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-3 block">
                        EL PROBLEMA
                    </span>
                    <h2 className="text-[28px] font-extrabold tracking-tighter leading-[1] font-display mb-3">
                        ¿Por qué estás<br />
                        <span className="text-accent">perdiendo dinero?</span>
                    </h2>
                    <p className="text-secondary text-sm max-w-xs mx-auto leading-relaxed">
                        La mayoría de las empresas pierden el 30% de sus ingresos por procesos ineficientes.
                    </p>
                </div>

                {/* Step dots */}
                <div className="flex items-center justify-center gap-2 mb-6">
                    {painPoints.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i)}
                            className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === activeIndex ? 'w-8 bg-accent' : 'w-2 bg-white/10'}`}
                        />
                    ))}
                </div>

                {/* Swipeable Card Area */}
                <motion.div
                    className="relative touch-pan-y"
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.15}
                    onDragEnd={(e, info) => {
                        const threshold = 50;
                        if (info.offset.x < -threshold) {
                            goTo(activeIndex + 1);
                        } else if (info.offset.x > threshold) {
                            goTo(activeIndex - 1);
                        }
                    }}
                >
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={activePoint.id}
                            initial={{ opacity: 0, x: 60 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -60 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-5"
                        >
                            {/* Tag + Counter */}
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                                    {activePoint.tag}
                                </span>
                                <span className="text-[10px] text-white/30 font-mono">
                                    {activeIndex + 1} / {total}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold tracking-tight text-white mb-3 font-display">
                                {activePoint.title}
                            </h3>

                            {/* Description */}
                            <p className="text-secondary text-sm leading-relaxed mb-4">
                                {activePoint.description}
                            </p>

                            {/* Stat */}
                            <div className="flex items-baseline gap-2 px-3 py-2.5 bg-red-500/5 border border-red-500/10 rounded-xl mb-4">
                                <span className="text-xl font-extrabold text-red-400 font-mono">
                                    {activePoint.stat.value}
                                </span>
                                <span className="text-xs text-red-400/60">
                                    {activePoint.stat.label}
                                </span>
                            </div>

                            {/* Animation — shorter for mobile */}
                            <div className="h-48">
                                <AnimationForType type={activePoint.animation} isActive={true} />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

                {/* Swipe hint */}
                <div className="text-center mt-4">
                    <span className="text-[10px] text-white/20">← Desliza para ver más →</span>
                </div>
            </div>
        </section>
    );
};

export default PainPoints;
