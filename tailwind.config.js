module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            backgroundImage: {
                "hero-bg": "url('../public/assets/hero-bg.jpg')",
                "mobile-hero-bg": "url('../public/assets/mobile-hero-bg.jpg')",
            },
            fontFamily: {
                elmessiri: ["El Messiri", "sans-serif"],
                amiri: ["Amiri", "serif"],
            },
        },
    },
    plugins: [],
};
