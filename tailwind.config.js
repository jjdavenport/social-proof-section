/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './App.{js,jsx,ts,tsx}',
  ],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        league: ['league spartan', 'sans-serif'],
      },
      fontSize: {
        default: '15px',
      },
      colors: {
        veryDarkMagenta: 'hsl(300, 43%, 22%)',
        softPink: 'hsl(333, 80%, 67%)',
        darkGrayishMagenta: 'hsl(303, 10%, 53%)',
        lightGrayishMagenta: 'hsl(300, 24%, 96%)',
        white: 'hsl(0, 0%, 100%)',
      },
    },
  },
  plugins: [],
};
