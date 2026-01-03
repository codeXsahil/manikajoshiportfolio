import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Mail, MapPin, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Construct the email body
        const mailtoLink = `mailto:tempxyzsah@gmail.com?subject=${encodeURIComponent(formState.subject || "Portfolio Inquiry")}&body=${encodeURIComponent(
            `Name: ${formState.name}\n` +
            `Email: ${formState.email}\n\n` +
            `Message:\n${formState.message}`
        )}`;

        // Open mail client
        window.location.href = mailtoLink;

        // Show feedback UI
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setFormState({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setIsSuccess(false), 5000);
        }, 1000);
    };

    return (
        <section id="contact" className="section-padding pb-32 relative">
            <div className="container mx-auto max-w-6xl">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Left Side: Text & Info */}
                    <div className="w-full lg:w-5/12">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="font-serif text-5xl md:text-7xl mb-8 leading-tight"
                        >
                            Let's Build Your <span className="text-gold italic">Brand Narrative?</span>
                        </motion.h2>

                        <p className="text-dim text-lg mb-12 leading-relaxed">
                            Ready to scale your authority and impact? I'm currently accepting select projects for Q3 2024. Reach out to discuss your vision.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold bg-white/5">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-dim mb-1">Email</h4>
                                    <a href="mailto:hello@manikajoshi.com" className="text-xl font-serif hover:text-gold transition-colors">hello@manikajoshi.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gold bg-white/5">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-sm uppercase tracking-widest text-dim mb-1">Location</h4>
                                    <p className="text-xl font-serif">New Delhi, India</p>
                                </div>
                            </div>

                            <div className="pt-8 border-t border-white/5 flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                    <Linkedin size={20} />
                                </a>
                                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-gold hover:text-black hover:border-gold transition-all duration-300">
                                    <Instagram size={20} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="w-full lg:w-7/12">
                        <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden">
                            {isSuccess ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="absolute inset-0 z-20 bg-[#0a0a0a] flex flex-col items-center justify-center text-center p-8"
                                >
                                    <CheckCircle size={64} className="text-gold mb-6" />
                                    <h3 className="font-serif text-3xl mb-4">Opening Mail App...</h3>
                                    <p className="text-dim">Your email client should open with the drafts ready. Just hit send!</p>
                                </motion.div>
                            ) : null}

                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-dim pl-4">Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formState.name}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-light"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs uppercase tracking-widest text-dim pl-4">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formState.email}
                                            onChange={handleChange}
                                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-light"
                                            placeholder="john@company.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-xs uppercase tracking-widest text-dim pl-4">Subject</label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formState.subject}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-light appearance-none text-dim"
                                    >
                                        <option value="" disabled className="bg-black">Select an interest</option>
                                        <option value="Brand Strategy" className="bg-black">Brand Strategy</option>
                                        <option value="Influencer Marketing" className="bg-black">Influencer Marketing</option>
                                        <option value="Personal Branding" className="bg-black">Personal Branding</option>
                                        <option value="PR & Events" className="bg-black">PR & Events</option>
                                        <option value="Other" className="bg-black">Other</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-xs uppercase tracking-widest text-dim pl-4">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="4"
                                        value={formState.message}
                                        onChange={handleChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-4 focus:outline-none focus:border-gold/50 focus:bg-white/10 transition-all font-light resize-none"
                                        placeholder="Tell me about your project..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-white text-black font-medium uppercase tracking-widest py-4 rounded-full hover:bg-gold transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? 'Sending...' : (
                                        <>Send Message <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
