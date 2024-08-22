/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      color: {
        customYellow: "#fcd34d",
      },
      fontFamily: {},
    },
  },
  plugins: [require("@tailwindcss/forms"), require("daisyui")],
};
