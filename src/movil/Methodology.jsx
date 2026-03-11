import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ---- Simplified animations for mobile ---- */
const codeLines = [
    { num: 1, tokens: [{ text: 'import', c: '#FF6B4F' }, { text: ' { GrandirEngine }', c: '#FF2800' }, { text: " from '@grandir/core'", c: '#CE9178' }] },
    { num: 2, tokens: [{ text: 'import', c: '#FF6B4F' }, { text: ' { Automations }', c: '#FF2800' }, { text: " from '@grandir/flow'", c: '#CE9178' }] },
    { num: 3, tokens: [] },
    { num: 4, tokens: [{ text: 'const', c: '#FF6B4F' }, { text: ' pipeline = ', c: '#fff' }, { text: 'new', c: '#FF6B4F' }, { text: ' GrandirEngine', c: '#FF2800' }, { text: '({', c: '#fff' }] },
    { num: 5, tokens: [{ text: "  client: 'enterprise',", c: '#CE9178' }] },
    { num: 6, tokens: [{ text: "  modules: ['crm', 'invoicing']", c: '#CE9178' }] },
    { num: 7, tokens: [{ text: '})', c: '#fff' }] },
    { num: 8, tokens: [{ text: 'await', c: '#FF6B4F' }, { text: ' pipeline.deploy()', c: '#DCDCAA' }] },
];

const CodeEditorAnimation = ({ isActive }) => {
    const [visibleLines, setVisibleLines] = useState(0);
    useEffect(() => {
        if (!isActive) { setVisibleLines(0); return; }
        let line = 0;
        const interval = setInterval(() => {
            line += 1;
            if (line > codeLines.length) { line = 0; setVisibleLines(0); return; }
            setVisibleLines(line);
        }, 600);
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="w-full h-full rounded-xl overflow-hidden bg-[#0D0D0D] border border-white/[0.06] font-mono text-[9px] p-3">
            <div className="flex items-center gap-1.5 mb-2 pb-2 border-b border-white/[0.04]">
                <div className="w-2 h-2 rounded-full bg-accent/60" />
                <div className="w-2 h-2 rounded-full bg-white/20" />
                <span className="text-[8px] text-white/30 ml-1">pipeline.config.js</span>
            </div>
            <div className="space-y-0.5">
                {codeLines.map((line, i) => (
                    <div key={line.num} className="flex items-center gap-1.5" style={{ opacity: i < visibleLines ? 1 : 0, transition: 'opacity 0.3s ease' }}>
                        <span className="w-3 text-right text-white/15 select-none shrink-0">{line.num}</span>
                        <div className="flex flex-wrap">
                            {line.tokens.map((token, j) => (
                                <span key={j} style={{ color: token.c }}>{token.text}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const AuditAnimation = ({ isActive }) => {
    const [checked, setChecked] = useState(0);
    const items = ['Flujos de trabajo', 'Herramientas actuales', 'Cuellos de botella', 'Costes operativos', 'Oportunidades'];
    useEffect(() => {
        if (!isActive) { setChecked(0); return; }
        let c = 0;
        const interval = setInterval(() => {
            c += 1;
            if (c > items.length) { c = 0; setChecked(0); return; }
            setChecked(c);
        }, 800);
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/[0.04]">
                <span className="text-[9px] text-white/40">Auditoría operativa</span>
                <span className="text-[9px] text-accent font-mono">{Math.min(checked, items.length)}/{items.length}</span>
            </div>
            <div className="space-y-1.5 flex-1">
                {items.map((item, i) => (
                    <div key={item} className="flex items-center gap-2 text-[10px]" style={{ opacity: i < checked ? 1 : 0.3, transition: 'opacity 0.3s' }}>
                        <div className={`w-3 h-3 rounded border flex items-center justify-center shrink-0 ${i < checked ? 'bg-accent/20 border-accent/40' : 'border-white/10'}`}>
                            {i < checked && <span className="text-[7px] text-accent">✓</span>}
                        </div>
                        <span className={i < checked ? 'text-white/80' : 'text-white/25'}>{item}</span>
                    </div>
                ))}
            </div>
            <div className="mt-2 pt-2 border-t border-white/[0.04]">
                <div className="w-full h-1 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className="h-full bg-accent/60 rounded-full" style={{ width: `${(Math.min(checked, items.length) / items.length) * 100}%`, transition: 'width 0.4s ease' }} />
                </div>
            </div>
        </div>
    );
};

const StrategyAnimation = ({ isActive }) => {
    const [active, setActive] = useState(0);
    useEffect(() => {
        if (!isActive) { setActive(0); return; }
        let a = 0;
        const interval = setInterval(() => { a = (a + 1) % 5; setActive(a); }, 700);
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col">
            <div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-accent/60" /><span className="text-[9px] text-white/40">Ecosistema</span></div>
            <div className="flex-1 flex items-center justify-center">
                <svg className="w-full h-full" viewBox="0 0 100 80">
                    {[{ id: 'CRM', x: 10, y: 10 }, { id: 'Hub', x: 35, y: 35, c: true }, { id: 'ERP', x: 65, y: 10 }, { id: 'Flujos', x: 10, y: 60 }, { id: 'BI', x: 65, y: 60 }].map((n, i) => (
                        <g key={n.id}>
                            {!n.c && <line x1={n.x + 8} y1={n.y + 5} x2={43} y2={40} stroke={i - 1 < active ? '#FF2800' : '#fff'} strokeWidth="0.5" opacity={i - 1 < active ? 0.4 : 0.06} />}
                            <rect x={n.x} y={n.y} width={n.c ? 20 : 16} height="10" rx="2" fill={n.c || i - 1 < active ? '#FF2800' : '#fff'} opacity={n.c ? 0.25 : i - 1 < active ? 0.15 : 0.05} />
                            <text x={n.x + (n.c ? 10 : 8)} y={n.y + 7} textAnchor="middle" fill="#fff" opacity={0.6} fontSize="3" fontWeight="600">{n.id}</text>
                        </g>
                    ))}
                </svg>
            </div>
        </div>
    );
};

const LaunchAnimation = ({ isActive }) => {
    const [progress, setProgress] = useState(0);
    useEffect(() => {
        if (!isActive) { setProgress(0); return; }
        let p = 0;
        const interval = setInterval(() => { p += 5; if (p > 100) p = 0; setProgress(p); }, 200);
        return () => clearInterval(interval);
    }, [isActive]);

    return (
        <div className="w-full h-full rounded-xl bg-[#0D0D0D] border border-white/[0.06] p-3 flex flex-col">
            <div className="flex items-center justify-between mb-2 pb-2 border-b border-white/[0.04]">
                <div className="flex items-center gap-2"><div className={`w-2 h-2 rounded-full ${progress >= 100 ? 'bg-green-500' : 'bg-accent'}`} /><span className="text-[9px] text-white/40">{progress >= 100 ? '¡En producción!' : 'Desplegando...'}</span></div>
                <span className="text-[9px] text-white/30 font-mono">v1.0</span>
            </div>
            <div className="mb-3">
                <div className="flex justify-between mb-1"><span className="text-[8px] text-white/30">Deploy</span><span className="text-[8px] text-accent font-mono">{progress}%</span></div>
                <div className="w-full h-1.5 bg-white/[0.04] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${progress >= 100 ? 'bg-green-500/70' : 'bg-accent/60'}`} style={{ width: `${progress}%`, transition: 'width 0.15s' }} />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-1 flex-1">
                {[{ l: 'Procesos', v: Math.round(progress * 0.47) }, { l: 'Eficiencia', v: Math.round(progress * 0.92), s: '%' }, { l: 'Ahorro', v: Math.round(progress * 0.35), s: 'h' }].map(m => (
                    <div key={m.l} className="bg-white/[0.02] rounded p-2 flex flex-col items-center justify-center border border-white/[0.03]">
                        <span className="text-sm font-bold text-white/90 font-mono">{m.v}{m.s || ''}</span>
                        <span className="text-[7px] text-white/30">{m.l}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

/* ======================================================
   Steps data
   ====================================================== */
const steps = [
    { id: 1, timeline: 'Semana 1', title: 'Análisis y Onboarding', description: 'Analizamos tu operativa, flujos de trabajo y puntos de fricción para identificar dónde se pierde tiempo y dinero.', features: ['Auditoría completa', 'Mapa de flujos', 'Cuellos de botella', 'Informe'], icon: 'audit' },
    { id: 2, timeline: 'Semana 2', title: 'Auditoría y Estrategia', description: 'Diseñamos la arquitectura ideal. Definimos qué automatizar y cómo orquestar todos los sistemas.', features: ['Arquitectura', 'Plan de automatización', 'Integración', 'Roadmap'], icon: 'strategy' },
    { id: 3, timeline: 'Semana 3-6', title: 'Diseño y Desarrollo', description: 'Desarrollamos tu solución con tecnología de alto rendimiento. Despliegue progresivo y testing riguroso.', features: ['Sprints ágiles', 'Integración', 'Testing y QA', 'Personalización'], icon: 'code' },
    { id: 4, timeline: 'Semana 7', title: 'Implementación', description: 'Lanzamos tu solución con formación, soporte continuo y optimización constante.', features: ['Lanzamiento', 'Formación', 'Soporte', 'Optimización'], icon: 'launch' },
];

const AnimationForStep = ({ icon, isActive }) => {
    switch (icon) {
        case 'audit': return <AuditAnimation isActive={isActive} />;
        case 'strategy': return <StrategyAnimation isActive={isActive} />;
        case 'code': return <CodeEditorAnimation isActive={isActive} />;
        case 'launch': return <LaunchAnimation isActive={isActive} />;
        default: return null;
    }
};

const StepCard = ({ step }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.3 });

    return (
        <div ref={cardRef} className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-5">
            <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent bg-accent/10 px-3 py-1 rounded-full">{step.timeline}</span>
                <div className="h-[1px] flex-1 bg-white/[0.06]" />
            </div>
            <h3 className="text-xl font-bold tracking-tight text-white mb-3 font-display">{step.title}</h3>
            <p className="text-secondary text-sm leading-relaxed mb-4">{step.description}</p>
            <div className="h-40 mb-4">
                <AnimationForStep icon={step.icon} isActive={isInView} />
            </div>
            <div className="grid grid-cols-2 gap-2">
                {step.features.map((f) => (
                    <div key={f} className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span className="text-[11px] text-secondary">{f}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Methodology = () => {
    return (
        <section id="metodologia" className="relative py-16 px-5">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-0 w-[250px] h-[250px] bg-accent/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="text-xs font-semibold tracking-[0.3em] uppercase text-secondary mb-4 block">Metodología Grandir</span>
                    <h2 className="text-[26px] font-extrabold tracking-tighter leading-[1] font-display mb-4">
                        Nuestra<br /><span className="text-accent">metodología.</span>
                    </h2>
                    <p className="text-secondary text-sm max-w-xs mx-auto leading-relaxed">
                        Un proceso probado para transformar tu empresa en semanas, no meses.
                    </p>
                </div>

                {/* Cards — simple vertical stack on mobile, no sidebar */}
                <div className="space-y-4">
                    {steps.map((step) => (
                        <StepCard key={step.id} step={step} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                    <a
                        href="https://cal.com/grupograndir/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-full text-sm"
                    >
                        Quiero empezar ya
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Methodology;
