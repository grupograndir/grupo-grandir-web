import React from 'react';
import { motion } from 'framer-motion';

const features = [
    'INFRAESTRUCTURA A MEDIDA',
    'INTEGRACIÓN CON TUS HERRAMIENTAS',
    'PROPIEDAD INTELECTUAL INTACTA',
];

const ServicesHero = () => {
    return (
        <section className="relative py-32 md:py-40 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[180px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-blue-600/3 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                {/* Badge Pill */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-10"
                >
                    <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-5 py-2 text-[11px] font-semibold tracking-[0.25em] uppercase text-secondary">
                        LA SOLUCIÓN · GRUPO GRANDIR
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.05] font-display text-center mb-10"
                >
                    <span className="text-white">Desarrollo de SaaS a medida</span>
                    <br />
                    <span className="services-text-gradient">para reducir tus costes.</span>
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base md:text-lg text-secondary text-center max-w-2xl mx-auto leading-relaxed mb-6"
                >
                    Diseñamos el software que necesitas para eliminar el trabajo manual repetitivo, todo ello dentro de un{' '}
                    <span className="text-white font-semibold">  único ecosistema propio.</span>
                </motion.p>

                {/* Accent highlight line */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center text-sm md:text-base mb-10"
                >
                    <span className="text-accent">
                        Especialistas en <strong>B2B, logística, transportes y construcción</strong> que necesitan escalar sus operaciones y eliminar costes innecesarios.
                    </span>
                </motion.p>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    className="flex justify-center mb-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-accent text-white px-10 py-4 rounded-full text-base font-bold shadow-[0_0_30px_rgba(255,40,0,0.3)] hover:shadow-[0_0_50px_rgba(255,40,0,0.5)] transition-all group"
                    >
                        <span className="relative z-10">Agilizar mis procesos</span>
                        <motion.div
                            initial={{ x: "-150%", skewX: -25 }}
                            animate={{ x: "150%" }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        />
                    </motion.button>
                </motion.div>

                {/* Feature Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2"
                >
                    {features.map((feature, index) => (
                        <React.Fragment key={feature}>
                            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-secondary/70">
                                {feature}
                            </span>
                            {index < features.length - 1 && (
                                <span className="text-accent text-xs">◆</span>
                            )}
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;
