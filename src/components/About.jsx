import React from 'react';
import { motion } from 'framer-motion';
import imgProfile from '../assets/images/profile-main.png';

const About = () => {
    return (
        <section id="about" className="section-padding bg-black relative">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-16 items-center">

                    {/* Image Side (Placeholder for now) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="aspect-[3/4] bg-[#111] border border-white/10 rounded-sm relative overflow-hidden group">
                            <img src={imgProfile} alt="Manika Joshi" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="w-full md:w-1/2">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="font-serif text-4xl md:text-5xl mb-8 leading-tight"
                        >
                            Strategic Depth. <br />
                            <span className="text-gold italic">Creative Soul.</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-6 text-dim text-lg leading-relaxed"
                        >
                            <p>
                                With 5+ years of hands-on experience, I bridge the gap between creative storytelling and performance marketing. My work isn't just about aesthetics; it's about building strong digital presence and measurable business impact.
                            </p>
                            <p>
                                I've partnered with premium brands, fast-growing startups, and global names—executing everything from high-profile influencer collaborations to national-level events.
                            </p>
                            <div className="pt-4">
                                <h3 className="text-white font-serif text-xl mb-4">Core Strengths</h3>
                                <ul className="grid grid-cols-2 gap-4 text-sm uppercase tracking-wide">
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>Brand Strategy</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>Influencer Marketing</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>Performance Ads</li>
                                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-gold rounded-full"></span>PR & Events</li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
