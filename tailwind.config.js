/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',      // Extra small screens, e.g., small phones
        'sm': '640px',       // Small screens, e.g., large phones
        'md': '768px',       // Medium screens, e.g., tablets
        'lg': '1024px',      // Large screens, e.g., small laptops
        'xl': '1280px',      // Extra large screens, e.g., large laptops
        '2xl': '1536px',     // 2x extra large screens, e.g., desktops
        '3xl': '1920px',     // 3x extra large screens, e.g., large desktops
      },
      fontFamily: {
        sans: ["'Fira Sans'", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}