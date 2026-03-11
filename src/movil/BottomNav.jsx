import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ======================================================
   Section mapping — label, icon SVG path, target id
   ====================================================== */
const navItems = [
    {
        label: 'Inicio',
        href: '#hero',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
        ),
    },
    {
        label: 'Problemas',
        href: '#problemas',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
    {
        label: 'Soluciones',
        href: '#soluciones',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
    },
    {
        label: 'Calculadora',
        href: '#analytics',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2" />
                <line x1="8" y1="6" x2="16" y2="6" />
                <line x1="8" y1="10" x2="10" y2="10" />
                <line x1="14" y1="10" x2="16" y2="10" />
                <line x1="8" y1="14" x2="10" y2="14" />
                <line x1="14" y1="14" x2="16" y2="14" />
                <line x1="8" y1="18" x2="10" y2="18" />
                <line x1="14" y1="18" x2="16" y2="18" />
            </svg>
        ),
    },
    {
        label: 'Método',
        href: '#metodologia',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
        ),
    },
    {
        label: "FAQ's",
        href: '#faqs',
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
];

/* ======================================================
   BottomNav — full-width mobile bottom tab bar (no CTA)
   ====================================================== */
const BottomNav = () => {
    const [visible, setVisible] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > window.innerHeight * 0.8);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const sectionIds = ['hero', 'problemas', 'soluciones', 'analytics', 'metodologia', 'faqs'];

        const handleSectionTrack = () => {
            const viewportMiddle = window.scrollY + window.innerHeight * 0.4;
            let current = 'hero';

            for (const id of sectionIds) {
                const el = document.getElementById(id);
                if (el && el.offsetTop <= viewportMiddle) {
                    current = id;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleSectionTrack, { passive: true });
        handleSectionTrack();
        return () => window.removeEventListener('scroll', handleSectionTrack);
    }, []);

    const scrollTo = (href) => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.nav
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-0 inset-x-0 z-50 bg-black/80 backdrop-blur-xl border-t border-white/[0.06] pb-[env(safe-area-inset-bottom)]"
                >
                    <div className="flex items-center justify-around w-full px-1 py-2">
                        {navItems.map((item) => {
                            const isActive = activeSection === item.href.replace('#', '');
                            return (
                                <button
                                    key={item.label}
                                    onClick={() => scrollTo(item.href)}
                                    className={`flex flex-col items-center gap-0.5 py-1 px-1 rounded-lg transition-colors duration-200 cursor-pointer min-w-0 flex-1 ${isActive
                                        ? 'text-accent'
                                        : 'text-white/40'
                                        }`}
                                >
                                    <span>{item.icon}</span>
                                    <span className="text-[9px] font-semibold tracking-wide whitespace-nowrap">
                                        {item.label}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
};

export default BottomNav;
