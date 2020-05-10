import Typography from "typography"

const typography = new Typography({
    baseFontSize: '16px',
    baseLineHeight: 2,
    headerFontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Roboto', 'Helvetica', 'Arial', 'sans-serif'],
    // See below for the full list of options.

    googleFonts: [
      {
        name: 'Roboto',
        styles: [
          '300',
        ],
      },
    ],

  })

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography