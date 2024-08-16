

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "rgba(21, 114, 211, 1)",
        customWhite: "rgba(255, 255, 255, 1)",
        custombackground: "rgba(5, 28, 52, 1)",
        horizontal: "rgba(87, 87, 87, 1)",
        testimonials: "rgba(247, 251, 255, 1)",
        buttonbackground: "rgba(21, 114, 211, 1)",
      },
      screens: {
        mobile: {
          max: "500px",
        },
       tab:{
          max:"810px"
       },
      },
    },
  },
  plugins: [],
};
