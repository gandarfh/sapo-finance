import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-light-2-color: #FF6F95;
    --primary-light-1-color: #FB5984;
    --primary-color: #fa3c6e;
    --primary-dark-1-color: #E32557;
    --primary-dark-2-color: #CF1143;

    --secondary-light-2-color: #4E4E78;
    --secondary-light-1-color: #2B2B65;
    --secondary-color: #000050;
    --secondary-dark-1-color: #000044;
    --secondary-dark-2-color: #00003A;

    --gray-2-color: #A4A4A4;
    --gray-color: #7E7E7E;
    --black-color: #474747;
    --black-1-color: #333333;
    --black-2-color: #242424;

    --white-color: #FFFFFF;
    --success-color: #28C48C;
    --danger-color: #EB5757;
    --info-color: #F2994A;
  }

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--black-color);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
