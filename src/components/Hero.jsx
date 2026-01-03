import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { MousePointer2, ArrowDown } from 'lucide-react';

const MagneticButton = ({ children }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.div
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </motion.div>
    );
};

import HeroBackground from './HeroBackground';

const Hero = () => {
    // Parallax Title Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY, currentTarget }) => {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - left) / width - 0.5;
        const y = (clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

    return (
        <section
            id="home"
            className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden section-padding perspective-1000"
            onMouseMove={handleMouseMove}
        >
            <HeroBackground />

            <div className="container relative z-10 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="text-gold uppercase tracking-[0.2em] text-sm mb-4 block">Brand Growth Strategist</span>
                </motion.div>

                <motion.div
                    style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                    className="mb-6 relative"
                >
                    <motion.h1
                        className="font-serif text-6xl md:text-9xl leading-tight"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Manika <span className="italic text-gold relative z-10">Joshi</span>
                    </motion.h1>
                    {/* Subtle glow behind text */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/10 blur-[50px] -z-10 rounded-full mix-blend-screen" />
                </motion.div>

                <motion.p
                    className="max-w-xl mx-auto text-dim text-lg md:text-xl leading-relaxed mb-10"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Blending creative storytelling with performance-led thinking to build meaningful brand narratives.
                </motion.p>

                <div className="flex flex-col items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <MagneticButton>
                            <a href="#contact" className="inline-flex items-center gap-2 border border-white/20 px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-xs group">
                                Let's Talk
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </MagneticButton>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="text-dim text-xs tracking-wide"
                    >
                        Trusted by <span className="text-[#f0f0f0]">The Lalit</span>, <span className="text-[#f0f0f0]">Mercedes-Benz</span>, <span className="text-[#f0f0f0]">Secret temptations</span>, <span className="text-[#f0f0f0]">Pearson</span> & more
                    </motion.p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-dim"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.5, duration: 1 },
                    y: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-gold to-transparent" />
                <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            </motion.div>
        </section>
    );
};

export default Hero;
