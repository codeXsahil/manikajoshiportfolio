import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

import imgAnkush from '../assets/images/founder-ankush.png';
import imgGurpreet from '../assets/images/founder-gurpreet.png';

const founders = [
    {
        name: "Ankush Vengurlekar",
        role: "Tech Leader & Growth Expert",
        image: imgAnkush,
        description: "Personal branding focused on growth, leadership & execution. Built consistent thought-leadership framework.",
        linkedin: "https://www.linkedin.com/in/ankush-vengurlekar-growth/"
    },
    {
        name: "Gurpreet Singh Jodhka",
        role: "Founder & Entrepreneur",
        image: imgGurpreet,
        description: "Professional positioning aligned with business credibility. Established a clear brand voice.",
        linkedin: "https://www.linkedin.com/in/gurpreetjodhka/"
    }
];

const Founders = () => {
    return (
        <section id="founders" className="section-padding bg-black/30">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">Founder <span className="text-gold italic">Branding</span></h2>
                    <p className="text-dim max-w-2xl mx-auto">Helping leaders build authority, credibility, and consistent visibility.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {founders.map((founder, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-panel p-8 md:p-12 rounded-2xl flex flex-col items-center text-center group border-white/5 hover:border-gold/30 transition-colors"
                        >
                            <div className="w-24 h-24 rounded-full mb-6 border border-white/10 overflow-hidden relative group-hover:border-gold/50 transition-colors">
                                <img src={founder.image} alt={founder.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                            <h3 className="font-serif text-2xl mb-2">{founder.name}</h3>
                            <p className="text-gold text-xs uppercase tracking-widest mb-6">{founder.role}</p>
                            <p className="text-dim text-sm leading-relaxed mb-6">
                                {founder.description}
                            </p>
                            <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest hover:text-gold transition-colors">
                                <Linkedin size={16} /> View Profile
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Founders;
