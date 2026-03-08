import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="relative bg-background border-t border-white/[0.04]">
            <div className="container mx-auto px-6 max-w-6xl">
                {/* Main footer content */}
                <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
                    {/* Left — Brand name large */}
                    <div className="flex items-center">
                        <h2 className="text-[80px] md:text-[120px] lg:text-[160px] font-bold tracking-tighter leading-[0.85] uppercase font-display text-white/[0.12] select-none">
                            GRANDIR
                        </h2>
                    </div>

                    {/* Right — Link columns */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
                        {/* Column 1 — EMPRESA */}
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
                                Empresa
                            </h3>
                            <ul className="space-y-3">
                                {['Sobre nosotros', 'Metodología', 'Servicios', 'Blog'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-secondary hover:text-white transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 2 — LEGAL */}
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                {['Aviso Legal', 'Política de Privacidad', 'Cookies', 'Términos'].map((item) => (
                                    <li key={item}>
                                        <a href="#" className="text-sm text-secondary hover:text-white transition-colors duration-200">
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Column 3 — SOCIAL */}
                        <div>
                            <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
                                Social
                            </h3>
                            <ul className="space-y-3">
                                {[
                                    { name: 'LinkedIn', icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z' },
                                    { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                                    { name: 'X (Twitter)', icon: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' },
                                ].map((social) => (
                                    <li key={social.name}>
                                        <a href="#" className="text-sm text-secondary hover:text-white transition-colors duration-200 inline-flex items-center gap-2">
                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                                <path d={social.icon} />
                                            </svg>
                                            {social.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            {/* Email CTA */}
                            <div className="mt-8">
                                <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-3">
                                    Contacto
                                </h3>
                                <a href="mailto:hola@grupograndir.com" className="text-sm text-accent hover:text-accent/80 transition-colors duration-200">
                                    hola@grupograndir.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="border-t border-white/[0.04] py-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-[11px] text-white/20">
                        © {new Date().getFullYear()} Grupo Grandir. Todos los derechos reservados.
                    </p>
                    <div className="flex items-center gap-1">
                        <span className="text-[11px] text-white/20">Hecho con</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                            className="text-accent text-xs"
                        >
                            ♥
                        </motion.span>
                        <span className="text-[11px] text-white/20">por Grupo Grandir</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
