/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1C3F39",
        secondery: "#E9E6D7",
        tertiary: "#F2AC0D",
        light_green: "#556561",
        light_gray: "#B7CBC7",
        b_color: "#315E56",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
    },
  },
  plugins: [],
};
