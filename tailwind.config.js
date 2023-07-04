/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#252222",
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "rotate(0)" },
          "25%": { transform: "rotate(-20deg)" },
          "75%": { transform: "rotate(20deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wiggle: "wiggle 0.1s ease-in-out",
      },
    },
  },
  plugins: [],
};
