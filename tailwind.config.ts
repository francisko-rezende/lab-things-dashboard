import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#F0B27A",
          main: "#FF8818",
          dark: "#CA6F1E",
        },
        secondary: {
          light: "#5D6D7E",
          main: "#2E4052",
          dark: "#212F3C",
        },
        error: {
          light: "#E57373",
          main: "#F44336",
          dark: "#D32F2F",
        },
        warning: {
          light: "#FFB74D",
          main: "#FFA726",
          dark: "#F57C00",
        },
        info: {
          light: "#4FC3F7",
          main: "#29B6F6",
          dark: "#0288d1",
        },
        success: {
          light: "#81C784",
          main: "#66BB6A",
          dark: "#388E3C",
        },
        common: {
          gray: "#D7DBDD",
          grayText: "#495057",
          white: "#FFFFFF",
          black: "#000000",
        },
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [],
};
export default config;
