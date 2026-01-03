import React from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
        >
            <div className="overflow-hidden">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: "-100%" }}
                    transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
                    className="relative"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-serif text-[#f0f0f0] italic"
                    >
                        Manika Joshi
                    </motion.h1>
                </motion.div>
            </div>

            {/* Curtain Effect */}
            <motion.div
                initial={{ height: "0%" }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                className="absolute bottom-0 w-full bg-gold z-10"
            />
            <motion.div
                initial={{ height: "100%" }}
                animate={{ height: "0%" }}
                transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
                className="absolute top-0 w-full bg-black z-20"
            />
        </motion.div>
    );
};

export default Preloader;
