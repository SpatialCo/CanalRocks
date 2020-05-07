import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 2,
    headerFontFamily: ['Space Mono', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Space Mono', 'Helvetica', 'Arial', 'sans-serif'],
    // See below for the full list of options.

    googleFonts: [
      {
        name: 'Space Mono',
        styles: [
          '400',
        ],
      },
    ],

  })

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography