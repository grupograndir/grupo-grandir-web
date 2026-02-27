import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-6 text-center z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9] font-display text-gradient"
                >
                    MENOS COSTES. <br />
                    <span className="text-white">MÁS VELOCIDAD.</span>
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
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden bg-white text-black px-12 py-4 rounded-full text-lg font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all group"
                    >
                        <span className="relative z-10">Ver servicios</span>
                        {/* Shimmer Effect */}
                        <motion.div
                            initial={{ x: "-150%", skewX: -25 }}
                            animate={{ x: "150%" }}
                            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
                            className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -z-0"
                        />
                    </motion.button>
                </motion.div>
            </div>

            {/* Floating Elements (Decorative) */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-10 p-6 glass-morphism rounded-3xl hidden xl:block border-accent/20"
            >
                <div className="h-2 w-20 bg-accent rounded-full mb-3" />
                <div className="h-2 w-12 bg-zinc-800 rounded-full" />
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 right-10 p-6 glass-morphism rounded-3xl hidden xl:block border-white/10"
            >
                <div className="h-2 w-16 bg-blue-500 rounded-full mb-3" />
                <div className="h-2 w-10 bg-zinc-800 rounded-full" />
            </motion.div>
        </section>
    );
};

export default Hero;
