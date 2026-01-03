import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Users, Share2, BarChart2, Mic2, Calendar } from 'lucide-react';

const services = [
    {
        icon: <Megaphone size={32} />,
        title: "Brand Strategy",
        description: "End-to-end positioning, storytelling, and go-to-market strategies that build long-term brand recall."
    },
    {
        icon: <Users size={32} />,
        title: "Influencer Marketing",
        description: "Start-to-finish campaign management: discovery, negotiation, and creator-led storytelling."
    },
    {
        icon: <Share2 size={32} />,
        title: "Social Media",
        description: "Reels-first growth strategies, content calendars, and community building for Instagram & LinkedIn."
    },
    {
        icon: <BarChart2 size={32} />,
        title: "Performance Ads",
        description: "ROI-driven Meta & Google Ads strategies with precise funnel planning and audience targeting."
    },
    {
        icon: <Mic2 size={32} />,
        title: "PR & Communication",
        description: "Media planning, launch amplification, and influencer integrations for maximum visibility."
    },
    {
        icon: <Calendar size={32} />,
        title: "Event Marketing",
        description: "On-ground coordination and digital amplification for national and international events."
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding relative">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl md:text-5xl mb-4">Expertise & <span className="text-gold italic">Services</span></h2>
                    <p className="text-dim max-w-2xl mx-auto">Comprehensive marketing solutions tailored for growth and impact.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <SpotlightCard key={index} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const SpotlightCard = ({ service, index }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleFocus}
            onMouseLeave={handleBlur}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-8 py-10"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(197, 160, 89, 0.1), transparent 40%)`,
                }}
            />
            <div className="relative z-10">
                <div className="text-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                </div>
                <h3 className="font-serif text-2xl mb-4 text-[#f0f0f0]">{service.title}</h3>
                <p className="text-dim text-sm leading-relaxed">
                    {service.description}
                </p>
            </div>
        </motion.div>
    );
};

export default Services;
