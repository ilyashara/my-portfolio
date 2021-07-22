module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'bounce-slow': 'bounce 3s linear infinite',
       }
    },
  },
  variants: {
  },
  plugins: [],
}