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
        "profile": "url('../public/profile.png')",
        "mountains": "url('../public/mountains.jpg')",
        "pick": "url('../public/pick.svg')"
      },
      backgroundSize: {
        'fit-h': 'auto 100%'
      }
    },
  },
  plugins: [],
};
export default config;
