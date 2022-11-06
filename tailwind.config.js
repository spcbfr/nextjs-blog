/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        display: ["Space Grotesk"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
