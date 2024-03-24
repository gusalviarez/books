/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brown-light": "#efe5da",
        "white-cream": "#fcf8f5",
        "brown-dark": "#32200f"
      }
    }
  },
  plugins: []
};
