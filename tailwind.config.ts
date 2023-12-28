import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["var(--font-lt)"],
        dm: ["var(--font-dm)"],
        js: ["var(--font-js)"],
      },
      spacing: {
        "app-nav-bar": "72px",
      },
    },
  },
  plugins: [],
};
export default config;
