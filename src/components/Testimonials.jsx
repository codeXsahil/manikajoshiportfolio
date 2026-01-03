import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Manika's strategic vision completely transformed our brand positioning. She doesn't just execute; she elevates the entire narrative.",
        author: "Ankush Vengurlekar",
        role: "Founder, Auralis",
        company: "Tech Industry"
    },
    {
        quote: "The G20 event execution was flawless. Her ability to manage high-pressure situations while delivering premium quality is unmatched.",
        author: "Rahul Kumar",
        role: "General Manager",
        company: "The Lalit Chandigarh"
    },
    {
        quote: "Our engagement rates skyrocketed after the Secret Temptation campaign. She understands exactly how to connect brands with Gen-Z audiences.",
        author: "Priya Sharma",
        role: "Marketing Head",
        company: "McNROE Consumer Products"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prev = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="section-padding bg-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4 max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">Client <span className="text-gold italic">Perspectives</span></h2>
                </motion.div>

                <div className="relative">
                    <div className="absolute top-0 left-0 text-gold opacity-10 transform -translate-x-1/2 -translate-y-1/2">
                        <Quote size={120} />
                    </div>

                    <div className="glass-panel p-8 md:p-16 rounded-3xl relative min-h-[400px] flex items-center justify-center">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.5 }}
                                className="text-center max-w-3xl mx-auto"
                            >
                                <p className="font-serif text-2xl md:text-3xl leading-relaxed mb-8 text-[#f0f0f0]">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div>
                                    <h4 className="text-gold uppercase tracking-widest text-sm font-bold mb-2">{testimonials[currentIndex].author}</h4>
                                    <p className="text-dim text-sm uppercase tracking-widest">{testimonials[currentIndex].role} — {testimonials[currentIndex].company}</p>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Controls */}
                        <div className="absolute bottom-8 right-8 flex gap-4">
                            <button onClick={prev} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={next} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all">
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
