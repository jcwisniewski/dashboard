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
      blue: "#6db1bf",
      white: "#FFFFFF",
      pink: "#F39A9D",
      green: "#3F6C51",
    },
    extend: {},
  },
  plugins: [],
};
export default config;
