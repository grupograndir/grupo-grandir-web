import React from 'react';
import { motion } from 'framer-motion';

const features = [
    'INFRAESTRUCTURA A MEDIDA',
    'INTEGRACIÓN CON TUS HERRAMIENTAS',
    'PROPIEDAD INTELECTUAL INTACTA',
];

const ServicesHero = () => {
    return (
        <section id="soluciones" className="relative py-16 overflow-hidden px-5">
            {/* Background Glow — smaller for mobile */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                {/* Badge Pill */}
                <div className="flex justify-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] rounded-full px-4 py-1.5 text-[10px] font-semibold tracking-[0.25em] uppercase text-secondary">
                        LA SOLUCIÓN · GRUPO GRANDIR
                    </span>
                </div>

                {/* Main Headline */}
                <h2 className="text-[26px] font-extrabold tracking-tighter leading-[1.05] font-display text-center mb-6">
                    <span className="text-white">Desarrollo de SaaS a medida</span>
                    <br />
                    <span className="services-text-gradient">para reducir tus costes.</span>
                </h2>

                {/* Description */}
                <p className="text-sm text-secondary text-center max-w-xs mx-auto leading-relaxed mb-4">
                    Diseñamos el software que necesitas para eliminar el trabajo manual repetitivo, todo dentro de un{' '}
                    <span className="text-white font-semibold">único ecosistema propio.</span>
                </p>

                {/* Accent highlight line */}
                <p className="text-center text-xs mb-8">
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
                        className="relative overflow-hidden bg-accent text-white px-8 py-3.5 rounded-full text-sm font-bold shadow-[0_0_30px_rgba(255,40,0,0.3)] transition-all cursor-pointer inline-block"
                    >
                        <span className="relative z-10">Agilizar mis procesos</span>
                    </a>
                </div>

                {/* Feature Bar — stacked on mobile */}
                <div className="flex flex-col items-center gap-2">
                    {features.map((feature, index) => (
                        <React.Fragment key={feature}>
                            <span className="text-[9px] font-semibold tracking-[0.2em] uppercase text-secondary/70">
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
