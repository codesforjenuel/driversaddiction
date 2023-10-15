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

      'lg': '1000px',
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
      backgroundImage: {
        'gt4rs': "url('https://res.cloudinary.com/dkaeetuud/image/upload/v1697393666/Drivers%20Addiction/porsche_banner_h72ref.jpg')",
      }
    },
  },
  plugins: [],
}

