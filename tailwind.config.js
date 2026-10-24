const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content(),],
  theme: {
    extend: {
      colors: {
        // Brand red, sampled from the IDTechLabs logo mark.
        brand: {
          50: '#fff1f1',
          100: '#ffdede',
          200: '#ffc4c4',
          300: '#ff9a9a',
          400: '#ff5252',
          500: '#ff1a1a',
          600: '#e60000',
          700: '#b80000',
          800: '#8f0000',
          900: '#6b0000',
          950: '#3d0000',
        },
        // Near-black page surfaces, to match the logo's black field.
        ink: {
          700: '#1f1f1f',
          800: '#141414',
          900: '#0a0a0a',
          950: '#050505',
        },
      },
    },
  },
  plugins: [flowbite.plugin(),],
}
