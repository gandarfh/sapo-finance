interface themeProps {
  breakpoints: {
    sm: string
    md: string
    lg: string
    xl: string
  }
}

const theme: themeProps = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

export default theme
