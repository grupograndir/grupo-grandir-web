import React from 'react';
import { motion } from 'framer-motion';
import { FileSpreadsheet, Repeat, Users, TrendingDown, Layers, AlertCircle, Gauge, ShoppingCart, MessageSquare, Zap, Star, Layout } from 'lucide-react';

const Card = ({ title, description, icon: Icon, span = "col-span-1", delay = 0, illustration }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.02 }}
            className={`${span} glass-morphism rounded-[32px] p-8 md:p-10 relative overflow-hidden group border-white/5 bg-zinc-900/40 backdrop-blur-xl flex flex-col justify-between h-full`}
        >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/10 rounded-full blur-[80px] group-hover:bg-accent/20 transition-colors duration-500" />

            <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors border border-white/10 group-hover:border-accent/20">
                        <Icon className="text-white group-hover:text-accent transition-colors" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight text-white">{title}</h3>
                    <p className="text-secondary leading-relaxed text-base font-medium">
                        {description}
                    </p>
                </div>

                {/* Custom Illustration Space */}
                <div className="mt-8 flex justify-end">
                    {illustration}
                </div>
            </div>
        </motion.div>
    );
};

const PainPoints = () => {
    return (
        <section className="bg-background py-32 px-6 relative overflow-hidden">
            {/* Subtle background grid pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="container mx-auto max-w-7xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 font-display text-gradient">
                        ¿POR QUÉ ESTÁS PERDIENDO <br className="hidden md:block" /> TIEMPO Y DINERO?
                    </h2>
                    <p className="text-secondary text-lg max-w-2xl mx-auto">
                        La mayoría de las empresas pierden el 30% de sus ingresos por procesos ineficientes. ¿Cuál es tu caso?
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[320px]">

                    {/* Card 1: Caos Administrativo */}
                    <Card
                        title="Caos administrativo"
                        description="Te organizas con excels, documentos, plantillas, y la gestión de tu empresa es un caos a nivel administrativo."
                        icon={FileSpreadsheet}
                        span="md:col-span-2 md:row-span-1"
                        delay={0.1}
                        illustration={
                            <div className="flex gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 rounded-lg bg-red-500/20 border border-red-500/30 flex items-center justify-center animate-pulse">
                                    <AlertCircle className="text-red-500" size={16} />
                                </div>
                                <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10" />
                                <div className="w-12 h-12 rounded-lg bg-zinc-800 border border-white/10" />
                            </div>
                        }
                    />

                    {/* Card 2: Aplicaciones Innecesarias (NEW - IUROP Clone) */}
                    <Card
                        title="Aplicaciones innecesarias"
                        description="Apps de terceros cobrándote cada mes. Ralentizan tu web, no se integran entre sí, y puedes prescindir del 90%."
                        icon={Layout}
                        span="md:col-span-1 md:row-span-1"
                        delay={0.15}
                        illustration={
                            <div className="relative w-32 h-24 flex items-center justify-center">
                                {/* Gauge Background */}
                                <svg viewBox="0 0 100 50" className="w-full">
                                    <path d="M 10 50 A 40 40 0 0 1 90 50" stroke="#1f2937" strokeWidth="8" fill="none" strokeLinecap="round" />
                                    <path d="M 10 50 A 40 40 0 0 1 50 10" stroke="url(#gauge-gradient)" strokeWidth="8" fill="none" strokeLinecap="round" />
                                    <defs>
                                        <linearGradient id="gauge-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#ef4444" />
                                            <stop offset="100%" stopColor="#eab308" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                                {/* Apps around */}
                                <div className="absolute inset-0">
                                    <motion.div animate={{ y: [0, -4, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full glass-morphism border-white/10 flex items-center justify-center shadow-lg"><ShoppingCart size={10} /></motion.div>
                                    <motion.div animate={{ x: [0, 4, 0] }} transition={{ duration: 2.5, repeat: Infinity }} className="absolute top-1/2 -right-2 -translate-y-1/2 w-6 h-6 rounded-full glass-morphism border-white/10 flex items-center justify-center shadow-lg"><MessageSquare size={10} /></motion.div>
                                    <motion.div animate={{ x: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity }} className="absolute top-1/2 -left-2 -translate-y-1/2 w-6 h-6 rounded-full glass-morphism border-white/10 flex items-center justify-center shadow-lg"><Zap size={10} /></motion.div>
                                </div>
                                {/* Needle */}
                                <motion.div
                                    animate={{ rotate: [-45, 10, -45] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute bottom-0 left-1/2 w-1 h-12 bg-white origin-bottom -translate-x-1/2 rounded-full"
                                />
                            </div>
                        }
                    />

                    {/* Card 3: Tareas Repetitivas */}
                    <Card
                        title="Tareas repetitivas"
                        description="Tus empleados se pasan el día repitiendo lo mismo, sin generar valor añadido."
                        icon={Repeat}
                        span="md:col-span-1 md:row-span-1"
                        delay={0.2}
                        illustration={
                            <div className="relative w-16 h-16 border-2 border-white/10 rounded-full flex items-center justify-center group-hover:border-accent/30 transition-colors">
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 border-2 border-t-accent/40 border-transparent rounded-full"
                                />
                                <Repeat className="text-zinc-600 group-hover:text-accent" size={20} />
                            </div>
                        }
                    />

                    {/* Card 4: Control de gastos */}
                    <Card
                        title="Control de gastos"
                        description="Llevar las cuentas no significa que estés haciendo lo correcto a nivel financiero."
                        icon={TrendingDown}
                        span="md:col-span-1 md:row-span-1"
                        delay={0.4}
                        illustration={
                            <div className="relative p-6 glass-morphism rounded-2xl border-red-500/20 group-hover:border-red-500/40 transition-colors">
                                <div className="flex items-baseline gap-1 text-red-500 font-bold">
                                    <TrendingDown size={14} />
                                    <span className="text-xl">-24%</span>
                                </div>
                                <div className="text-[10px] uppercase tracking-tighter text-zinc-600 mt-1">Leakage</div>
                            </div>
                        }
                    />

                    {/* Card 5: Empleados improductivos */}
                    <Card
                        title="Empleados improductivos"
                        description="Tus empleados no aprovechan su tiempo y no se adaptan a las tecnologías de hoy."
                        icon={Users}
                        span="md:col-span-1 md:row-span-1"
                        delay={0.3}
                        illustration={
                            <div className="w-full flex gap-1 items-end h-12 px-4">
                                {[40, 70, 30, 85].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${h}%` }}
                                        className={`w-full rounded-sm ${i === 3 ? 'bg-accent' : 'bg-zinc-800'}`}
                                    />
                                ))}
                            </div>
                        }
                    />

                    {/* Card 6: Alta carga de trabajo */}
                    <Card
                        title="Alta carga de trabajo"
                        description="No debes contratar más, debes ayudarles a hacer más con menos. Para eso estamos nosotros."
                        icon={Layers}
                        span="md:col-span-1 md:row-span-1"
                        delay={0.5}
                        illustration={
                            <div className="flex -space-x-4">
                                {[1, 2, 3].map(i => (
                                    <div key={i} className="w-12 h-12 rounded-xl glass-morphism border-white/10 flex items-center justify-center translate-y-2 group-hover:translate-y-0 transition-transform">
                                        <div className="w-6 h-1 bg-zinc-700 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        }
                    />

                </div>
            </div>
        </section>
    );
};

export default PainPoints;
