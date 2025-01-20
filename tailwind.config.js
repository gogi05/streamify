/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontSize: {
        xs: "0.75rem", // Extra small text (12px)
        sm: "0.875rem", // Small text (14px)
        base: "1rem", // Base text (16px)
        lg: "1.25rem", // Large text (20px)
        xl: "1.5rem", // xl large text (24px)
        "2xl": "1.75rem", // 2xl large text (28px)
        "3xl": "2rem", // 3x large text (32px)
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        10: "40px",
        12: "48px",
      },
      colors: {
        primary: "#c73e17",
        primaryHover: "#9c2f11",
        card: "#ffffff",
        background: "#f1f5f9",
        secondary: "#000000",
        disabled: "#9cafa3",
      },
    },
  },
  plugins: [],
};
