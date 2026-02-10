'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface HeroProps { onSkillsReady?: () => void; }

const HEADLINE = 'Building Scalable Backends | Quantitative Finance Enthusiast | IEEE Researcher.';
const TYPING_SPEED = 50;
const CURSOR_BLINK_SPEED = 500;

export default function Hero({ onSkillsReady }: HeroProps) {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (displayedText.length === HEADLINE.length) {
            setIsComplete(true);
            onSkillsReady?.();
            return;
        }

        const timer = setTimeout(() => {
            setDisplayedText(HEADLINE.slice(0, displayedText.length + 1));
        }, TYPING_SPEED);

        return () => clearTimeout(timer);
    }, [displayedText, onSkillsReady]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, CURSOR_BLINK_SPEED);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-4 md:px-8">
            <motion.div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-3xl" animate={{ x: [0, 100, 0], y: [0, 50, 0], }} transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut', }} />
            <motion.div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" animate={{ x: [0, -100, 0], y: [0, -50, 0], }} transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', }} />
            <div className="relative z-10 max-w-4xl text-center">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mb-8">
                    <span className="inline-block px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 text-sm font-semibold"> ✨ SGSITS Indore | Graduating 2026 </span>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="mb-12">
                    <h1 className="text-5xl md:text-7xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-emerald-400 mb-6 leading-tight">
                        <span className="inline-block">
                            {displayedText} {!isComplete && (
                                <span className={`ml-1 inline-block w-1 h-[1em] bg-emerald-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`} />
                            )}
                        </span>
                    </h1>
                </motion.div>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Backend Engineer specialized in scalable architectures. Published IEEE researcher. 700+ LeetCode problems solved.
                </motion.p>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.a href="#projects" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold rounded-lg shadow-lg shadow-emerald-500/50 transition-all">
                        View My Work
                    </motion.a>
                    <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-8 py-4 border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10 font-bold rounded-lg transition-all">
                        Get In Touch
                    </motion.a>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }} className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto">
                    {[{ label: 'LeetCode', value: '700+' }, { label: 'IEEE Papers', value: '1' }, { label: 'CGPA', value: '7.7' }].map((stat, idx) => (
                        <div key={idx} className="p-4 rounded-lg bg-slate-800/50 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                            <p className="text-emerald-400 font-bold text-2xl">{stat.value}</p>
                            <p className="text-slate-400 text-sm">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
                    <span className="w-1 h-2 bg-emerald-400 rounded-full mt-2" />
                </div>
            </motion.div>
        </section>
    );
}