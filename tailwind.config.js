/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#6a59ff",
                bg: "#f5f5f5",
                white: "#ffffff",
                grayDark: "#222224",
                grayLight: "#f9f9f9",
            },
            spacing: {
                "swiper-container": "52rem",
                "swiper-slide-w": "37rem",
                "swiper-slide-h": "42rem",
            },
        },
    },
    plugins: [
        plugin(function ({addBase, theme}) {
            addBase({
                html: {
                    fontSize: "62.5%",
                    scrollBehavior: "smooth",
                },
                body: {
                    fontSize: "1.6rem",
                    backgroundColor: theme("colors.bg"),
                },
                "::-webkit-scrollbar": {
                    width: "1.3rem",
                },
                "::-webkit-scrollbar-thumb": {
                    borderRadius: "1rem",
                    backgroundColor: "#797979",
                    transition: "all 0.5s ease-in-out",
                },
                "::-webkit-scrollbar-thumb:hover": {
                    backgroundColor: "#222224",
                },
                "::-webkit-scrollbar-track": {
                    backgroundColor: "#f9f9f9",
                },
            });
        }),
    ],
};
