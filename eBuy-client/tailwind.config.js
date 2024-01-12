/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutral: "#eeeeee",
        primary: "#00ADB5",
        secondary: "#222831",
      },
    },
  },
  plugins: [],
};
