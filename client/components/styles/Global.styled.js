import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }

  p {
    line-height: 1.2;
    padding: 0 !important;
    margin: 0 !important;
  }

  img {
    max-width: 100%;
}
`

export default GlobalStyles;