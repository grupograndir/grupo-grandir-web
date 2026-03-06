import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ---- Animated Code Editor for Step 3 ---- */
const codeLines = [
    { num: 1, tokens: [{ text: 'import', color: '#FF6B4F' }, { text: ' { ', color: '#fff' }, { text: 'GrandirEngine', color: '#FF2800' }, { text: ' } ', color: '#fff' }, { text: 'from', color: '#FF6B4F' }, { text: " '@grandir/core'", color: '#CE9178' }] },
    { num: 2, tokens: [{ text: 'import', color: '#FF6B4F' }, { text: ' { ', color: '#fff' }, { text: 'Automations', color: '#FF2800' }, { text: ' } ', color: '#fff' }, { text: 'from', color: '#FF6B4F' }, { text: " '@grandir/flow'", color: '#CE9178' }] },
    { num: 3, tokens: [] },
    { num: 4, tokens: [{ text: 'const', color: '#FF6B4F' }, { text: ' pipeline ', color: '#fff' }, { text: '= ', color: '#fff' }, { text: 'new', color: '#FF6B4F' }, { text: ' GrandirEngine', color: '#FF2800' }, { text: '({', color: '#fff' }] },
    { num: 5, tokens: [{ text: '  client', color: '#9CDCFE' }, { text: ': ', color: '#fff' }, { text: "'enterprise'", color: '#CE9178' }, { text: ',', color: '#fff' }] },
    { num: 6, tokens: [{ text: '  modules', color: '#9CDCFE' }, { text: ': [', color: '#fff' }, { text: "'crm'", color: '#CE9178' }, { text: ', ', color: '#fff' }, { text: "'invoicing'", color: '#CE9178' }, { text: ', ', color: '#fff' }, { text: "'logistics'", color: '#CE9178' }, { text: ']', color: '#fff' }] },
    { num: 7, tokens: [{ text: '})', color: '#fff' }] },
    { num: 8, tokens: [] },
    { num: 9, tokens: [{ text: 'await', color: '#FF6B4F' }, { text: ' pipeline', color: '#fff' }, { text: '.deploy', color: '#DCDCAA' }, { text: '()', color: '#fff' }] },
];

const CodeEditorAnimation = () => {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        let line = 0;
        const interval = setInterval(() => {
            line += 1;
            if (line > codeLines.length) {
                line = 0;
                setVisibleLines(0);
                return;
            }
            setVisibleLines(line);
        }, 600);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/[0.06] font-mono text-[10px] md:text-xs flex">
            {/* Sidebar */}
            <div className="w-8 shrink-0 bg-white/[0.02] border-r border-white/[0.04] flex flex-col items-center pt-3 gap-3">
                <div className="w-3 h-3 rounded-sm bg-accent/30" />
                <div className="w-3 h-3 rounded-sm bg-white/10" />
                <div className="w-3 h-3 rounded-sm bg-white/10" />
            </div>
            {/* Editor */}
            <div className="flex-1 p-3 overflow-hidden">
                {/* Tab bar */}
                <div className="flex items-center gap-2 mb-3 pb-2 border-b border-white/[0.04]">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-accent/60" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                        <div className="w-2 h-2 rounded-full bg-white/20" />
                    </div>
                    <span className="text-[9px] text-white/40 ml-2">pipeline.config.js</span>
                </div>
                {/* Code lines */}
                <div className="space-y-0.5">
                    {codeLines.map((line, i) => (
                        <motion.div
                            key={line.num}
                            initial={{ opacity: 0, x: -8 }}
                            animate={i < visibleLines ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                            className="flex items-center gap-2 leading-relaxed"
                        >
                            <span className="w-4 text-right text-white/15 select-none shrink-0">{line.num}</span>
                            <div className="flex flex-wrap">
                                {line.tokens.map((token, j) => (
                                    <span key={j} style={{ color: token.color }}>{token.text}</span>
                                ))}
                                {i === visibleLines - 1 && line.tokens.length > 0 && (
                                    <motion.span
                                        animate={{ opacity: [1, 0] }}
                                        transition={{ repeat: Infinity, duration: 0.8 }}
                                        className="inline-block w-[6px] h-[14px] bg-accent ml-0.5"
                                    />
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

/* ---- Animated Audit Checklist for Step 1 ---- */
const auditItems = [
    { label: 'Flujos de trabajo' },
    { label: 'Herramientas actuales' },
    { label: 'Cuellos de botella' },
    { label: 'Costes operativos' },
    { label: 'Oportunidades' },
];

const AuditAnimation = () => {
    const [checkedCount, setCheckedCount] = useState(0);

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            count += 1;
            if (count > auditItems.length) {
                count = 0;
                setCheckedCount(0);
                return;
            }
            setCheckedCount(count);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/[0.06] p-4 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded bg-accent/20 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6h8M6 2v8" stroke="#FF2800" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    </div>
                    <span className="text-[10px] md:text-xs font-semibold text-white/60">Auditoría operativa</span>
                </div>
                <span className="text-[9px] text-accent font-mono">{Math.min(checkedCount, auditItems.length)}/{auditItems.length}</span>
            </div>
            {/* Items */}
            <div className="flex-1 space-y-2">
                {auditItems.map((item, i) => {
                    const isChecked = i < checkedCount;
                    const isCurrent = i === checkedCount - 1;
                    return (
                        <motion.div
                            key={item.label}
                            animate={{ opacity: isChecked ? 1 : 0.3, x: isChecked ? 0 : 4 }}
                            transition={{ duration: 0.3 }}
                            className="flex items-center gap-2.5"
                        >
                            <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors duration-300 ${isChecked ? 'bg-accent/20 border-accent/40' : 'border-white/10'
                                }`}>
                                {isChecked && (
                                    <motion.svg
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        width="10" height="10" viewBox="0 0 10 10" fill="none"
                                    >
                                        <path d="M2 5.5L4 7.5L8 3" stroke="#FF2800" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </motion.svg>
                                )}
                            </div>
                            <span className={`text-[10px] md:text-xs transition-colors duration-300 ${isChecked ? 'text-white/80' : 'text-white/25'}`}>
                                {item.label}
                            </span>
                            {isCurrent && (
                                <motion.div
                                    animate={{ opacity: [0.3, 1, 0.3] }}
                                    transition={{ repeat: Infinity, duration: 1.2 }}
                                    className="ml-auto text-[8px] text-accent font-mono"
                                >analizando...</motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
            {/* Progress bar */}
            <div className="mt-3 pt-3 border-t border-white/[0.04]">
                <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-accent/60 rounded-full"
                        animate={{ width: `${(Math.min(checkedCount, auditItems.length) / auditItems.length) * 100}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    />
                </div>
            </div>
        </div>
    );
};

/* ---- Animated Strategy Flowchart for Step 2 ---- */
const strategyNodes = [
    { id: 'crm', label: 'CRM', x: 15, y: 20 },
    { id: 'hub', label: 'Grandir Hub', x: 35, y: 45, isCenter: true },
    { id: 'erp', label: 'ERP', x: 70, y: 20 },
    { id: 'auto', label: 'Flujos', x: 15, y: 75 },
    { id: 'bi', label: 'BI', x: 70, y: 75 },
];

const StrategyAnimation = () => {
    const [activeConnections, setActiveConnections] = useState(0);

    useEffect(() => {
        let conn = 0;
        const interval = setInterval(() => {
            conn += 1;
            if (conn > 4) {
                conn = 0;
                setActiveConnections(0);
                return;
            }
            setActiveConnections(conn);
        }, 700);
        return () => clearInterval(interval);
    }, []);

    const connections = [
        { from: 'crm', to: 'hub' },
        { from: 'erp', to: 'hub' },
        { from: 'auto', to: 'hub' },
        { from: 'bi', to: 'hub' },
    ];

    return (
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/[0.06] p-4 relative flex flex-col">
            {/* Title */}
            <div className="flex items-center gap-2 mb-2 shrink-0">
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <span className="text-[9px] text-white/40">Arquitectura del ecosistema</span>
            </div>
            {/* Flowchart */}
            <div className="flex-1 min-h-0">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                    {/* Connection lines */}
                    {connections.map((conn, i) => {
                        const from = strategyNodes.find(n => n.id === conn.from);
                        const to = strategyNodes.find(n => n.id === conn.to);
                        const isActive = i < activeConnections;
                        return (
                            <g key={`${conn.from}-${conn.to}`}>
                                <line
                                    x1={from.x + 8} y1={from.y + 5}
                                    x2={to.x + 10} y2={to.y + 5}
                                    stroke={isActive ? '#FF2800' : '#ffffff'}
                                    strokeWidth="0.5"
                                    opacity={isActive ? 0.5 : 0.06}
                                    style={{ transition: 'all 0.5s ease' }}
                                />
                                {isActive && (
                                    <circle r="1.5" fill="#FF2800" opacity="0.8">
                                        <animateMotion
                                            dur="1.5s"
                                            repeatCount="indefinite"
                                            path={`M${from.x + 8},${from.y + 5} L${to.x + 10},${to.y + 5}`}
                                        />
                                    </circle>
                                )}
                            </g>
                        );
                    })}
                    {/* Nodes */}
                    {strategyNodes.map((node) => {
                        const isConnected = node.isCenter || connections.findIndex(c => c.from === node.id) < activeConnections;
                        const w = node.isCenter ? 22 : 16;
                        return (
                            <g key={node.id}>
                                <rect
                                    x={node.x} y={node.y}
                                    width={w} height="10" rx="2"
                                    fill={node.isCenter ? '#FF2800' : isConnected ? '#FF2800' : '#ffffff'}
                                    opacity={node.isCenter ? 0.25 : isConnected ? 0.15 : 0.05}
                                    style={{ transition: 'all 0.5s ease' }}
                                />
                                <rect
                                    x={node.x} y={node.y}
                                    width={w} height="10" rx="2"
                                    fill="none"
                                    stroke={node.isCenter ? '#FF2800' : isConnected ? '#FF2800' : '#ffffff'}
                                    strokeWidth="0.4"
                                    opacity={node.isCenter ? 0.6 : isConnected ? 0.4 : 0.1}
                                    style={{ transition: 'all 0.5s ease' }}
                                />
                                <text
                                    x={node.x + w / 2} y={node.y + 6.5}
                                    textAnchor="middle"
                                    fill="#ffffff"
                                    opacity={isConnected || node.isCenter ? 0.8 : 0.2}
                                    fontSize={node.isCenter ? '2.8' : '3'}
                                    fontWeight="600"
                                    style={{ transition: 'opacity 0.5s ease' }}
                                >
                                    {node.label}
                                </text>
                            </g>
                        );
                    })}
                </svg>
            </div>
        </div>
    );
};

/* ---- Animated Launch Dashboard for Step 4 ---- */
const LaunchAnimation = () => {
    const [phase, setPhase] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        let p = 0;
        const interval = setInterval(() => {
            p += 5;
            if (p <= 100) {
                setProgress(p);
                if (p >= 40) setPhase(1);
                if (p >= 80) setPhase(2);
            } else {
                p = 0;
                setProgress(0);
                setPhase(0);
            }
        }, 200);
        return () => clearInterval(interval);
    }, []);

    const metrics = [
        { label: 'Procesos', value: Math.round(progress * 0.47), suffix: '' },
        { label: 'Eficiencia', value: Math.round(progress * 0.92), suffix: '%' },
        { label: 'Ahorro', value: Math.round(progress * 0.35), suffix: 'h' },
    ];

    return (
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/[0.06] p-4 flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.04]">
                <div className="flex items-center gap-2">
                    <motion.div
                        animate={{ scale: phase === 2 ? [1, 1.3, 1] : 1 }}
                        transition={{ repeat: phase === 2 ? Infinity : 0, duration: 1.5 }}
                        className={`w-2 h-2 rounded-full ${phase === 2 ? 'bg-green-500' : phase === 1 ? 'bg-yellow-500' : 'bg-accent'}`}
                    />
                    <span className="text-[10px] md:text-xs font-semibold text-white/60">
                        {phase === 0 ? 'Desplegando...' : phase === 1 ? 'Verificando...' : '¡En producción!'}
                    </span>
                </div>
                <span className="text-[9px] text-white/30 font-mono">v1.0.0</span>
            </div>
            {/* Deploy progress */}
            <div className="mb-4">
                <div className="flex justify-between mb-1.5">
                    <span className="text-[9px] text-white/30">Deploy</span>
                    <span className="text-[9px] text-accent font-mono">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div
                        className={`h-full rounded-full ${phase === 2 ? 'bg-green-500/70' : 'bg-accent/60'}`}
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.15 }}
                    />
                </div>
            </div>
            {/* Metrics */}
            <div className="grid grid-cols-3 gap-2 flex-1">
                {metrics.map((m) => (
                    <div key={m.label} className="bg-white/[0.02] rounded-lg p-2 flex flex-col items-center justify-center border border-white/[0.03]">
                        <span className="text-base md:text-lg font-bold text-white/90 font-mono">
                            {m.value}{m.suffix}
                        </span>
                        <span className="text-[8px] text-white/30 mt-0.5">{m.label}</span>
                    </div>
                ))}
            </div>
            {/* Status bar */}
            <div className="mt-3 pt-3 border-t border-white/[0.04] flex items-center gap-3">
                {['Build', 'Test', 'Deploy'].map((step, i) => (
                    <div key={step} className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${(i === 0 && progress > 0) || (i === 1 && phase >= 1) || (i === 2 && phase >= 2)
                                ? 'bg-green-500' : 'bg-white/10'
                            }`} />
                        <span className="text-[8px] text-white/30">{step}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const steps = [
    {
        id: 1,
        label: 'Proceso de Onboarding',
        timeline: 'Semana 1',
        title: 'Análisis y Onboarding',
        description: 'Analizamos a fondo tu operativa actual, flujos de trabajo, herramientas existentes y puntos de fricción. Mapeamos cada proceso para identificar exactamente dónde se pierde tiempo y dinero.',
        features: ['Auditoría operativa completa', 'Mapa de flujos de trabajo', 'Identificación de cuellos de botella', 'Informe de oportunidades'],
        icon: 'audit',
    },
    {
        id: 2,
        label: 'Definición de Estrategia',
        timeline: 'Semana 2',
        title: 'Auditoría y Estrategia',
        description: 'Diseñamos la arquitectura de la solución ideal. Definimos qué automatizar, qué integrar y cómo orquestar todos los sistemas para que trabajen como un ecosistema cohesionado.',
        features: ['Diseño de arquitectura', 'Plan de automatizaciones', 'Estrategia de integración', 'Roadmap técnico'],
        icon: 'strategy',
    },
    {
        id: 3,
        label: 'Proceso de Desarrollo',
        timeline: 'Semana 3-6',
        title: 'Diseño y Desarrollo',
        description: 'Desarrollamos tu solución con tecnología de alto rendimiento. Despliegue progresivo, testing riguroso y personalización a medida. Todo listo para escalar desde el día uno.',
        features: ['Desarrollo ágil por sprints', 'Integración con tus herramientas', 'Testing y QA completo', 'Personalización'],
        icon: 'code-editor',
    },
    {
        id: 4,
        label: 'Proceso de Implementación',
        timeline: 'Semana 7',
        title: 'Implementación del Ecosistema',
        description: 'Lanzamos tu solución y te acompañamos en cada paso. Formación a tu equipo, soporte continuo y optimización constante para asegurar que alcances tus objetivos de eficiencia desde el primer día.',
        features: ['Lanzamiento guiado', 'Formación a usuarios', 'Soporte prioritario', 'Optimización continua'],
        icon: 'launch',
    },
];

const StepCard = ({ step }) => (
    <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#0A0A0A] border border-white/[0.06] rounded-3xl p-8 lg:p-10"
    >
        {/* Timeline badge */}
        <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">
                {step.timeline}
            </span>
            <div className="h-[1px] flex-1 bg-white/[0.06]" />
        </div>

        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-white mb-4 font-display">
            {step.title}
        </h3>

        {/* Description */}
        <p className="text-secondary text-sm md:text-base leading-relaxed mb-8">
            {step.description}
        </p>

        {/* Illustration */}
        {typeof step.icon === 'string' ? (
            <div className="mb-8 h-56">
                {step.icon === 'audit' && <AuditAnimation />}
                {step.icon === 'strategy' && <StrategyAnimation />}
                {step.icon === 'code-editor' && <CodeEditorAnimation />}
                {step.icon === 'launch' && <LaunchAnimation />}
            </div>
        ) : (
            <div className="bg-white/[0.02] border border-white/[0.04] rounded-2xl p-8 mb-8 flex items-center justify-center text-white/60 h-48">
                <motion.div
                    initial={{ scale: 0.85, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="w-40 h-40"
                >
                    {step.icon}
                </motion.div>
            </div>
        )}

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-3">
            {step.features.map((feature, i) => (
                <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.08 * i }}
                    className="flex items-center gap-2"
                >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-xs text-secondary">{feature}</span>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Methodology = () => {
    const [activeStep, setActiveStep] = useState(0);
    const cardRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = cardRefs.current.indexOf(entry.target);
                        if (index !== -1) setActiveStep(index);
                    }
                });
            },
            { threshold: 0.4, rootMargin: '-30% 0px -30% 0px' }
        );

        cardRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToStep = (index) => {
        cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    };

    return (
        <section className="relative py-32">
            {/* Background — clipped independently so it doesn't break sticky */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[200px]" />
            </div>

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
                        Metodología Grandir
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] font-display mb-6">
                        Nuestra<br />
                        <span className="text-accent">metodología.</span>
                    </h2>
                    <p className="text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Un proceso probado para transformar tu empresa en semanas, no meses.
                    </p>
                </motion.div>

                {/* Two-column layout using flex instead of grid for proper sticky behavior */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative">
                    {/* Left Sidebar — Sticky Navigation */}
                    <div className="lg:w-[320px] shrink-0">
                        <div className="lg:sticky lg:top-24" style={{ position: '-webkit-sticky' }}>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="space-y-2"
                            >
                                {steps.map((step, index) => (
                                    <button
                                        key={step.id}
                                        onClick={() => scrollToStep(index)}
                                        className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-300 group flex items-center gap-4 ${activeStep === index
                                            ? 'bg-white text-black shadow-lg'
                                            : 'bg-white/[0.03] text-secondary hover:bg-white/[0.06]'
                                            }`}
                                    >
                                        <span className={`text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${activeStep === index
                                            ? 'bg-accent text-white'
                                            : 'bg-white/[0.08] text-secondary'
                                            }`}>
                                            {step.id}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className={`text-sm font-semibold transition-colors duration-300 ${activeStep === index ? 'text-black' : 'text-white'
                                                }`}>
                                                {step.label}
                                            </span>
                                            <span className={`text-[10px] tracking-wider uppercase transition-colors duration-300 ${activeStep === index ? 'text-black/50' : 'text-secondary/50'
                                                }`}>
                                                {step.timeline}
                                            </span>
                                        </div>
                                    </button>
                                ))}
                            </motion.div>

                            {/* Progress indicator */}
                            <div className="mt-8 px-5 hidden lg:block">
                                <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-accent rounded-full"
                                        animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                                        transition={{ duration: 0.5, ease: 'easeOut' }}
                                    />
                                </div>
                                <p className="text-[10px] text-secondary/50 mt-2 tracking-wider uppercase">
                                    Fase {activeStep + 1} de {steps.length}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column — Scrollable Cards */}
                    <div className="flex-1 space-y-8">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                ref={(el) => (cardRefs.current[index] = el)}
                            >
                                <StepCard step={step} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
