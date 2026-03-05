import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        id: 1,
        label: 'Proceso de Onboarding',
        timeline: 'Semana 1',
        title: 'Análisis y Onboarding',
        description: 'Analizamos a fondo tu operativa actual, flujos de trabajo, herramientas existentes y puntos de fricción. Mapeamos cada proceso para identificar exactamente dónde se pierde tiempo y dinero.',
        features: ['Auditoría operativa completa', 'Mapa de flujos de trabajo', 'Identificación de cuellos de botella', 'Informe de oportunidades'],
        icon: (
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <rect x="30" y="30" width="140" height="140" rx="16" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <rect x="50" y="60" width="100" height="8" rx="4" fill="currentColor" opacity="0.15" />
                <rect x="50" y="80" width="80" height="8" rx="4" fill="currentColor" opacity="0.15" />
                <rect x="50" y="100" width="90" height="8" rx="4" fill="currentColor" opacity="0.15" />
                <rect x="50" y="120" width="60" height="8" rx="4" fill="currentColor" opacity="0.15" />
                <circle cx="42" cy="64" r="4" fill="#FF2800" opacity="0.8" />
                <circle cx="42" cy="84" r="4" fill="#FF2800" opacity="0.6" />
                <circle cx="42" cy="104" r="4" fill="#FF2800" opacity="0.4" />
                <circle cx="42" cy="124" r="4" fill="currentColor" opacity="0.2" />
                <path d="M38 62 L42 66 L48 58" stroke="#FF2800" strokeWidth="1.5" strokeLinecap="round" opacity="0.8" />
            </svg>
        ),
    },
    {
        id: 2,
        label: 'Definición de Estrategia',
        timeline: 'Semana 2',
        title: 'Auditoría y Estrategia',
        description: 'Diseñamos la arquitectura de la solución ideal. Definimos qué automatizar, qué integrar y cómo orquestar todos los sistemas para que trabajen como un ecosistema cohesionado.',
        features: ['Diseño de arquitectura', 'Plan de automatizaciones', 'Estrategia de integración', 'Roadmap técnico'],
        icon: (
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1.5" opacity="0.1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" opacity="0.15" />
                <circle cx="100" cy="100" r="20" stroke="#FF2800" strokeWidth="1.5" opacity="0.4" />
                <line x1="100" y1="40" x2="100" y2="60" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <line x1="160" y1="100" x2="140" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <line x1="100" y1="160" x2="100" y2="140" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <line x1="40" y1="100" x2="60" y2="100" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <circle cx="100" cy="40" r="5" fill="#FF2800" opacity="0.6" />
                <circle cx="160" cy="100" r="5" fill="#FF2800" opacity="0.4" />
                <circle cx="100" cy="160" r="5" fill="currentColor" opacity="0.3" />
                <circle cx="40" cy="100" r="5" fill="currentColor" opacity="0.3" />
                <path d="M85 95 L95 105 L115 85" stroke="#FF2800" strokeWidth="2" strokeLinecap="round" opacity="0.7" />
            </svg>
        ),
    },
    {
        id: 3,
        label: 'Proceso de Desarrollo',
        timeline: 'Semana 3-6',
        title: 'Desarrollo e Implementación',
        description: 'Desarrollamos tu solución con tecnología de alto rendimiento. Despliegue progresivo, testing riguroso y formación a tu equipo incluida. Todo listo para escalar desde el día uno.',
        features: ['Desarrollo ágil por sprints', 'Integración con tus herramientas', 'Testing y QA completo', 'Formación y soporte'],
        icon: (
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <rect x="30" y="40" width="140" height="100" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <rect x="42" y="55" width="50" height="6" rx="3" fill="#FF2800" opacity="0.4" />
                <rect x="52" y="67" width="70" height="6" rx="3" fill="currentColor" opacity="0.15" />
                <rect x="52" y="79" width="55" height="6" rx="3" fill="currentColor" opacity="0.1" />
                <rect x="42" y="91" width="40" height="6" rx="3" fill="#FF2800" opacity="0.3" />
                <rect x="52" y="103" width="65" height="6" rx="3" fill="currentColor" opacity="0.15" />
                <rect x="52" y="115" width="45" height="6" rx="3" fill="currentColor" opacity="0.1" />
                <path d="M135 75 L145 85 L155 65" stroke="#FF2800" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
                <rect x="60" y="150" width="80" height="12" rx="6" fill="#FF2800" opacity="0.15" />
                <rect x="75" y="153" width="50" height="6" rx="3" fill="#FF2800" opacity="0.4" />
            </svg>
        ),
    },
    {
        id: 4,
        label: 'Proceso de Diseño',
        timeline: 'Semana 6-8',
        title: 'Creación del Ecosistema',
        description: 'Construimos interfaces que tus equipos realmente quieran usar. Diseño funcional, limpio y orientado a la eficiencia operativa. Cada pantalla se valida contigo antes de pasar a desarrollo.',
        features: ['Wireframes interactivos', 'Diseño UI premium', 'Validación con tu equipo', 'Prototipo navegable'],
        icon: (
            <svg className="w-full h-full" viewBox="0 0 200 200" fill="none">
                <rect x="35" y="45" width="130" height="90" rx="8" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
                <rect x="35" y="45" width="130" height="20" rx="8" fill="currentColor" opacity="0.05" />
                <circle cx="48" cy="55" r="3" fill="#FF2800" opacity="0.7" />
                <circle cx="58" cy="55" r="3" fill="currentColor" opacity="0.3" />
                <circle cx="68" cy="55" r="3" fill="currentColor" opacity="0.2" />
                <rect x="50" y="80" width="45" height="40" rx="6" fill="#FF2800" opacity="0.1" />
                <rect x="50" y="80" width="45" height="40" rx="6" stroke="#FF2800" strokeWidth="1" fill="none" opacity="0.3" />
                <rect x="105" y="80" width="45" height="18" rx="4" fill="currentColor" opacity="0.06" />
                <rect x="105" y="102" width="45" height="18" rx="4" fill="currentColor" opacity="0.06" />
                <rect x="55" y="148" width="90" height="10" rx="5" fill="currentColor" opacity="0.1" />
                <rect x="55" y="148" width="55" height="10" rx="5" fill="#FF2800" opacity="0.2" />
            </svg>
        ),
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
