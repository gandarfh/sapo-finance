import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #FA3C6E;
    --primary-light-color: #FF6F95;
    --primary-dark-color: #CF1143;

    --secondary-color: #000050;
    --secondary-light-color: #4E4E78;
    --secondary-dark-color: #00003A;

    --black-color: #474747;
    --black-light-color: #A4A4A4;
    --black-dark-color: #242424;

    --gray-color: #D0D0D0;
    --gray-light-color: #F5F5F5;

    --sucess-color: #06E775;
    --error-color: #F03D3D;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--black-color);
  }

  *, body, input, textarea, button {
    font-family: 'Montserrat', sans-serif;
  }
`

export default GlobalStyles
