/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '320px', 
        'mm': '375px', 
        'mml':'425px',  
        'lm': '480px',  
        'st': '640px',  
        'mt': '768px',  
        'lt': '834px',  
        'sd': '1024px', 
        'md': '1280px', 
        'ld': '1440px', 
        'xl': '1680px', 
        '2xl': '1920px',
      },
    },
  },
  plugins: [],
}