/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A1628",
        surface: "#F8FAFF",
        amber: "#F59E0B",
        gold: {
          300: "#FDE68A",
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
          700: "#B45309",
        },
        brand: {
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          400: "#60A5FA",
          500: "#3B82F6",
          600: "#2563EB",
          700: "#1D4ED8",
          800: "#1E40AF",
          900: "#1E3A8A",
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', "Inter", "ui-sans-serif"]
      },
      boxShadow: {
        luxury: "0 32px 80px rgba(10,22,40,0.14)",
        card: "0 4px 24px rgba(10,22,40,0.07), 0 1px 3px rgba(10,22,40,0.04)",
        "card-hover": "0 20px 56px rgba(10,22,40,0.13)",
        soft: "0 20px 60px rgba(10,22,40,0.09)",
        glow: "0 8px 32px rgba(37,99,235,0.32)",
        "glow-gold": "0 8px 32px rgba(245,158,11,0.32)",
      }
    }
  },
  plugins: []
};
