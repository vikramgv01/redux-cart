// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "600px",
        md: "728px",
        lg: "984px",
        xl: "1140px",
      },
    },
    extend: {
      colors: {
        testpink: "#ff00aa",
      },
    },
  },
  plugins: [],
};
