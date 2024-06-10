/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        px: "1px"
      },
      colors: {
        primary: ""
      },
    },
  },
  plugins: [],
}

