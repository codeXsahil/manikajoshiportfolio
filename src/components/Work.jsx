import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';

// Dynamic Image Import (Support Images & Videos)
const allAssets = import.meta.glob('../assets/images/*/*.{png,jpg,jpeg,svg,webp,mp4,mov,MOV}', { eager: true, as: 'url' });

const getProjectAssets = (projectId) => {
    return Object.entries(allAssets)
        .filter(([path]) => path.includes(`/${projectId}/`))
        .map(([_, url]) => url);
};

const isVideo = (url) => {
    if (!url) return false;
    const lower = url.toLowerCase();
    return lower.includes('.mp4') || lower.includes('.mov') || lower.includes('.webm');
};

const projects = [
    {
        id: "g20",
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
        id: "secret",
        title: "Secret Temptation",
        category: "Influencer Campaign",
        year: "2024",
        description: "Executed influencer-led campaigns with top creators to strengthen brand recall in the beauty segment.",
        details: {
            challenge: "Breaking through the noise in a saturated fragrance market with authentic storytelling.",
            strategy: "Curated a mix of macro and micro-influencers to create a 'ripple effect' of brand visibility.",
            results: ["3M+ Digital Reach", "15% Engagement Rate Increase", "Top Trending Campaign on Launch Day"]
        }
    },
    {
        id: "mercedes",
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
        id: "hospitality",
        title: "Hospitality",
        category: "Creative Production",
        year: "2023",
        description: "Specialized production and ideation for F&B brands, focusing on cinematic food shoots and narrative-driven content.",
        details: {
            challenge: "Capturing the sensory essence of taste and texture through high-end production and visual storytelling.",
            strategy: "Conceptualized and executed professional food shoots combined with strategic ideation to elevate brand presence.",
            results: ["High-impact visual assets", "Enhanced brand narrative", "Increased social media engagement"]
        }
    }
];

const Work = () => {
    const [activeProject, setActiveProject] = useState(projects[0]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [projectAssets, setProjectAssets] = useState([]);
    const [currentAssetIndex, setCurrentAssetIndex] = useState(0);
    const [lightboxAsset, setLightboxAsset] = useState(null);

    // When project is selected for popup, load its assets
    useEffect(() => {
        if (selectedProject) {
            const assets = getProjectAssets(selectedProject.id);
            setProjectAssets(assets);
            document.body.style.overflow = 'hidden'; // Lock scroll
        } else {
            setProjectAssets([]);
            document.body.style.overflow = 'auto'; // Unlock scroll
        }
    }, [selectedProject]);

    // Reset slideshow when active project changes
    useEffect(() => {
        setCurrentAssetIndex(0);
    }, [activeProject]);

    // Get assets for the active project
    const activeProjectAssets = getProjectAssets(activeProject.id);

    // Navigation Handlers
    const nextSlide = () => {
        setCurrentAssetIndex((prev) => (prev + 1) % activeProjectAssets.length);
    };

    const prevSlide = () => {
        setCurrentAssetIndex((prev) => (prev - 1 + activeProjectAssets.length) % activeProjectAssets.length);
    };

    // Auto-advance slideshow (resets on interaction)
    useEffect(() => {
        if (activeProjectAssets.length <= 1) return;

        const timer = setTimeout(() => {
            nextSlide();
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentAssetIndex, activeProjectAssets.length]);

    // Determine current asset to display
    const activeAsset = activeProjectAssets[currentAssetIndex] || activeProjectAssets[0] || 'https://placehold.co/800x600/111/444?text=No+Asset';

    return (
        <section id="work" className="bg-black relative">
            <div className="container mx-auto px-4 py-16 md:py-32">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-serif text-4xl md:text-5xl mb-24 text-center"
                >
                    Selected <span className="text-gold italic">Work</span>
                </motion.h2>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Left Column: Sticky Image (Desktop only) */}
                    <div className="hidden lg:block relative">
                        <div className="sticky top-24 h-[600px] w-full rounded-xl overflow-hidden border border-white/5 bg-[#0a0a0a] group">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`${activeProject.id}-${currentAssetIndex}`}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0"
                                >
                                    {isVideo(activeAsset) ? (
                                        <video
                                            src={activeAsset}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover"
                                        />
                                    ) : (
                                        <div
                                            className="absolute inset-0 bg-cover bg-center"
                                            style={{ backgroundImage: `url(${activeAsset})` }}
                                        />
                                    )}

                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/20" />
                                </motion.div>
                            </AnimatePresence>

                            {/* Slider Controls */}
                            {activeProjectAssets.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                                        aria-label="Previous image"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white/70 hover:text-white backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100 z-20"
                                        aria-label="Next image"
                                    >
                                        <ChevronRight size={24} />
                                    </button>

                                    {/* Dots Indicator */}
                                    <div className="absolute bottom-32 left-0 right-0 flex justify-center gap-2 z-20">
                                        {activeProjectAssets.map((_, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setCurrentAssetIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all ${idx === currentAssetIndex ? 'bg-gold w-6' : 'bg-white/50 hover:bg-white/80'
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}

                            {/* Sticky Content Overlay */}
                            <div className="absolute bottom-8 left-8 right-8 z-10 pointer-events-none">
                                <div className="inline-block px-4 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md text-xs text-gold uppercase tracking-widest mb-4">
                                    Featured Project
                                </div>
                                <h3 className="font-serif text-4xl text-white">{activeProject.title}</h3>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Scrollable Content */}
                    <div className="flex flex-col gap-20 md:gap-[30vh] pb-20 md:pb-[20vh]">
                        {projects.map((project) => (
                            <motion.div
                                key={project.id}
                                onViewportEnter={() => setActiveProject(project)}
                                viewport={{ margin: "-40% 0px -40% 0px" }}
                                className="min-h-[50vh] flex flex-col justify-center"
                            >
                                {/* Mobile Image (Visible only on mobile) */}
                                <div className="lg:hidden w-full aspect-video mb-8 rounded-lg overflow-hidden border border-white/5 relative bg-[#0a0a0a]">
                                    {(() => {
                                        const mobAssets = getProjectAssets(project.id);
                                        const mobAsset = mobAssets.find(a => !isVideo(a)) || mobAssets[0] || 'https://placehold.co/800x600/111/444?text=No+Asset';
                                        return isVideo(mobAsset) ? (
                                            <video src={mobAsset} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                                        ) : (
                                            <img src={mobAsset} alt={project.title} className="w-full h-full object-cover" />
                                        );
                                    })()}
                                </div>

                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 text-gold text-xs uppercase tracking-widest">
                                        <span>{project.category}</span>
                                        <span className="w-8 h-[1px] bg-white/20"></span>
                                        <span>{project.year}</span>
                                    </div>

                                    <h3 className="font-serif text-3xl md:text-5xl leading-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-dim text-lg md:text-xl leading-relaxed">
                                        {project.description}
                                    </p>

                                    <ul className="space-y-2 pt-4">
                                        {project.details.results.slice(0, 2).map((r, i) => (
                                            <li key={i} className="flex items-center gap-3 text-sm text-white/60">
                                                <Check size={14} className="text-gold" /> {r}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="pt-8">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="group flex items-center gap-3 text-sm uppercase tracking-widest hover:text-gold transition-colors"
                                        >
                                            <span className="border-b border-white/20 pr-1 pb-1 group-hover:border-gold transition-colors">View Gallery</span>
                                            <ArrowUpRight size={16} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center p-0 sm:p-4 bg-black/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 100, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#111] border-t sm:border border-white/10 w-full max-w-6xl h-[90vh] sm:h-[85vh] sm:rounded-2xl relative flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/5 flex justify-between items-start shrink-0 bg-[#111] z-10">
                                <div>
                                    <p className="text-gold text-xs uppercase tracking-widest mb-1">{selectedProject.category}</p>
                                    <h2 className="font-serif text-2xl md:text-3xl text-white">{selectedProject.title}</h2>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 bg-white/5 hover:bg-white/10 rounded-full text-white/70 hover:text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Body */}
                            <div className="overflow-y-auto p-6 md:p-8 custom-scrollbar">
                                {/* Description */}
                                <div className="max-w-3xl mb-12">
                                    <p className="text-dim text-lg md:text-xl leading-relaxed italic border-l-2 border-gold/30 pl-6 mb-8">
                                        "{selectedProject.description}"
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                        <div>
                                            <h4 className="text-white text-xs uppercase tracking-widest mb-2 opacity-70">The Challenge</h4>
                                            <p className="text-dim text-sm">{selectedProject.details.challenge}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-xs uppercase tracking-widest mb-2 opacity-70">The Strategy</h4>
                                            <p className="text-dim text-sm">{selectedProject.details.strategy}</p>
                                        </div>
                                        <div>
                                            <h4 className="text-white text-xs uppercase tracking-widest mb-2 opacity-70">Key Results</h4>
                                            <ul className="space-y-1">
                                                {selectedProject.details.results.map((result, i) => (
                                                    <li key={i} className="flex items-center gap-2 text-dim text-sm">
                                                        <Check size={12} className="text-gold shrink-0" />
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Gallery Grid */}
                                <div className="space-y-4">
                                    <h3 className="font-serif text-2xl text-white mb-6">Gallery</h3>
                                    <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                                        {projectAssets.map((asset, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                onClick={() => setLightboxAsset(asset)}
                                                className="break-inside-avoid rounded-lg overflow-hidden border border-white/5 bg-white/5 hover:border-gold/30 transition-colors group aspect-video cursor-pointer"
                                            >
                                                {isVideo(asset) ? (
                                                    <video
                                                        src={asset}
                                                        controls
                                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                                    />
                                                ) : (
                                                    <img
                                                        src={asset}
                                                        alt={`${selectedProject.title} - ${index + 1}`}
                                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                                    />
                                                )}
                                            </motion.div>
                                        ))}
                                        {projectAssets.length === 0 && (
                                            <div className="text-dim italic">No assets available for this project.</div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {lightboxAsset && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxAsset(null)}
                        className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setLightboxAsset(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-colors z-50"
                        >
                            <X size={32} />
                        </button>

                        {/* Prev Button */}
                        {projectAssets.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = projectAssets.indexOf(lightboxAsset);
                                    const prevIndex = (currentIndex - 1 + projectAssets.length) % projectAssets.length;
                                    setLightboxAsset(projectAssets[prevIndex]);
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors z-50"
                            >
                                <ChevronLeft size={40} />
                            </button>
                        )}

                        {/* Next Button */}
                        {projectAssets.length > 1 && (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const currentIndex = projectAssets.indexOf(lightboxAsset);
                                    const nextIndex = (currentIndex + 1) % projectAssets.length;
                                    setLightboxAsset(projectAssets[nextIndex]);
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors z-50"
                            >
                                <ChevronRight size={40} />
                            </button>
                        )}

                        <motion.div
                            key={lightboxAsset}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {isVideo(lightboxAsset) ? (
                                <video
                                    src={lightboxAsset}
                                    controls
                                    autoPlay
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            ) : (
                                <img
                                    src={lightboxAsset}
                                    alt="Full view"
                                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                                />
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: #111;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #333;
                    border-radius: 3px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #555;
                }
            `}</style>
        </section>
    );
};

export default Work;
