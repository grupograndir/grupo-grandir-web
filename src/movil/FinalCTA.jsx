import React from 'react';
import { motion } from 'framer-motion';

const FinalCTA = () => {
    return (
        <section className="relative py-32 bg-background overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[250px]" />
            </div>

            <div className="container mx-auto px-6 max-w-4xl relative z-10">
                <div className="flex flex-col items-center text-center">
                    {/* Tag */}
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-5 py-2 text-[11px] font-bold tracking-[0.25em] uppercase text-accent mb-8"
                    >
                        Siguiente paso
                    </motion.span>

                    {/* Headline */}
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-[32px] leading-tight font-extrabold tracking-tighter leading-[0.95] font-display mb-6"
                    >
                        Agenda 30 minutos.<br />
                        <span className="text-accent">Transforma tu empresa.</span>
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-secondary text-base md:text-lg max-w-2xl leading-relaxed mb-10"
                    >
                        Has visto cómo las empresas pierden tiempo y dinero con procesos
                        manuales. Has descubierto cómo nuestra tecnología a medida,
                        automatización inteligente y arquitectura digital resuelven
                        exactamente eso. Solo falta una conversación para empezar.
                    </motion.p>

                    {/* Checklist */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-12"
                    >
                        {[
                            'Diagnóstico personalizado de tu operativa',
                            'Hoja de ruta adaptada a tu sector',
                            'Sin compromiso, sin letra pequeña',
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-accent shrink-0">
                                    <path d="M15 5L7.5 12.5L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-sm text-white/80 font-medium">{item}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <a
                            href="https://cal.com/grupograndir/30min"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-3 bg-accent hover:bg-accent/90 text-white font-bold px-10 py-4 rounded-full text-base transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,40,0,0.4)] hover:scale-105"
                        >
                            <span>Agendar llamada gratuita</span>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                                <path d="M3.75 9h10.5M10.5 4.5L15 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Trust note */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="text-[11px] text-white/20 mt-6"
                    >
                        30 minutos · Videollamada · Resultados desde la primera semana
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
