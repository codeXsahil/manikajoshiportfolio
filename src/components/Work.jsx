import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check } from 'lucide-react';
import imgG20 from '../assets/images/project-g20.png';
import imgSecret from '../assets/images/project-secret.png';
import imgMercedes from '../assets/images/project-mercedes.png';
import imgPearson from '../assets/images/project-pearson.png';

const projects = [
    {
        title: "G20 Event - The Lalit",
        category: "Event Marketing",
        year: "2023",
        description: "Led complete marketing & communication, managing on-ground branding and digital visibility for international delegates.",
        details: {
            challenge: "Managing high-stakes global visibility with zero room for error for international delegates.",
            strategy: "Implemented a dual-layer communication strategy focusing on on-ground premium branding and real-time digital amplification.",
            results: ["Seamless execution for 20+ delegations", "Zero negative press coverage", "High stakeholder satisfaction"]
        }
    },
    {
        title: "Secret Temptation",
        category: "Influencer Campaign",
        title: "Secret Temptation",
        category: "Influencer Campaign",
        year: "2024",
        image: imgSecret,
        description: "Executed influencer-led campaigns with top creators to strengthen brand recall in the beauty segment.",
        details: {
            challenge: "Breaking through the noise in a saturated fragrance market with authentic storytelling.",
            strategy: "Curated a mix of macro and micro-influencers to create a 'ripple effect' of brand visibility.",
            results: ["3M+ Digital Reach", "15% Engagement Rate Increase", "Top Trending Campaign on Launch Day"]
        }
    },
    {
        title: "Mercedes-Benz (IJM Star)",
        category: "Performance Marketing",
        year: "2023",
        description: "Planned targeted performance campaigns increasing traffic by 20% and creating award-winning video content.",
        details: {
            challenge: "Driving qualified leads for high-ticket luxury inventory during a competitive season.",
            strategy: "Precision targeting on Meta & Google combined with cinematic video storytelling.",
            results: ["20% Increase in Website Traffic", "Video Recognized by Mercedes-Benz Germany", "2.5x ROAS"]
        }
    },
    {
        title: "Pearson India",
        category: "PR & Influencer",
        title: "Pearson India",
        category: "PR & Influencer",
        year: "2022",
        image: imgPearson,
        description: "Managed PR outreach and influencer collaborations to secure high visibility across education platforms.",
        details: {
            challenge: "Positioning a legacy education brand as a modern, digital-first learning partner.",
            strategy: "Leveraged education thought leaders and student influencers to humanize the brand.",
            results: ["Featured in Top 5 Education Portals", "Significant Sentiment Uplift", "Expanded Digital Footprint"]
        }
    }
];

const Work = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="work" className="section-padding">
            <div className="container mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-16 text-center"
                >
                    Selected <span className="text-gold italic">Work</span>
                </motion.h2>

                <div className="space-y-24">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-20 items-center`}
                        >
                            {/* Image / Visual Side */}
                            <div className="w-full md:w-3/5" onClick={() => setSelectedProject(project)}>
                                <div className="aspect-video bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/5 rounded-lg relative overflow-hidden group cursor-pointer">
                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                                        <span className="uppercase tracking-widest text-xs border border-white/30 px-6 py-2 rounded-full backdrop-blur-md text-white scale-90 group-hover:scale-100 transition-transform duration-500">View Case Study</span>
                                    </div>

                                    {/* Project Image */}
                                    <div className="absolute inset-0">
                                        <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" />
                                    </div>

                                    {/* Visual Overlay (retained for style) */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                                    {/* Decorative noise/gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/5 to-transparent opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full md:w-2/5">
                                <div className="flex items-center gap-4 text-gold text-xs uppercase tracking-widest mb-4">
                                    <span>{project.category}</span>
                                    <span className="w-8 h-[1px] bg-white/20"></span>
                                    <span>{project.year}</span>
                                </div>
                                <h3 className="font-serif text-3xl md:text-4xl mb-6">{project.title}</h3>
                                <p className="text-dim text-lg leading-relaxed mb-8">
                                    {project.description}
                                </p>
                                <button
                                    onClick={() => setSelectedProject(project)}
                                    className="text-sm uppercase tracking-widest hover:text-gold transition-colors flex items-center gap-2 group"
                                >
                                    Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Modal Overlay */}
                <AnimatePresence>
                    {selectedProject && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="bg-[#111] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl relative"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10 p-2 bg-black/50 rounded-full"
                                >
                                    <X size={24} />
                                </button>

                                {/* Modal Content */}
                                <div className="flex flex-col md:flex-row">
                                    {/* Image Section */}
                                    <div className="w-full md:w-2/5 bg-[#0a0a0a] min-h-[300px] md:min-h-full flex items-center justify-center border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden group">
                                        <div className="absolute inset-0">
                                            <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover opacity-50" />
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111] to-transparent" />
                                        </div>
                                        <div className="text-center relative z-10 p-8">
                                            <h3 className="font-serif text-3xl text-white mb-2">{selectedProject.title}</h3>
                                            <div className="text-gold text-xs uppercase tracking-widest">[View Details]</div>
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div className="w-full md:w-3/5 p-8 md:p-12">
                                        <div className="mb-8">
                                            <span className="text-gold text-xs uppercase tracking-widest block mb-2">{selectedProject.category}</span>
                                            <h2 className="font-serif text-3xl md:text-4xl mb-6">{selectedProject.title}</h2>
                                            <p className="text-dim text-lg leading-relaxed border-l-2 border-gold/30 pl-6 italic">
                                                "{selectedProject.description}"
                                            </p>
                                        </div>

                                        <div className="space-y-8">
                                            <div>
                                                <h4 className="text-white text-sm uppercase tracking-widest mb-3">The Challenge</h4>
                                                <p className="text-dim/80">{selectedProject.details.challenge}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm uppercase tracking-widest mb-3">The Strategy</h4>
                                                <p className="text-dim/80">{selectedProject.details.strategy}</p>
                                            </div>
                                            <div>
                                                <h4 className="text-white text-sm uppercase tracking-widest mb-3">Key Results</h4>
                                                <ul className="space-y-2">
                                                    {selectedProject.details.results.map((result, i) => (
                                                        <li key={i} className="flex items-center gap-3 text-dim/80">
                                                            <Check size={16} className="text-gold" />
                                                            {result}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>

                                        <div className="mt-12 pt-8 border-t border-white/5">
                                            <button className="w-full py-4 border border-white/20 rounded-full text-sm uppercase tracking-widest hover:bg-gold hover:text-black hover:border-gold transition-all duration-300 flex items-center justify-center gap-3">
                                                Visit Live Project <ArrowUpRight size={18} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Work;
