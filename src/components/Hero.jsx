import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center overflow-hidden pt-8">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 flex flex-col items-center z-10 h-full">
                {/* Navigation Pill - Top */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between w-full max-w-3xl bg-[#111111] border border-white/5 rounded-full py-1.5 pl-6 pr-1.5 shadow-xl relative group"
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

                {/* Spacer to push content to center */}
                <div className="flex-1 flex flex-col items-center justify-center w-full">

                    {/* Hero Texts */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] font-display text-gradient text-center"
                    >
                        MENOS COSTES. <br />
                        <span className="text-white">MÁS VELOCIDAD.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-10 leading-relaxed text-center"
                    >
                        Hacemos que tu empresa sea X10 más eficiente eliminando horas de procesos manuales innecesarios. Optimización real para empresas que no tienen tiempo que perder.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col md:flex-row items-center justify-center gap-4"
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
            </div>
        </section>
    );
};

export default Hero;
