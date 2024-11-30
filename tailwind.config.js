/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        'hero': "url('/assets/home-hero-bg-image.png')",
      },
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
      },
    },
  },
  plugins: [],
}