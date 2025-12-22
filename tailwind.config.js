/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      screens: {
        xs: "360px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3200px",
        "6xl": "3840px",
        "7xl": "5120px",
        "8xl": "7680px",
      },

      colors: {
        primary: {
          DEFAULT: "#FF6700",
          dark: "#FF6700",
        },
        dark: {
          bg: "#111827",
          text: "#f3f4f6",
          card: "#1f2937",
        },
      },

      /* 🔥 FONT SYSTEM */
      fontFamily: {
        heading: ["Campton", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },

  plugins: [require("tailwind-scrollbar-hide")],
};
