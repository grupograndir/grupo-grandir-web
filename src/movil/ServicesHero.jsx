import React from 'react';

const features = [
    'INFRAESTRUCTURA A MEDIDA',
    'INTEGRACIÓN CON TUS HERRAMIENTAS',
    'PROPIEDAD INTELECTUAL INTACTA',
];

const ServicesHero = () => {
    return (
        <section id="soluciones" className="relative py-16 md:py-20 overflow-hidden px-5 md:px-8">
            {/* Background Glow — scales with device */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent/5 rounded-full blur-[100px] md:blur-[150px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto">
                {/* Badge Pill */}
                <div className="flex justify-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-secondary">
                        LA SOLUCIÓN · GRUPO GRANDIR
                    </span>
                </div>

                {/* Main Headline — responsive with clamp */}
                <h2 className="font-extrabold tracking-tighter leading-[1.05] font-display text-center mb-6" style={{ fontSize: 'clamp(26px, 4.5vw, 44px)' }}>
                    <span className="text-white">Desarrollo de SaaS a medida</span>
                    <br />
                    <span className="services-text-gradient">para reducir tus costes.</span>
                </h2>

                {/* Description */}
                <p className="text-sm md:text-base text-secondary text-center max-w-xs md:max-w-lg mx-auto leading-relaxed mb-4">
                    Diseñamos el software que necesitas para eliminar el trabajo manual repetitivo, todo dentro de un{' '}
                    <span className="text-white font-semibold">único ecosistema propio.</span>
                </p>

                {/* Accent highlight line */}
                <p className="text-center text-xs md:text-sm mb-8">
                    <span className="text-accent">
                        Especialistas en <strong>B2B, logística, transportes y construcción</strong>.
                    </span>
                </p>

                {/* CTA Button */}
                <div className="flex justify-center mb-10">
                    <a
                        href="https://cal.com/grupograndir/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden bg-accent text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full text-sm md:text-base font-bold shadow-[0_0_30px_rgba(255,40,0,0.3)] transition-all cursor-pointer inline-block"
                    >
                        <span className="relative z-10">Agilizar mis procesos</span>
                    </a>
                </div>

                {/* Feature Bar — row on landscape, stack on portrait */}
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 justify-center">
                    {features.map((feature, index) => (
                        <React.Fragment key={feature}>
                            <span className="text-[9px] md:text-[11px] font-semibold tracking-[0.2em] uppercase text-secondary/70">
                                {feature}
                            </span>
                            {index < features.length - 1 && (
                                <span className="text-accent text-[8px]">◆</span>
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
