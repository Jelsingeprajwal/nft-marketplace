/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cta: "#A259FF",
      },
      backgroundColor: {
        bgPrimary: "#2B2B2B",
        cta: "#A259FF",
        gray: "#3B3B3B",
      },
      fontFamily: {
        workSans: ["Work Sans", "sans-serif"],
        spaceMono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
