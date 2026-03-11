import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = ['VELOCIDAD', 'EFICIENCIA', 'CONTROL', 'RENTABILIDAD', 'CRECIMIENTO'];

const Hero = () => {
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setWordIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5">
            {/* Background Glows — smaller for mobile perf */}
            <div className="absolute top-1/4 left-1/4 w-[250px] h-[250px] bg-accent/8 rounded-full blur-[80px] -z-10" />

            {/* Navigation Pill — pinned to top */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute top-6 inset-x-0 mx-auto flex items-center justify-between w-[92%] bg-[#111111] border border-white/5 rounded-full py-1.5 pl-5 pr-1.5 shadow-xl z-20"
            >
                <span className="text-base font-bold tracking-tighter text-white uppercase font-display z-10">
                    Grupo Grandir<span className="text-sm">.</span>
                </span>

                <motion.a
                    href="https://cal.com/grupograndir/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-white px-4 py-2 rounded-full text-xs font-bold shadow-[0_0_20px_rgba(255,40,0,0.3)] whitespace-nowrap z-10 cursor-pointer"
                >
                    Trabajemos juntos
                </motion.a>
            </motion.div>

            {/* Hero Content — fully centered, text centered */}
            <div className="w-full flex flex-col items-center z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[32px] font-extrabold tracking-tighter leading-[1.05] font-display mb-6"
                >
                    <span className="text-gradient block">MENOS COSTES.</span>
                    <span className="flex items-baseline justify-center flex-wrap gap-x-2" style={{ marginTop: '0.15em' }}>
                        <span className="text-white">MÁS</span>
                        <span className="inline-block overflow-hidden" style={{ minWidth: '140px', height: '1.2em' }}>
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={rotatingWords[wordIndex]}
                                    initial={{ y: '100%', opacity: 0 }}
                                    animate={{ y: '0%', opacity: 1 }}
                                    exit={{ y: '-100%', opacity: 0 }}
                                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block rotating-word-gradient"
                                >
                                    {rotatingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                        </span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-base text-secondary max-w-[340px] mx-auto mb-8 leading-relaxed"
                >
                    Hacemos que tu empresa sea X10 más eficiente eliminando horas de procesos manuales innecesarios.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.a
                        href="https://cal.com/grupograndir/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-white text-black px-10 py-3.5 rounded-full text-base font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all group cursor-pointer inline-block"
                    >
                        <span className="relative z-10">Ver servicios</span>
                        <motion.div
                            initial={{ x: "-150%", skewX: -25 }}
                            animate={{ x: "150%" }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -z-0"
                        />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
