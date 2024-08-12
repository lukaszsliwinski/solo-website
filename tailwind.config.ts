import type { Config } from "tailwindcss";
const defaultTheme = require('tailwindcss/defaultTheme');

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '2xs': '360px',
      xs: '480px',
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        "landing": "url('../public/landing.png')",
        "mountains": "url('../public/mountains.jpg')",
        "pick": "url('../public/pick.svg')"
      },
      backgroundSize: {
        'fit-h': 'auto 100%'
      },
      width: {
        '160': '40rem'
      },
      maxWidth: {
        '160': '40rem'
      },
      height: {
        '160': '40rem'
      }
    },
  },
  plugins: [],
};
export default config;
