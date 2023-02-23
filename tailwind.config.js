/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      // ## Screen sizes
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        lx: "1440x",
      },
      // ## Colors
      colors: {
        // ### Primary
        clSoftCyan: "hsl(174, 77%, 80%)", // Full Slider Bar
        clStrongCyan: "hsl(174, 86%, 45%)", // Slider Backround
        clLightGrayishRed: "hsl(14, 92%, 95%)", // Discount Background
        clLightRed: "hsl(15, 100%, 70%)", // Discount Text
        clPaleBlue: "hsl(226, 100%, 87%)", // CTA Text
        // ### Neutral
        clVeryPaleBlue: "hsl(230, 100%, 99%)", // Main Background
        cl_white: "hsl (0, 0%, 100%)", // Pricing Component Background
        clLightGrayishBlue: "hsl(224, 65%, 95%)", // Empty Slider Bar
        clLightGrayishBlue: "hsl(223, 50%, 87%)", // Toggle Background
        clGrayishBlue: "hsl(225, 20%, 60%)", // Text
        clDarkDesaturatedBlue: "hsl(227, 35%, 25%)", // Text & CTA Background
      },
    },
  },
  plugins: [],
}
