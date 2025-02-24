export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accent: "var(--accent)",
                "base-content": "var(--base-content)",
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "base-300": "var(--base-300)",
                "base-200": "var(--base-200)",
                "base-100": "var(--base-100)",
            },
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            screens: {
                mobile: {min: '0px', max: '768px'},
                desktop: '769px'
            }
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    accent: "#FBD144",
                },
                dark: {
                    accent: "#FFE071",
                },
            },
        ],
    },
};
