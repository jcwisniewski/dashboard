import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      purple: "#301A4B",
      blue: {
        header: "#6db1bf",
        10: "#629fac",
        20: "#578e99",
        30: "#4c7c86",
        40: "#416a73",
        50: "#375960",
        60: "#2c474c",
      },
      white: "#FFFFFF",
      pink: "#F39A9D",
      green: "#3F6C51",
      red: {
        50: "#fdecea",
        100: "#fcd9d6",
        200: "#f9a19a",
        300: "#f77b72",
        400: "#f5554a",
        500: "#f44336",
      },
    },
    extend: {},
  },
  plugins: [],
};
export default config;
