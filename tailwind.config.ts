import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      colors: {
        coral: {
          50: "#fff5f2",
          100: "#ffe8e0",
          200: "#ffd0c2",
          300: "#ffab94",
          400: "#ff7f5c",
          500: "#ff6b3d",
          600: "#f04e20",
        },
        amber: {
          50: "#fffbeb",
          400: "#fbbf24",
          500: "#f59e0b",
        },
        warm: {
          50: "#fefcfb",
          100: "#fdf8f5",
          200: "#f5ebe4",
          800: "#2d2a26",
          900: "#1c1917",
          950: "#0f0e0d",
        },
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        "move-left": "move-left 1s linear infinite",
        "move-right": "move-right 1s linear infinite",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": { transform: "scale(3)", opacity: "0" },
        },
        "move-left": {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "move-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
