import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --white-color: #fff;

    --primary-color: #009444;
    --primary-light-color: #B7FDD8;
    --primary-dark-color: #064021;

    --secondary-color: #132328;
    --secondary-light-color: #2E4B54;
    --secondary-dark-color: #08180F;

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
