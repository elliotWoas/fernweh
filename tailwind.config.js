export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Vazirmatn", "Vazir", "Tahoma", "Arial", "sans-serif"],
      },
      screens: {
        // Define a single breakpoint for mobile-only design
        'mobile': '480px',
        // Other screen sizes are intentionally not defined to prevent desktop layouts
      },
      maxWidth: {
        // Define standard mobile widths
        'xs': '320px',
        'sm': '384px', 
        'md': '448px',
        'lg': '480px', // Standard phone width
      },
      keyframes: {
        pulseOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(1.5)", opacity: "0" },
        },
      },
      animation: {
        "pulse-out": "pulseOut 2s ease-out infinite",
      },
    },
  },
  // Add plugins or RTL support here if needed
} 