/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
        arabic: ["Aref Ruqaa Ink"],
        blaka: ["Blaka "],
      },

      colors: {
        midnnight: "#011627",
        scott: "#545379",
        sunrise: "#D8ECFD",
        bermuda: "#FDFEB0",
        miami: "#05F0E0",
        york: "#FDFEB0",
      },
      typography: ({ theme }) => ({
        custom: {
          css: {
            "--tw-prose-body": theme("colors.sunrise"),
            "--tw-prose-headings": theme("colors.sunrise"),
            "--tw-prose-lead": theme("colors.sunrise"),
            "--tw-prose-links": theme("colors.sunrise"),
            "--tw-prose-bold": theme("colors.sunrise"),
            "--tw-prose-counters": theme("colors.sunrise"),
            "--tw-prose-bullets": theme("colors.sunrise"),
            "--tw-prose-hr": theme("colors.sunrise"),
            "--tw-prose-quotes": theme("colors.sunrise"),
            "--tw-prose-quote-borders": theme("colors.sunrise"),
            "--tw-prose-captions": theme("colors.sunrise"),
            "--tw-prose-code": theme("colors.sunrise"),
            "--tw-prose-pre-code": theme("colors.sunrise"),
            "--tw-prose-pre-bg": theme("colors.sunrise"),
            "--tw-prose-th-borders": theme("colors.sunrise"),
            "--tw-prose-td-borders": theme("colors.sunrise"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
