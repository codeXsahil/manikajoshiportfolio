import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
    const siteTitle = "Manika Joshi | Digital Marketing Consultant & Brand Strategist";
    const siteDescription = "Expert Digital Marketing Freelancer and Brand Growth Strategist helping brands scale through performance marketing, influencer campaigns, and creative storytelling.";
    const siteUrl = "https://manikajoshi.in";
    const siteImage = "https://manikajoshi.in/assets/profile-main.png";

    // Structure Data (JSON-LD) for Rich Results
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Manika Joshi",
        "url": siteUrl,
        "jobTitle": "Digital Marketing Consultant",
        "image": siteImage,
        "sameAs": [
            "https://www.linkedin.com/in/manikajoshi",
            "https://www.instagram.com/manikajoshi"
        ],
        "description": siteDescription,
        "worksFor": {
            "@type": "Organization",
            "name": "Freelance"
        }
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "Manika Joshi Digital Marketing",
        "image": siteImage,
        "url": siteUrl,
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
        },
        "description": "Freelance Digital Marketing Expert offering Brand Strategy, Performance Marketing, and Influencer Management services."
    };

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{siteTitle}</title>
            <meta name="title" content={siteTitle} />
            <meta name="description" content={siteDescription} />
            <meta name="keywords" content="Digital Marketing Consultant, Freelance Digital Marketer, Brand Strategist, Influencer Marketing Expert, Performance Marketing Specialist, Digital Marketing Freelancer India, Manika Joshi Portfolio" />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={siteTitle} />
            <meta property="og:description" content={siteDescription} />
            <meta property="og:image" content={siteImage} />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={siteTitle} />
            <meta property="twitter:description" content={siteDescription} />
            <meta property="twitter:image" content={siteImage} />

            {/* Canonical */}
            <link rel="canonical" href={siteUrl} />

            {/* Structured Data */}
            <script type="application/ld+json">
                {JSON.stringify(schemaData)}
            </script>
            <script type="application/ld+json">
                {JSON.stringify(serviceSchema)}
            </script>
        </Helmet>
    );
};

export default SEO;
