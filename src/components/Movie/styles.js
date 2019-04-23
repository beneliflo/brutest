import styled from 'styled-components'
import { colors } from '../../layouts/theme'

const MovieStyled = styled.div`

  .movie-content {
    display: inline-block;
    border-radius: 3px;
    overflow: hidden;
    position: relative;
    margin-bottom: 2rem;
    cursor: pointer;
  }

  .movie-img {
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
    .movie-img {
      -webkit-filter: grayscale(0%);
      filter: grayscale(0%);

      transition: filter .5s
    }
  }

  .popup {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0,0,0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
  }

  .popup-inner {
    width: 95%;
    max-width: 920px;
    max-height: 95%;
    margin: auto;
    background-color: ${colors.yellow};
    border-radius: 5px;
    padding: 40px;
    overflow: hidden;
    overflow-y: auto;
    position: relative;

    h4 {
      text-transform: uppercase;
      color: ${colors.black};
      font-size: 14px;
      margin-bottom: 20px;
      margin-top: 40px;
    }

    button {
      width: 36px;
      height: 36px;
      background-color: transparent;
      cursor: pointer
      border: 0;
      position: absolute;
      top: 20px;
      left: 20px;
      outline: none;
      margin: 0;
      padding: 0;
    }
  }

  .popup-bgimage {
    position: absolute;
    width: 100%;
    height: 100%;
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    opacity: .1;
    background-size: cover;
    pointer-events: none;
  }

  .popup-img {
    margin: 0 auto;
    display: block;
    border-radius: 3px;
    box-shadow: 0 0 5px 0 ${colors['black-50']};
  }

  .popup-title, .popup-year {
    display: block;
    text-align: center;
  }

  .popup-title {
    font-size: 24px;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 10px;
  }

  .popup-year {
    font-size: 16px;
  }

  .popup-description {
    font-size: 14px;
    margin-bottom: 0;
  }
`
export default MovieStyled
