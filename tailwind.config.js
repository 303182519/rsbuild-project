const { adapter } = require('./tailwind.adapter');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    ...adapter(),
    extend: {},
  },
  plugins: [],
};
