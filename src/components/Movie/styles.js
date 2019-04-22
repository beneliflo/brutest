import styled from 'styled-components'
import { colors } from '../../layouts/theme'

const MovieStyled = styled.a`
  display: inline-block;
  border-radius: 3px;
  overflow: hidden;
  position: relative;

  img {
    -webkit-filter: grayscale(95%);
    filter: grayscale(95%);
    margin: 0;
  }

  .rate {
    position: absolute;
    top: 0;
    right: 0;
  }

  .title {
    position: absolute;
    bottom: 0;
    margin: 0;
  }
`
export default MovieStyled
