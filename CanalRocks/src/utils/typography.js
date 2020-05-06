import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 2,
    headerFontFamily: ['Source Sans Pro', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif'],
    // See below for the full list of options.

    googleFonts: [
      {
        name: 'Source Sans Pro',
        styles: [
          '400',
        ],
      },
    ],

  })

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography