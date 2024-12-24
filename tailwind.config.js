import { Container } from 'postcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1120px"
      },
      
      fontFamily: {
        'open': ['Lato','serif']
      }

    },
  },
  plugins: [],
}