import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ======================================================
   FAQ Data
   ====================================================== */
const faqs = [
    {
        question: '¿Cuánto tiempo tarda un proyecto de automatización?',
        answer: 'Depende del alcance, pero la mayoría de nuestros proyectos se completan entre 4 y 8 semanas. Empezamos con un sprint de descubrimiento en la primera semana y entregamos incrementos funcionales cada 7 días, para que veas resultados desde el primer momento.',
    },
    {
        question: '¿Necesito conocimientos técnicos para trabajar con vosotros?',
        answer: 'En absoluto. Nos encargamos de toda la parte técnica. Solo necesitamos que nos expliques cómo funciona tu negocio, cuáles son tus procesos actuales y qué te gustaría mejorar. Nosotros traducimos eso en soluciones tecnológicas a medida.',
    },
    {
        question: '¿Cuánto cuesta un proyecto con Grupo Grandir?',
        answer: 'Cada proyecto es único, por lo que no trabajamos con precios cerrados genéricos. Tras una primera reunión gratuita de diagnóstico, preparamos una propuesta detallada con el alcance, las fases y la inversión necesaria. Nuestro objetivo es que el retorno supere ampliamente la inversión.',
    },
    {
        question: '¿Qué tipo de empresas pueden beneficiarse?',
        answer: 'Trabajamos con pymes y startups que quieren escalar sin multiplicar su equipo. Desde empresas industriales hasta agencias de marketing, inmobiliarias o clínicas. Si tienes procesos manuales y repetitivos, probablemente podemos ayudarte.',
    },
    {
        question: '¿Qué tecnologías utilizáis?',
        answer: 'Utilizamos un stack moderno adaptado a cada caso: React, Next.js, Node.js para desarrollo web, n8n y APIs para automatización, y herramientas de IA cuando aportan valor real. No vendemos tecnología por vender — elegimos la herramienta correcta para cada problema.',
    },
    {
        question: '¿Ofrecéis soporte después de la entrega?',
        answer: 'Sí, todos nuestros proyectos incluyen un periodo de soporte post-lanzamiento. Además, ofrecemos planes de mantenimiento y evolución continua para que tus sistemas crezcan contigo. No te dejamos solo después de la entrega.',
    },
    {
        question: '¿En qué se diferencia Grupo Grandir de una agencia tradicional?',
        answer: 'No somos una agencia que hace webs bonitas y se va. Nos especializamos en transformación operativa: automatizamos, integramos y digitalizamos procesos completos. Nuestro trabajo tiene impacto directo en tu cuenta de resultados, no solo en tu imagen.',
    },
];

/* ======================================================
   Single FAQ Item — Accordion
   ====================================================== */
const FAQItem = ({ faq, index, isOpen, onToggle }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        >
            <button
                onClick={onToggle}
                className={`w-full text-left group transition-all duration-400 ${isOpen
                    ? 'bg-white/[0.06] border-white/[0.1]'
                    : 'bg-white/[0.02] border-white/[0.04] hover:bg-white/[0.04]'
                    } border rounded-2xl overflow-hidden`}
            >
                {/* Question row */}
                <div className="flex items-center justify-between px-6 md:px-8 py-5 md:py-6">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                        <span className={`text-[10px] font-bold w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen
                            ? 'bg-accent text-white'
                            : 'bg-white/[0.06] text-secondary'
                            }`}>
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className={`text-sm md:text-base font-semibold transition-colors duration-300 ${isOpen ? 'text-white' : 'text-white/80'
                            }`}>
                            {faq.question}
                        </span>
                    </div>

                    {/* Toggle icon */}
                    <motion.div
                        animate={{ rotate: isOpen ? 45 : 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 transition-all duration-300 ${isOpen
                            ? 'bg-accent text-white'
                            : 'bg-white/[0.06] text-secondary group-hover:bg-white/[0.1]'
                            }`}
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </motion.div>
                </div>

                {/* Answer — animated expand */}
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 md:px-8 pb-6 md:pb-8 pt-0">
                                <div className="ml-10 pl-0 border-l-2 border-accent/20 pl-5">
                                    <p className="text-secondary text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
};

/* ======================================================
   FAQ Section
   ====================================================== */
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faqs" className="relative py-32 bg-background overflow-hidden">
            {/* Background accents */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[200px]" />
                <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/3 rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-16"
                >
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-6 block">
                        Preguntas frecuentes
                    </span>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[0.95] font-display mb-6">
                        Resolvemos<br />
                        <span className="text-accent">tus dudas.</span>
                    </h2>
                    <p className="text-secondary text-base md:text-lg max-w-lg mx-auto leading-relaxed">
                        Todo lo que necesitas saber antes de dar el paso hacia la transformación digital de tu empresa.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-3">
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-center mt-16"
                >
                    <p className="text-secondary text-sm mb-4">¿Tienes más preguntas?</p>
                    <a
                        href="#contacto"
                        className="inline-flex items-center gap-2 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.08] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 text-sm"
                    >
                        Escríbenos y te respondemos
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
