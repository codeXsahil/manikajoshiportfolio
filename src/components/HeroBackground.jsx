import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

const HeroBackground = () => {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 40, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 40, damping: 20 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        mouseX.set(clientX / innerWidth - 0.5);
        mouseY.set(clientY / innerHeight - 0.5);
    };

    React.useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Parallax Transforms
    const yDeep = useTransform(scrollY, [0, 1000], [0, 150]);
    const yMid = useTransform(scrollY, [0, 1000], [0, 300]);
    const yFront = useTransform(scrollY, [0, 1000], [0, 500]);

    return (
        <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Film Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay z-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

            {/* Layer 1: DEEP BACKGROUND (Giant Outlined Text) */}
            <motion.div
                style={{ y: yDeep, x: useTransform(smoothX, [-0.5, 0.5], [15, -15]), rotateZ: -5 }}
                className="hidden lg:flex absolute inset-0 z-0 flex-col justify-center items-center opacity-[0.15]"
            >
                <h1 className="text-[15vw] font-black leading-none text-transparent stroke-text whitespace-nowrap">
                    DIGITAL
                </h1>
                <h1 className="text-[15vw] font-black leading-none text-transparent stroke-text whitespace-nowrap ml-[20vw]">
                    STRATEGY
                </h1>
                <h1 className="text-[15vw] font-black leading-none text-transparent stroke-text whitespace-nowrap mr-[20vw]">
                    GROWTH
                </h1>
            </motion.div>

            {/* Layer 2: MIDGROUND (Functional Keywords) */}
            <motion.div style={{ y: yMid, x: useTransform(smoothX, [-0.5, 0.5], [30, -30]) }} className="hidden lg:block absolute inset-0 z-10">
                {/* Randomly scattered marketing terms */}
                <FloatingWord top="15%" left="10%" text="SEO" delay={0} />
                <FloatingWord top="25%" right="15%" text="ANALYTICS" delay={0.2} />
                <FloatingWord top="55%" left="5%" text="CONTENT" delay={0.4} />
                <FloatingWord top="65%" right="10%" text="BRANDING" delay={0.6} />
                <FloatingWord top="85%" left="20%" text="ROI" delay={0.8} />
                <FloatingWord top="10%" right="40%" text="PPC" delay={1.0} />
            </motion.div>

            {/* Layer 3: FOREGROUND (Tech Accents) */}
            <motion.div style={{ y: yFront, x: useTransform(smoothX, [-0.5, 0.5], [50, -50]) }} className="hidden lg:block absolute inset-0 z-10">
                <div className="absolute top-[20%] left-[20%] text-gold/20 text-4xl font-mono">+</div>
                <div className="absolute bottom-[30%] right-[20%] text-white/10 text-4xl font-mono">//</div>
                <div className="absolute top-[40%] right-[30%] w-20 h-[1px] bg-gold/20" />
                <div className="absolute bottom-[20%] left-[10%] w-[1px] h-20 bg-white/10" />
                <div className="absolute top-[60%] left-[80%] text-xs font-mono text-gold/40 tracking-widest">EST. 2024</div>
            </motion.div>

            {/* Interactive Glow Spotlight */}
            <motion.div
                className="absolute w-[1000px] h-[1000px] rounded-full bg-radial-glow opacity-60 mix-blend-screen pointer-events-none z-0 -ml-[500px] -mt-[500px]"
                style={{
                    left: "50%",
                    top: "50%",
                    x: useTransform(mouseX, [-0.5, 0.5], ["-50vw", "50vw"]),
                    y: useTransform(mouseY, [-0.5, 0.5], ["-50vh", "50vh"]),
                }}
            />

            <style>{`
                .bg-radial-glow {
                    background: radial-gradient(circle, rgba(197, 160, 89, 0.15) 0%, rgba(197, 160, 89, 0.05) 30%, transparent 70%);
                }
                .stroke-text {
                    -webkit-text-stroke: 2px rgba(255, 255, 255, 0.3);
                }
            `}</style>
        </div>
    );
};

const FloatingWord = ({ top, left, right, bottom, text, delay }) => (
    <motion.div
        className="absolute text-white/10 font-bold text-4xl md:text-6xl tracking-tighter"
        style={{ top, left, right, bottom }}
        animate={{
            y: [0, -20, 0],
            opacity: [0.15, 0.4, 0.15]
        }}
        transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay
        }}
    >
        {text}
    </motion.div>
);

export default HeroBackground;
