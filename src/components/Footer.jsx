import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PrivacyPolicy from './PrivacyPolicy';

const Footer = () => {
    const [showPrivacy, setShowPrivacy] = useState(false);

    return (
        <>
            <footer className="relative bg-background border-t border-white/[0.04]">
                <div className="container mx-auto px-6 max-w-6xl">
                    {/* Main footer content */}
                    <div className="py-16 md:py-24 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 items-start">
                        {/* Left — Brand name large */}
                        <div className="flex items-center">
                            <h2 className="text-[100px] md:text-[150px] lg:text-[200px] font-bold tracking-tighter leading-[0.85] uppercase font-display text-white/[0.12] select-none">
                                GRANDIR
                            </h2>
                        </div>

                        {/* Right — Link columns */}
                        <div className="grid grid-cols-2 gap-10 md:gap-16">
                            {/* Column 1 — LEGAL */}
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
                                    Legal
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <button
                                            onClick={() => setShowPrivacy(true)}
                                            className="text-sm text-secondary hover:text-white transition-colors duration-200 cursor-pointer"
                                        >
                                            Política de Privacidad
                                        </button>
                                    </li>
                                </ul>
                            </div>

                            {/* Column 2 — SOCIAL */}
                            <div>
                                <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-5">
                                    Social
                                </h3>
                                <ul className="space-y-3">
                                    {[
                                        {
                                            name: 'LinkedIn',
                                            href: 'https://www.linkedin.com/in/rub%C3%A9n-bellod-368830373/',
                                            icon: 'M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z',
                                        },
                                        {
                                            name: 'Instagram',
                                            href: 'https://www.instagram.com/grandirgroup/',
                                            icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
                                        },
                                    ].map((social) => (
                                        <li key={social.name}>
                                            <a
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-sm text-secondary hover:text-white transition-colors duration-200 inline-flex items-center gap-2 cursor-pointer"
                                            >
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                                    <path d={social.icon} />
                                                </svg>
                                                {social.name}
                                            </a>
                                        </li>
                                    ))}
                                </ul>

                                {/* WhatsApp CTA */}
                                <div className="mt-8">
                                    <h3 className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-3">
                                        Contacto
                                    </h3>
                                    <a
                                        href="https://wa.me/34684767804"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent/80 transition-colors duration-200 cursor-pointer"
                                    >
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="shrink-0">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        WhatsApp
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

            {/* Privacy Policy overlay */}
            {showPrivacy && <PrivacyPolicy onClose={() => setShowPrivacy(false)} />}
        </>
    );
};

export default Footer;
