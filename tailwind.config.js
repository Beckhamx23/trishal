/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: "Nunito Sans",
      },
      backgroundImage: {
        "hero-image": "url('/assets/bg.jpg')",
        "contact-image": "url('/assets/contact.jpg')",
      },
      colors: {
        designColor: "#3e23f1ff",
        textColor: "#aeaeae",
      },
      boxShadow: {
        cardShadow: "0px 0px 5px 10px rgba(0,0,0,0.10)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".touch-pan-y": {
          "touch-action": "pan-y",
        },
      });
    },
  ],
};
