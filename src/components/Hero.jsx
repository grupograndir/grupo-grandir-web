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
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

            {/* Navigation Pill — pinned to top, outside of normal flow */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ scale: 1.02 }}
                className="absolute top-8 inset-x-0 mx-auto flex items-center justify-between w-[90%] max-w-3xl bg-[#111111] border border-white/5 rounded-full py-1.5 pl-6 pr-1.5 shadow-xl z-20 group"
            >
                <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <span className="text-lg font-bold tracking-tighter text-white uppercase font-display z-10">
                    Grupo Grandir<span className="text-sm">.</span>
                </span>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-accent text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-[0_0_20px_rgba(255,40,0,0.3)] hover:shadow-[0_0_30px_rgba(255,40,0,0.5)] transition-all whitespace-nowrap z-10"
                >
                    Trabajemos juntos
                </motion.button>
            </motion.div>

            {/* Hero Content — vertically centered */}
            <div className="container mx-auto px-6 flex flex-col items-center z-10 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] font-display"
                >
                    <span className="text-gradient">MENOS COSTES.</span>
                    <br />
                    <span className="inline-flex items-baseline mt-2" style={{ marginTop: '0.15em' }}>
                        <span className="text-white">MÁS&nbsp;</span>
                        <span className="relative inline-block" style={{ minWidth: '5ch' }}>
                            {/* Red glow behind rotating word */}
                            <span className="absolute inset-0 blur-[40px] bg-accent/30 rounded-full pointer-events-none" />
                            <AnimatePresence mode="wait">
                                <motion.span
                                    key={rotatingWords[wordIndex]}
                                    initial={{ y: 30, opacity: 0, filter: 'blur(8px)' }}
                                    animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ y: -30, opacity: 0, filter: 'blur(8px)' }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                    className="inline-block rotating-word-gradient"
                                >
                                    {rotatingWords[wordIndex]}
                                </motion.span>
                            </AnimatePresence>
                            <span className="rotating-word-gradient">.</span>
                        </span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Hacemos que tu empresa sea X10 más eficiente eliminando horas de procesos manuales innecesarios. Optimización real para empresas que no tienen tiempo que perder.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-white text-black px-12 py-4 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all group"
                    >
                        <span className="relative z-10">Ver servicios</span>
                        <motion.div
                            initial={{ x: "-150%", skewX: -25 }}
                            animate={{ x: "150%" }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -z-0"
                        />
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
