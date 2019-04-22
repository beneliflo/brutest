import { colors } from './theme'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    width: 100%;
    line-height: 1.5;
    position: relative;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    height: 100%;
    font: inherit;
    font-family: 'Lato', sans-serif;
    overflow-x: hidden;
    font-weight: 400;
    line-height: inherit;
    background-color: ${colors.bg};
    color: ${colors.text};
  }

  body, html { height: 100%; }

  h1, h2, h3, a, input {
    font-family: 'Lato', sans-serif;
    font-weight: 400;
  }

  img, a {
    vertical-align: middle;
  }
`

export default GlobalStyle
