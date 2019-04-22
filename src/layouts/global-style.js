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
    overflow-x: hidden;
    font-weight: normal;
    line-height: inherit;
    background-color: ${colors.bg};
    color: ${colors.text};
  }
  body, html { height: 100%; }
`

export default GlobalStyle
