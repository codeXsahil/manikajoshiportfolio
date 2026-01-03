import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: "What industries do you specialize in?",
        answer: "I have deep expertise in Luxury Hospitality, Lifestyle, Beauty (D2C), and Education. However, the core principles of brand storytelling and growth strategy apply across sectors, and I love taking on unique challenges."
    },
    {
        question: "Do you offer one-off consultations or only retainers?",
        answer: "I offer both. For established brands, I recommend a retainer for long-term impact. For startups or specific problems, I offer 1:1 strategy consultations and 'Brand Audits' as one-off services."
    },
    {
        question: "What is your typical project timeline?",
        answer: "A comprehensive brand strategy project typically takes 4-6 weeks from audit to roadmap. Specific campaigns vary based on scope and deliverables."
    },
    {
        question: "Do you handle the creative production as well?",
        answer: "Yes. I have a curated network of top-tier designers, videographers, and copywriters. I act as the Creative Director to ensure the final output aligns perfectly with the strategy."
    }
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <section className="section-padding">
            <div className="container mx-auto max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">Frequently Asked <span className="text-gold italic">Questions</span></h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:border-gold/30 transition-colors"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                            >
                                <span className="text-lg md:text-xl font-serif text-[#f0f0f0]">{faq.question}</span>
                                <span className={`text-gold transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    {activeIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                                </span>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="p-6 md:p-8 pt-0 text-dim leading-relaxed border-t border-white/5">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
