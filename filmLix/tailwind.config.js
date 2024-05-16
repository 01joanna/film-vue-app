/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "customPurple":"#802BB1",
      "customDarkPurple":"#2D283E",
      "customGray":"#564F6F",
      "customDarkGray":"#4C495D",
      "customWhite":"#D1D7E0",
    },
    screens: {
      'sm': '640px',
      'lg': '1024px',
    }
    
  },
  plugins: [],
}
