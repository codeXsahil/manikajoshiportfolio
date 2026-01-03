import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const HeroBackground = () => {
    const [particles, setParticles] = useState([]);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth mouse movement
    const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        // Generate random particles
        const count = 40;
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: i,
            x: Math.random() * 100, // %
            y: Math.random() * 100, // %
            size: Math.random() * 3 + 1, // px
            duration: Math.random() * 10 + 10, // seconds for floating
            delay: Math.random() * 5,
            opacity: Math.random() * 0.5 + 0.1,
            depth: Math.random() * 2 + 0.5 // Depth factor for parallax
        }));
        setParticles(newParticles);

        const handleMouseMove = (e) => {
            const { innerWidth, innerHeight } = window;
            const x = e.clientX / innerWidth - 0.5;
            const y = e.clientY / innerHeight - 0.5;
            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {/* Film Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.07] mix-blend-overlay z-10 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-repeat"></div>

            {/* Particles */}
            {particles.map((p) => (
                <Particle
                    key={p.id}
                    data={p}
                    mouseX={smoothX}
                    mouseY={smoothY}
                />
            ))}
        </div>
    );
};

const Particle = ({ data, mouseX, mouseY }) => {
    // Parallax effect: particles move opposite to mouse, scaled by depth
    const x = useTransform(mouseX, (v) => v * data.depth * 50); // Move up to 50px
    const y = useTransform(mouseY, (v) => v * data.depth * 50);

    return (
        <motion.div
            style={{
                left: `${data.x}%`,
                top: `${data.y}%`,
                width: data.size,
                height: data.size,
                x,
                y,
            }}
            animate={{
                y: [0, -20, 0], // Subtle float up and down
                opacity: [data.opacity, data.opacity * 1.5, data.opacity],
            }}
            transition={{
                duration: data.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: data.delay,
            }}
            className="absolute rounded-full bg-gold"
        />
    );
};

export default HeroBackground;
