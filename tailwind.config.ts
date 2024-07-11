import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "landing": "url('../public/landing.png')",
        "mountains": "url('../public/mountains.jpg')"
      },
      backgroundSize: {
        'fit-h': 'auto 100%'
      }
    },
  },
  plugins: [],
};
export default config;
