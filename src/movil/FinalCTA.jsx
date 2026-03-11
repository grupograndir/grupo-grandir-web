import React from 'react';

const FinalCTA = () => {
    return (
        <section className="relative py-16 md:py-20 bg-background overflow-hidden px-5 md:px-8">
            {/* Background glow — scales with device */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[120px] md:blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto">
                <div className="flex flex-col items-center text-center">
                    {/* Tag */}
                    <span className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase text-accent mb-6">
                        Siguiente paso
                    </span>

                    {/* Headline — responsive */}
                    <h2 className="font-extrabold tracking-tighter leading-[1.05] font-display mb-5" style={{ fontSize: 'clamp(26px, 4.5vw, 44px)' }}>
                        Agenda 30 minutos.<br />
                        <span className="text-accent">Transforma tu empresa.</span>
                    </h2>

                    {/* Description */}
                    <p className="text-secondary text-sm md:text-base max-w-xs md:max-w-lg leading-relaxed mb-8">
                        Has visto cómo las empresas pierden tiempo y dinero con procesos manuales. Solo falta una conversación para empezar.
                    </p>

                    {/* Checklist — horizontal on landscape */}
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6 mb-8 mx-auto">
                        {[
                            'Diagnóstico personalizado',
                            'Hoja de ruta adaptada',
                            'Sin compromiso',
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="text-accent shrink-0">
                                    <path d="M15 5L7.5 12.5L3 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <span className="text-sm text-white/80 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="https://cal.com/grupograndir/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 bg-accent text-white font-bold px-8 md:px-10 py-3.5 md:py-4 rounded-full text-sm md:text-base transition-all duration-300"
                    >
                        <span>Agendar llamada gratuita</span>
                        <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                            <path d="M3.75 9h10.5M10.5 4.5L15 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>

                    {/* Trust note */}
                    <p className="text-[10px] md:text-xs text-white/20 mt-4">
                        30 min · Videollamada · Resultados desde la primera semana
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FinalCTA;
