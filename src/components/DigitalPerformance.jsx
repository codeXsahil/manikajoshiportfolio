import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, Users, Target, BarChart3, ArrowUpRight, X, ChevronDown, ChevronUp } from 'lucide-react';

// Dynamic import for performance screenshots
const adsAssets = import.meta.glob('../assets/images/performance/*.{png,jpg,jpeg,webp}', { eager: true, as: 'url' });
const screenshots = Object.values(adsAssets);

// Mobile Slideshow Component
const MobileSlideshow = ({ images, onImageClick }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    React.useEffect(() => {
        if (images.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div
            className="w-full aspect-video rounded-xl overflow-hidden relative mb-8 border border-white/10"
            onClick={() => onImageClick(images[currentIndex])}
        >
            <AnimatePresence mode="wait">
                <motion.img
                    key={currentIndex}
                    src={images[currentIndex]}
                    alt="Performance Result"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Overlay and Indicator */}
            <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex justify-between items-end">


                <div className="flex gap-1">
                    {images.map((_, idx) => (
                        <div
                            key={idx}
                            className={`h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-4 bg-gold' : 'w-1 bg-white/30'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

const DigitalPerformance = () => {
    const [showGallery, setShowGallery] = useState(false);
    const [lightboxSrc, setLightboxSrc] = useState(null);

    const metrics = [
        { label: 'Avg. ROAS', value: '3.5x', icon: <TrendingUp size={24} />, desc: 'Return on Ad Spend' },
        { label: 'CPA Reduction', value: '40%', icon: <Target size={24} />, desc: 'Cost Per Acquisition' },
        { label: 'Leads Generated', value: '10k+', icon: <Users size={24} />, desc: 'Qualified Leads' },
        { label: 'Total Ad Spend', value: '$50k+', icon: <BarChart3 size={24} />, desc: 'Managed Successfully' },
    ];

    return (
        <section className="bg-[#050505] relative py-10 md:py-20 border-t border-white/5">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8 md:gap-20">

                    {/* Left Column: Context & Metrics */}
                    <div className="md:w-1/3 space-y-12">
                        <div>
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="text-gold text-xs uppercase tracking-widest mb-4 block"
                            >
                                Expertise
                            </motion.span>
                            <motion.h2
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="font-serif text-4xl md:text-5xl text-white mb-6"
                            >
                                Digital <span className="italic text-white/50">Performance</span>
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="text-dim text-lg leading-relaxed"
                            >
                                Driving measurable growth through data-backed strategies on Meta & Google Ads.
                                We don't just run ads; we engineer acquisition pipelines that scale.
                            </motion.p>
                        </div>

                        {/* Metrics Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {metrics.map((m, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-gold/20 transition-colors group"
                                >
                                    <div className="text-gold mb-3 opacity-70 group-hover:opacity-100 transition-opacity">{m.icon}</div>
                                    <div className="text-2xl md:text-3xl font-serif text-white mb-1">{m.value}</div>
                                    <div className="text-xs text-dim uppercase tracking-wider">{m.label}</div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column: Screenshot Gallery Preview */}
                    <div className="md:w-2/3">
                        {/* Mobile Slideshow View (Visible only on mobile) */}
                        <div className="block md:hidden">
                            {screenshots.length > 0 && (
                                <MobileSlideshow
                                    images={screenshots.slice(0, 4)}
                                    onImageClick={(src) => setLightboxSrc(src)}
                                />
                            )}
                        </div>

                        {/* Desktop Grid View (Hidden on mobile) */}
                        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {screenshots.length > 0 ? (
                                screenshots.slice(0, 4).map((src, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        onClick={() => setLightboxSrc(src)}
                                        className="rounded-xl overflow-hidden border border-white/10 bg-[#111] aspect-[4/3] relative group cursor-pointer"
                                    >
                                        <img
                                            src={src}
                                            alt="Ad Performance Result"
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span className="text-white text-sm font-medium flex items-center gap-2">
                                                View Result <ArrowUpRight size={14} className="text-gold" />
                                            </span>
                                        </div>
                                    </motion.div>
                                ))
                            ) : (
                                // Placeholder states
                                Array.from({ length: 4 }).map((_, i) => (
                                    <div key={i} className="rounded-xl border border-white/5 bg-white/5 aspect-[4/3] flex items-center justify-center p-8 text-center">
                                        <p className="text-white/20 text-sm">Add screenshots to <br /><code className="text-gold/50 text-xs">src/assets/images/performance</code></p>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* View All Button */}
                        {screenshots.length > 4 && (
                            <div className="text-center pt-4">
                                <button
                                    onClick={() => setShowGallery(true)}
                                    className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white/50 hover:text-gold transition-colors"
                                >
                                    View All Results <ChevronDown size={16} />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Gallery Popup Overlay */}
            <AnimatePresence>
                {showGallery && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl overflow-y-auto"
                    >
                        <div className="min-h-screen p-8 md:p-12 pt-24 md:pt-12">
                            {/* Header */}
                            <div className="flex justify-between items-center mb-12 max-w-7xl mx-auto">
                                <div>
                                    <h3 className="font-serif text-3xl text-white mb-2">Performance <span className="italic text-gold">Gallery</span></h3>
                                    <p className="text-white/50">Comprehensive view of campaign results</p>
                                </div>
                                <button
                                    onClick={() => setShowGallery(false)}
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            {/* Full Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                {screenshots.map((src, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: idx * 0.05 }}
                                        onClick={() => setLightboxSrc(src)}
                                        className="rounded-xl overflow-hidden border border-white/10 bg-[#111] aspect-[4/3] relative group cursor-pointer"
                                    >
                                        <img
                                            src={src}
                                            alt={`Result ${idx + 1}`}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <ArrowUpRight className="text-white" size={32} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {lightboxSrc && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setLightboxSrc(null)}
                        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/98 p-4 backdrop-blur-xl"
                    >
                        <button
                            onClick={() => setLightboxSrc(null)}
                            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white/70 hover:text-white transition-colors z-50"
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative w-full h-full flex items-center justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightboxSrc}
                                alt="Full view"
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default DigitalPerformance;
