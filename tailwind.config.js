/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#049624",

          "secondary": "#a4ef8b",

          "accent": "#3abcba",

          "neutral": "#392442",

          "base-100": "#E5E5F1",

          "info": "#8AC9EA",

          "success": "#79ECAD",

          "warning": "#A66908",

          "error": "#F33551",
          "myColor": "#0099e5",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

