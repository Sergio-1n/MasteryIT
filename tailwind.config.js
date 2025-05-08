// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  darkMode: 'class', // <=== ЭТО ОБЯЗАТЕЛЬНО
  theme: {
    extend: {},
  },
  plugins: [],
};
