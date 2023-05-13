/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    "./app/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        newSpin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(180deg)" },
        },
        growAndShrink: {
          "0%": { transform: "scale(0)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0)" },
        },
      },
      animation: {
        spiner: "newSpin 600ms linear forwards",
        grower: "growAndShrink 600ms ease-in-out forwards",
      },
      fontFamily: {
        sans: ["var(--font-karla)"],
        display: ["var(--font-sentient)"],
      },
    },
  },
};
