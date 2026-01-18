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
        primary: {
          DEFAULT: '#2B4570',
          50: '#EEF2F7',
          100: '#D4E0ED',
          200: '#A9C1DB',
          300: '#7FA3C9',
          400: '#5484B7',
          500: '#2B4570',
          600: '#22375A',
          700: '#1A2A43',
          800: '#111C2D',
          900: '#090F16',
        },
        secondary: {
          DEFAULT: '#C8A882',
          50: '#F9F6F1',
          100: '#F0E9DD',
          200: '#E1D3BB',
          300: '#D2BD99',
          400: '#C8A882',
          500: '#B89366',
          600: '#9A7850',
          700: '#73593C',
          800: '#4D3B28',
          900: '#261E14',
        },
        accent: {
          DEFAULT: '#4169E1',
          50: '#EEF3FD',
          100: '#D6E3FA',
          200: '#ADC7F5',
          300: '#84ABF0',
          400: '#5B8FEB',
          500: '#4169E1',
          600: '#1E4FCC',
          700: '#173B9A',
          800: '#102867',
          900: '#081434',
        },
        background: '#FAF9F6',
        text: '#1A1A1A',
        border: '#E3DED6',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
