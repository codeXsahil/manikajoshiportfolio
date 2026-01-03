/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: '#C5A059',
                dim: '#a0a0a0',
                glass: 'rgba(255, 255, 255, 0.03)',
            },
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['"Manrope"', 'sans-serif'],
            },
            animation: {
                marquee: 'marquee 40s linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
            },
        },
    },
    plugins: [],
}
