import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ======================================================
   FAQ Data
   ====================================================== */
const faqs = [
    {
        question: '¿Cuánto tiempo tarda un proyecto?',
        answer: 'La mayoría de nuestros proyectos se completan entre 4 y 8 semanas. Empezamos con un sprint de descubrimiento y entregamos incrementos funcionales cada 7 días.',
    },
    {
        question: '¿Necesito conocimientos técnicos?',
        answer: 'En absoluto. Nos encargamos de toda la parte técnica. Solo necesitamos que nos expliques cómo funciona tu negocio y qué te gustaría mejorar.',
    },
    {
        question: '¿Cuánto cuesta un proyecto?',
        answer: 'Cada proyecto es único. Tras una primera reunión gratuita de diagnóstico, preparamos una propuesta detallada con el alcance y la inversión necesaria.',
    },
    {
        question: '¿Qué tipo de empresas pueden beneficiarse?',
        answer: 'Trabajamos con pymes y startups que quieren escalar sin multiplicar su equipo. Desde empresas industriales hasta agencias, inmobiliarias o clínicas.',
    },
    {
        question: '¿Qué tecnologías utilizáis?',
        answer: 'React, Next.js, Node.js para desarrollo web, n8n y APIs para automatización, y herramientas de IA cuando aportan valor real.',
    },
    {
        question: '¿Ofrecéis soporte post-entrega?',
        answer: 'Sí, todos nuestros proyectos incluyen soporte post-lanzamiento. También ofrecemos planes de mantenimiento y evolución continua.',
    },
    {
        question: '¿En qué os diferenciáis de una agencia?',
        answer: 'Nos especializamos en transformación operativa: automatizamos, integramos y digitalizamos procesos completos con impacto directo en tu cuenta de resultados.',
    },
];

/* ======================================================
   Single FAQ Item — Accordion (simplified for mobile)
   ====================================================== */
const FAQItem = ({ faq, index, isOpen, onToggle }) => {
    return (
        <button
            onClick={onToggle}
            className={`w-full text-left transition-all duration-300 ${isOpen
                ? 'bg-white/[0.06] border-white/[0.1]'
                : 'bg-white/[0.02] border-white/[0.04]'
                } border rounded-xl overflow-hidden cursor-pointer`}
        >
            {/* Question row */}
            <div className="flex items-center justify-between px-4 py-4">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                    <span className={`text-[9px] font-bold w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                        ? 'bg-accent text-white'
                        : 'bg-white/[0.06] text-secondary'
                        }`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-[13px] font-semibold leading-snug transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80'}`}>
                        {faq.question}
                    </span>
                </div>

                {/* Toggle icon */}
                <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ml-2 transition-all duration-300 ${isOpen ? 'bg-accent text-white' : 'bg-white/[0.06] text-secondary'}`}
                >
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                        <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </motion.div>
            </div>

            {/* Answer */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                    >
                        <div className="px-4 pb-4 pt-0">
                            <div className="ml-8 border-l-2 border-accent/20 pl-3">
                                <p className="text-secondary text-[13px] leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </button>
    );
};

/* ======================================================
   FAQ Section (mobile-optimized)
   ====================================================== */
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="relative py-16 bg-background overflow-hidden px-5">
            {/* Background accent — smaller for mobile */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-1/4 left-0 w-[200px] h-[200px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4 block">
                        Preguntas frecuentes
                    </span>
                    <h2 className="text-[26px] font-extrabold tracking-tighter leading-[1] font-display mb-4">
                        Resolvemos<br />
                        <span className="text-accent">tus dudas.</span>
                    </h2>
                    <p className="text-secondary text-sm max-w-xs mx-auto leading-relaxed">
                        Todo lo que necesitas saber antes de dar el paso.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-2.5">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            faq={faq}
                            index={index}
                            isOpen={openIndex === index}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-10">
                    <p className="text-secondary text-sm mb-3">¿Tienes más preguntas?</p>
                    <a
                        href="https://cal.com/grupograndir/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] text-white font-semibold px-6 py-2.5 rounded-full text-sm"
                    >
                        Escríbenos
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
