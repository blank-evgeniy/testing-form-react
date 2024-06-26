/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '1024px',
    },
    fontFamily: {
      sans: ['Yeseva One', 'sans-serif'],
      serif: ["Yeseva One", 'serif'],
    },
    extend: {
      colors: {
        'green-main': '#ACFAAB',
        'green-accent': '#5DD25A',
        'green-dull': "#6C8D6B",
        'red-main': '#FFBABA',
        'dark-main': '#232323',
      },
    },
  },
  plugins: [],
}

