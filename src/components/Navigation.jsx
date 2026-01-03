import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    // Scroll Spy Logic
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.href.substring(1));

            // Find the current section
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // If the top of the section is within the viewport (with some offset)
                    if (rect.top <= 200 && rect.bottom >= 200) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-2xl"
            >
                <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between relative z-50">
                    <a href="#" className="font-serif text-xl tracking-tight font-medium hover:text-gold transition-colors">MJ.</a>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className={`text-sm uppercase tracking-widest transition-colors ${isActive ? 'text-gold' : 'text-dim hover:text-white'}`}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                        className="fixed inset-0 z-40 bg-black flex flex-col items-center justify-center md:hidden"
                    >
                        {/* Background Ambience for Menu */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                            <div className="absolute top-[-20%] left-[-20%] w-[80vw] h-[80vw] bg-gold/10 rounded-full blur-[100px]" />
                        </div>

                        <ul className="space-y-8 text-center relative z-10">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.li
                                        key={link.name}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 + (index * 0.1) }}
                                    >
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`font-serif text-5xl md:text-6xl ${isActive ? 'text-gold italic' : 'text-white hover:text-gold'} transition-colors duration-300`}
                                        >
                                            {link.name}
                                        </a>
                                    </motion.li>
                                );
                            })}
                        </ul>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-12 text-dim text-sm uppercase tracking-widest"
                        >
                            Manika Joshi Portfolio
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
