import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, Euro, CheckCircle2, CircleDollarSign } from 'lucide-react';

const icons = {
    input: [
        { Icon: Clock, color: '#ef4444', label: 'time-loss' },
        { Icon: Euro, color: '#ef4444', label: 'cost-high' },
    ],
    output: [
        { Icon: CheckCircle2, color: '#10b981', label: 'efficiency' },
        { Icon: CircleDollarSign, color: '#10b981', label: 'savings' },
    ]
};

const FloatingIcon = ({ icon: Icon, color, startPos, endPos, delay }) => {
    return (
        <motion.div
            initial={{
                x: startPos.x,
                y: startPos.y,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: endPos.x,
                y: endPos.y,
                opacity: [0, 1, 1, 0],
                scale: [0.5, 1, 1, 0.2]
            }}
            transition={{
                duration: 3,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
            }}
            className="absolute"
            style={{ color }}
        >
            <Icon size={32} strokeWidth={2.5} />
        </motion.div>
    );
};

const Transformation = () => {
    // Define tracks for icons
    const tracks = [
        { start: { x: -400, y: -100 }, end: { x: 0, y: 0 }, type: 'input' },
        { start: { x: -400, y: 0 }, end: { x: 0, y: 0 }, type: 'input' },
        { start: { x: -400, y: 100 }, end: { x: 0, y: 0 }, type: 'input' },
        { start: { x: 0, y: 0 }, end: { x: 400, y: -100 }, type: 'output' },
        { start: { x: 0, y: 0 }, end: { x: 400, y: 0 }, type: 'output' },
        { start: { x: 0, y: 0 }, end: { x: 400, y: 100 }, type: 'output' },
    ];

    return (
        <section className="relative h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-background py-20">
            {/* Background Section Title */}
            <div className="absolute top-10 text-center">
                <h2 className="text-zinc-600 text-sm font-bold uppercase tracking-[0.2em] mb-2">Optimización inteligente</h2>
                <p className="text-3xl font-bold font-display text-gradient">Transformamos tu caos en beneficio</p>
            </div>

            <div className="relative flex items-center justify-center w-full">
                {/* Central Logo 'G' */}
                <motion.div
                    animate={{
                        boxShadow: [
                            "0 0 20px rgba(255,40,0,0.1)",
                            "0 0 60px rgba(255,40,0,0.3)",
                            "0 0 20px rgba(255,40,0,0.1)"
                        ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="relative z-20 w-32 h-32 md:w-44 md:h-44 rounded-full glass-morphism border-white/20 flex items-end justify-center bg-black/40 backdrop-blur-2xl overflow-hidden"
                >
                    <div className="absolute inset-0 bg-accent/5 animate-pulse" />
                    <img src="/logo.png" alt="Grupo Grandir" className="relative z-10 w-[70%] h-[70%] object-contain pointer-events-none" />
                </motion.div>

                {/* Tracks Visualization (Optional paths) */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                    <svg width="100%" height="400" className="max-w-4xl">
                        <path d="M 0 100 Q 200 100 450 200" stroke="white" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M 0 200 L 450 200" stroke="white" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M 0 300 Q 200 300 450 200" stroke="white" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M 450 200 Q 700 100 900 100" stroke="white" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M 450 200 L 900 200" stroke="white" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                        <path d="M 450 200 Q 700 300 900 300" stroke="white" fill="transparent" strokeWidth="1" strokeDasharray="5,5" />
                    </svg>
                </div>

                {/* Animated Icons */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Inputs Section (Red) */}
                    <FloatingIcon icon={Clock} color="#ef4444" startPos={{ x: -450, y: -120 }} endPos={{ x: 0, y: 0 }} delay={0} />
                    <FloatingIcon icon={Euro} color="#ef4444" startPos={{ x: -450, y: 0 }} endPos={{ x: 0, y: 0 }} delay={1} />
                    <FloatingIcon icon={Clock} color="#ef4444" startPos={{ x: -450, y: 120 }} endPos={{ x: 0, y: 0 }} delay={2} />

                    {/* Outputs Section (Green) */}
                    <FloatingIcon icon={CheckCircle2} color="#10b981" startPos={{ x: 0, y: 0 }} endPos={{ x: 450, y: -120 }} delay={0.5} />
                    <FloatingIcon icon={CircleDollarSign} color="#10b981" startPos={{ x: 0, y: 0 }} endPos={{ x: 450, y: 0 }} delay={1.5} />
                    <FloatingIcon icon={CheckCircle2} color="#10b981" startPos={{ x: 0, y: 0 }} endPos={{ x: 450, y: 120 }} delay={2.5} />
                </div>
            </div>

            {/* Connection Indicator */}
            <div className="absolute bottom-20 flex gap-4 items-center justify-center opacity-40">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest uppercase">Entrada: Procesos Ineficientes</span>
                </div>
                <div className="w-8 h-[1px] bg-zinc-800" />
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[10px] font-mono tracking-widest uppercase">Salida: Máximo Rendimiento</span>
                </div>
            </div>
        </section>
    );
};

export default Transformation;
