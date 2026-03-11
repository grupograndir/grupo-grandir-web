import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Euro, CheckCircle2, CircleDollarSign } from 'lucide-react';

const Transformation = () => {
    return (
        <section className="relative flex flex-col items-center justify-center overflow-hidden bg-background py-16 px-5">
            {/* Section Title */}
            <div className="text-center mb-8">
                <h2 className="text-zinc-600 text-xs font-bold uppercase tracking-[0.2em] mb-2">Optimización inteligente</h2>
                <p className="text-2xl font-bold font-display text-gradient leading-tight">Transformamos tu caos<br />en beneficio</p>
            </div>

            <div className="relative flex items-center justify-center w-full" style={{ height: '220px' }}>
                {/* Central Logo 'G' */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(255,40,0,0.1)",
                            "0 0 40px rgba(255,40,0,0.25)",
                            "0 0 20px rgba(255,40,0,0.1)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-20 w-28 h-28 rounded-full border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                    <img src="/logo.png" alt="Grupo Grandir" className="relative z-10 w-[65%] h-[65%] object-contain pointer-events-none drop-shadow-[0_0_15px_rgba(255,40,0,0.3)]" />
                </motion.div>

                {/* Simplified floating icons for mobile — reduced travel distances */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Inputs (Red) — from left */}
                    <motion.div
                        animate={{ x: [-120, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
                        className="absolute" style={{ color: '#ef4444' }}
                    ><Clock size={22} strokeWidth={2.5} /></motion.div>

                    <motion.div
                        animate={{ x: [-120, 0], y: [40, 0], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                        className="absolute" style={{ color: '#ef4444' }}
                    ><Euro size={22} strokeWidth={2.5} /></motion.div>

                    {/* Outputs (Green) — to right */}
                    <motion.div
                        animate={{ x: [0, 120], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="absolute" style={{ color: '#10b981' }}
                    ><CheckCircle2 size={22} strokeWidth={2.5} /></motion.div>

                    <motion.div
                        animate={{ x: [0, 120], y: [0, 40], opacity: [0, 1, 1, 0], scale: [0.5, 1, 1, 0.2] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                        className="absolute" style={{ color: '#10b981' }}
                    ><CircleDollarSign size={22} strokeWidth={2.5} /></motion.div>
                </div>
            </div>

            {/* Connection Indicator */}
            <div className="flex flex-col gap-2 items-center justify-center opacity-40 mt-4">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[9px] font-mono tracking-widest uppercase">Procesos Ineficientes</span>
                </div>
                <div className="w-[1px] h-3 bg-zinc-800" />
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[9px] font-mono tracking-widest uppercase">Máximo Rendimiento</span>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
