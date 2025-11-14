import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Afacad", "sans-serif"],
  },
},
  },
  plugins: [],
};

export default config;
