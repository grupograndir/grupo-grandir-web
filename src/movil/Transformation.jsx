import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Euro, CheckCircle2, CircleDollarSign } from 'lucide-react';

const Transformation = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-16 md:py-20 px-5 md:px-8">
            {/* Section Title — responsive */}
            <div className="text-center mb-8">
                <h2 className="text-zinc-600 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-2">Optimización inteligente</h2>
                <p className="font-bold font-display text-gradient leading-tight" style={{ fontSize: 'clamp(24px, 4vw, 36px)' }}>Transformamos tu caos<br />en beneficio</p>
            </div>

            <div className="relative flex items-center justify-center w-full max-w-xl mx-auto" style={{ height: 'clamp(220px, 35vw, 340px)' }}>
                {/* Central Logo 'G' — responsive size */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(255,40,0,0.1)",
                            "0 0 40px rgba(255,40,0,0.25)",
                            "0 0 20px rgba(255,40,0,0.1)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-20 w-28 h-28 md:w-36 md:h-36 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                    <img src="/logo.png" alt="Grupo Grandir" className="relative z-10 w-[65%] h-[65%] object-contain pointer-events-none drop-shadow-[0_0_15px_rgba(255,40,0,0.3)]" />
                </motion.div>

                {/* Floating icons — travel distance scales with viewport */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <motion.div
                        animate={{ x: ['clamp(-120px,-18vw,-200px)', '0px'], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                        className="absolute" style={{ color: '#ef4444' }}
                    ><Clock size={22} strokeWidth={2.5} /></motion.div>

                    <motion.div
                        animate={{ x: ['clamp(-120px,-18vw,-200px)', '0px'], y: [40, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute" style={{ color: '#ef4444' }}
                    ><Euro size={22} strokeWidth={2.5} /></motion.div>

                    <motion.div
                        animate={{ x: ['0px', 'clamp(120px,18vw,200px)'], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="absolute" style={{ color: '#10b981' }}
                    ><CheckCircle2 size={22} strokeWidth={2.5} /></motion.div>

                    <motion.div
                        animate={{ x: ['0px', 'clamp(120px,18vw,200px)'], y: [0, 40], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        className="absolute" style={{ color: '#10b981' }}
                    ><CircleDollarSign size={22} strokeWidth={2.5} /></motion.div>
                </div>
            </div>

            {/* Connection Indicator — row layout on landscape */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center justify-center opacity-40 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase">Procesos Ineficientes</span>
                </div>
                <div className="hidden md:block w-8 h-[1px] bg-zinc-800" />
                <div className="md:hidden w-[1px] h-3 bg-zinc-800" />
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] md:text-[10px] font-mono tracking-widest uppercase">Máximo Rendimiento</span>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
