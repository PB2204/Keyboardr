/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        cyan: "#1E90FF",
      },
      boxShadow: {
        navbar: "0px 2px 4px rgba(0, 0, 0, 0.05)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      flex: {
        navbar: "0 0 auto",
      },
      spacing: {
        navbar: "72px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
