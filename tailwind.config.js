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
                neutral: "var(--neutral)",
                "base-300": "var(--base-300)",
                "base-200": "var(--base-200)",
                "base-100": "var(--base-100)",
            },
            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },
        },
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
};
