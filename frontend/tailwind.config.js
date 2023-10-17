/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '416px',
      // => @media (min-width: 400px) { ... }

      'md': '760px',
      // => @media (min-width: 960px) { ... }

      'lg': '1600px',
      // => @media (min-width: 1440px) { ... }
    },
    fontSize: {
      sm: '0.5rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    extend: {
      spacing: {
        '500': '500px',
        
      },
    },
  },
  plugins: [],
}

