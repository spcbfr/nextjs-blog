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
      fontFamily: {
        sans: ["Poppins"],
        display: ["Space Grotesk"],
      },
      typography: {
        DEFAULT: {
          css: {
            pre: {
              backgroundColor: false,
              marginTop: false,
              marginBottom: false,
              marginLeft: false,
              marginRight: false,
              paddingLeft: false,
              paddingRight: false,
            },
            code: {
              paddingLeft: false,
              paddingRight: false,
              paddingTop: false,
              paddingBottom: false,
              marginTop: false,
              marginBottom: false,
              marginLeft: false,
              backgroundColor: false,
            },
          },
        },

        sm: {
          css: {
            pre: {
              backgroundColor: false,
              marginTop: false,
              marginBottom: false,
              marginLeft: false,
              marginRight: false,
              paddingLeft: false,
              paddingRight: false,
            },
            code: {
              paddingLeft: false,
              paddingRight: false,
              paddingTop: false,
              paddingBottom: false,
              marginTop: false,
              marginBottom: false,
              marginLeft: false,
              backgroundColor: false,
            },
          },
        },
        lg: {
          css: {
            pre: {
              backgroundColor: false,
              marginTop: false,
              marginBottom: false,
              marginLeft: false,
              marginRight: false,
              paddingLeft: false,
              paddingRight: false,
            },
            code: {
              paddingLeft: false,
              paddingRight: false,
              paddingTop: false,
              paddingBottom: false,
              marginTop: false,
              marginBottom: false,
              marginLeft: false,
              backgroundColor: false,
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
