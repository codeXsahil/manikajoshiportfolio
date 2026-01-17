import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black pt-32 pb-12 relative overflow-hidden border-t border-white/5">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-12">
                    <div>
                        <h4 className="font-serif text-2xl mb-4">Manika Joshi</h4>
                        <p className="text-dim text-sm max-w-xs leading-relaxed">
                            Crafting purposeful brand narratives for the visionaries of tomorrow.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 text-right">
                        <a href="mailto:hello@manikajoshi.in" className="text-xl md:text-2xl font-serif hover:text-gold transition-colors">hello@manikajoshi.in</a>
                        <p className="text-dim text-sm">New Delhi, India</p>
                    </div>
                </div>

                {/* Massive Signature Text */}
                <div className="relative mb-24 group cursor-pointer">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-[12vw] leading-[0.8] text-center text-[#f0f0f0] mix-blend-difference whitespace-nowrap group-hover:text-gold transition-colors duration-700"
                    >
                        LET'S CREATE
                    </motion.h1>
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                        <div className="w-32 h-32 rounded-full bg-gold/10 backdrop-blur-md flex items-center justify-center border border-gold/30">
                            <ArrowUpRight className="text-gold w-12 h-12" />
                        </div>
                    </motion.div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-white/5">
                    <div className="flex gap-8 text-sm text-dim uppercase tracking-widest">
                        <a href="https://www.linkedin.com/in/manikajoshi27" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">Instagram</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    </div>

                    <div className="text-dim text-xs opacity-50">
                        © {new Date().getFullYear()} Manika Joshi. All rights reserved.
                    </div>
                </div>
            </div>

            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
        </footer>
    );
};

export default Footer;
