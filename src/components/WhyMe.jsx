import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const reasons = [
    "Strategy-first, not trend-chasing",
    "Strong creator & brand ecosystem",
    "Balance of creativity & performance",
    "Experience with luxury & mass brands",
    "Proven high-pressure execution"
];

const WhyMe = () => {
    return (
        <section className="section-padding bg-white/5 relative overflow-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="w-full md:w-1/2">
                    <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">
                        Why Partner with <br />
                        <span className="text-gold italic">Manika?</span>
                    </h2>
                    <div className="space-y-6">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-center gap-4 text-lg md:text-xl text-dim"
                            >
                                <CheckCircle className="text-gold" size={24} />
                                {reason}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="w-full md:w-1/2 relative">
                    <div className="aspect-square rounded-full border border-white/10 flex items-center justify-center p-12 relative">
                        <div className="absolute inset-0 border border-gold/20 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="text-center">
                            <span className="block text-6xl md:text-8xl font-serif text-white mb-2">5+</span>
                            <span className="text-gold uppercase tracking-widest text-sm">Years of <br /> Excellence</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyMe;
