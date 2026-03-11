import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
    return (
        <motion.header
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
        >
            <nav className="glass-morphism rounded-full px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tighter font-display uppercase">
                        Grupo Grandir
                    </span>
                </div>

                <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-secondary">
                    <a href="#" className="hover:text-white transition-colors">Inicio</a>
                    <a href="#" className="hover:text-white transition-colors">Procesos</a>
                    <a href="#" className="hover:text-white transition-colors">Soluciones</a>
                    <a href="#" className="hover:text-white transition-colors">FAQ</a>
                </div>

                <motion.a
                    href="https://cal.com/grupograndir/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-white px-4 md:px-6 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-bold shadow-[0_0_20px_rgba(255,40,0,0.3)] hover:shadow-[0_0_30px_rgba(255,40,0,0.5)] transition-all whitespace-nowrap cursor-pointer"
                >
                    Trabajemos juntos
                </motion.a>
            </nav>
        </motion.header>
    );
};

export default Header;
