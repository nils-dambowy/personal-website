/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "mb-air": "1440px", // For MacBook Air screens
        "27-inch": "3840px", // For 27-inch monitor screens
      },
    },
  },
  plugins: [],
};
