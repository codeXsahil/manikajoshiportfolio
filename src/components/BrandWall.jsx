import React from 'react';

const brands = [
    "Pearson", "The Lalit", "Blinkit", "Mercedes-Benz", "Secret Temptation",
    "Ava Hotels", "Kaya Spirits", "Bal Raksha Bharat", "ICRI", "Ganga Realty"
];

const BrandWall = () => {
    return (
        <section className="py-20 overflow-hidden relative border-y border-white/5 bg-black/50 backdrop-blur-sm">
            <div className="flex w-full">
                <div className="marquee-container flex-shrink-0 flex min-w-full items-center gap-16 animate-marquee whitespace-nowrap px-8 will-change-transform">
                    {/* Double the list for seamless loop */}
                    {[...brands, ...brands].map((brand, index) => (
                        <span key={index} className="text-2xl md:text-3xl font-serif text-dim opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
                <div className="marquee-container flex-shrink-0 flex min-w-full items-center gap-16 animate-marquee whitespace-nowrap px-8 will-change-transform" aria-hidden="true">
                    {[...brands, ...brands].map((brand, index) => (
                        <span key={index} className="text-2xl md:text-3xl font-serif text-dim opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            {brand}
                        </span>
                    ))}
                </div>
            </div>

            {/* Vignette for smooth edges */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#050505] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#050505] to-transparent z-10" />
        </section>
    );
};

export default BrandWall;
