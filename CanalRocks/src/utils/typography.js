import Typography from "typography"

const typography = new Typography({
    baseFontSize: '24px',
    baseLineHeight: 1.5,
    headerFontFamily: ['Helvetica Neue', 'Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif'],
    // See below for the full list of options.
  })

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography