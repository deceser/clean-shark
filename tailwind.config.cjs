/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: "Rubik, Sans-serif",
      },
      colors: {
        softblue: "hsl(231, 69%, 60%)",
        softred: "hsl(0, 94%, 66%)",
        grayfishblue: "hsl(229, 8%, 60%)",
        verydarkblue: "hsl(229, 31%, 21%)",
      },
      fontSize: {
        'body' : '18px',
      },
      screens:{
        'hg': "1100px",
        'sm' : "540px",
      },
    },
  },
  plugins: [],
};
