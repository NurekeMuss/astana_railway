import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F4D2B",
        secondary: "#7ABF5A",
        "accent-red": "#D5433A",
        "accent-yellow": "#F2C94C",
        "background-light": "#F7F4EF",
        "background-dark": "#1A1A1A",
        "text-light": "#1A1A1A",
        "text-dark": "#FFFFFF",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "0.625rem",
        xl: "0.75rem",
      },
    },
  },
};

export default config;
