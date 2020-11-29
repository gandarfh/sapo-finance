const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  font: {
    family: 'Montserrat, sans-serif',
    thin: 300,
    regular: 400,
    medium: 500,
    bold: 600,
    xBold: 700,
    sizes: {
      xsmall: '1.2rem',
      small: '1.4rem',
      medium: '1.6rem',
      large: '1.8rem',
      xlarge: '2.0rem',
      xxlarge: '2.8rem',
    },
  },
  colors: {
    primaryLighten: '#FF6F95',
    primaryLight: '#FB5984',
    primary: '#fa3c6e',
    primaryDark: '#E32557',
    primaryDarken: '#CF1143',

    secondaryLighten: '#4E4E78',
    secondaryLight: '#2B2B65',
    secondary: '#000050',
    secondaryDark: '#000044',
    secondaryDarken: '#00003A',

    grayLight: '#A4A4A4',
    gray: '#7E7E7E',
    black: '#474747',
    blackDark: '#333333',
    blackDarken: '#242424',

    white: '#FFFFFF',
    success: '#28C48C',
    danger: '#EB5757',
    info: '#F2994A',
  },
  spacings: {
    xxsmall: '0.8rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    large: '4.0rem',
    xlarge: '4.8rem',
    xxlarge: '5.6rem',
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
}

export default theme
