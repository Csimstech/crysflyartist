import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        char: { DEFAULT: "#141312", soft: "#1C1B1A", deep: "#0F0E0D" },
        ivory: { DEFAULT: "#F7F1E8", 2: "#F1E9DC" },
        sand: "#D8C3A5",
        sienna: "#A0522D",
        burgundy: "#5A1F2E",
        gold: { DEFAULT: "#C6A15B", deep: "#A9842F" },
      },
      fontFamily: {
        serif: ['"Playfair Display Variable"', "Georgia", "serif"],
        cormorant: ['"Cormorant Garamond"', "Georgia", "serif"],
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { site: "1480px" },
      transitionTimingFunction: { editorial: "cubic-bezier(.22,.61,.36,1)" },
    },
  },
  plugins: [],
};

export default config;
