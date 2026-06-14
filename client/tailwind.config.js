/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#07162d",
        brand: {
          50: "#eff8ff",
          100: "#dcefff",
          500: "#1478e8",
          600: "#0864cc",
          700: "#0751a5",
          900: "#0b2d5c"
        },
        amber: "#ffb21c"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        soft: "0 18px 50px rgba(7, 22, 45, 0.09)",
        glow: "0 12px 30px rgba(20, 120, 232, 0.28)"
      }
    }
  },
  plugins: []
};
