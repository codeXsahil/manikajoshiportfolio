import React from 'react';
import { motion } from 'framer-motion';

const steps = [
    {
        number: "01",
        title: "Audit & Insight",
        description: "We dive deep into your brand's current positioning, market gaps, and audience psychology to find the 'hidden' opportunities."
    },
    {
        number: "02",
        title: "Strategic Blueprint",
        description: "Developing a comprehensive roadmap that aligns your business goals with creative storytelling and performance channels."
    },
    {
        number: "03",
        title: "Creative Execution",
        description: "Bringing the strategy to life with high-impact visuals, compelling copy, and precision-targeted campaigns."
    },
    {
        number: "04",
        title: "Scale & Optimize",
        description: "Continuous monitoring of KPIs and refining the approach to maximize ROI and brand equity over time."
    }
];

const Process = () => {
    return (
        <section className="section-padding bg-black relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">The <span className="text-gold italic">Process</span></h2>
                    <p className="text-dim max-w-xl mx-auto">From chaos to clarity. A structured approach to building timeless brands.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent z-0" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="relative z-10"
                        >
                            <div className="w-24 h-24 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mx-auto mb-8 relative group hover:border-gold/50 transition-colors duration-500">
                                <span className="text-2xl font-serif text-gold">{step.number}</span>
                                <div className="absolute inset-0 rounded-full border border-gold/20 scale-110 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            </div>
                            <div className="text-center px-4">
                                <h3 className="text-xl font-serif mb-4 text-white group-hover:text-gold transition-colors">{step.title}</h3>
                                <p className="text-dim text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
