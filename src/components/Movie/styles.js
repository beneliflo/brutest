import styled from 'styled-components'
import { colors } from '../../layouts/theme'

const MovieStyled = styled.a`
  display: inline-block;
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  margin-bottom: 2rem;

  img {
    -webkit-filter: grayscale(95%);
    filter: grayscale(95%);
    margin: 0;
  }

  .rate {
    background-color: ${colors['dark-80']};
    color: ${colors['white-67']};
    font-size: 12px;
    font-weight: 900;
    position: absolute;
    top: 6px;
    right: 6px;
    border-radius: 3px;
    padding: 5px 15px;
  }

  .title {
    position: absolute;
    bottom: 12px;
    left: 12px;
    margin: 0;
    color: ${colors['ice-blue']};
    font-size: 24px;
    font-weight: 700;
    text-shadow: 2px 2px 4px ${colors['black-80']};
  }

  &:hover {
    img {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);

      transition: filter .5s
    }
  }
`
export default MovieStyled
