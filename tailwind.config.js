/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
   'dark-heading':'#1515BF',
   'light-heading':'#3E3ED5',
   'moderate-color':'#6A6ADC',
   'dark-background':'#8989EB',
   'light-background':'#C6C6FB'
         

     }
  },
  plugins: [],
}