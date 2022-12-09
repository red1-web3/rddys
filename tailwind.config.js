/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alegreya: ["Alegreya Sans", "sans-serif"],
      },
      colors: {
        "primary-black": "#0f172a",
        primary: "#bbf7d0",
      },
    },
  },
  plugins: [],
};
