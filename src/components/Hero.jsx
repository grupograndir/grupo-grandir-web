import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 flex justify-center z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center justify-between w-full max-w-4xl bg-[#111111] border border-white/5 rounded-full p-2 pl-8 pr-2 shadow-2xl relative group"
                >
                    {/* Subtle 3D background glow on hover */}
                    <div className="absolute inset-0 bg-accent/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Logo Side */}
                    <div className="flex flex-col z-10 pt-1 pb-2">
                        <span className="text-3xl font-black tracking-tighter text-[#FFB800] uppercase font-display leading-none">
                            Grupo Grandir<span className="text-xl">.</span>
                        </span>
                    </div>

                    {/* CTA Button Side */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FFB800] text-black px-8 py-4 rounded-full text-lg font-bold shadow-[0_4px_14px_rgba(255,184,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,184,0,0.23)] hover:bg-[#FFC933] transition-all whitespace-nowrap z-10"
                    >
                        Trabajemos juntos
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
