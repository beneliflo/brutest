import styled from 'styled-components'
import { colors } from '../../layouts/theme'

const SearchStyled = styled.div`

  .search-bar {
    position: relative;
  }

  .search-logo {
    position: absolute;
    width: 0px;
    margin: 0 auto;
    top: 14px;
    left: 10px;
    z-index: 99;

    .search-circle {
      width: 15px;
      height: 15px;
      border: 2px solid white;
      border-radius: 15px;
      position: absolute;
    }

    .search-rect {
      position: absolute;
      right: -21px;
      top: 16px;
      width: 12px;
      -webkit-transform: rotate(50deg);
      -ms-transform: rotate(50deg);
      transform: rotate(50deg);
      border: 1px solid white;
      border-top-right-radius: 12px;
      border-bottom-right-radius: 12px;
    }
  }

  input {
    width: 100%;
    background-color: ${colors['black-80']};
    border: 0;
    margin: 0;
    padding: 10px 0 10px 40px;
    border-radius: 3px;
    color: white;
    outline: none;

    ::placeholder {
      color: white;
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: white;
    }

    ::-ms-input-placeholder {
      color: white;
    }

    &:focus {
      ::placeholder {
        color: ${colors['white-56']};
        opacity: .56;
        transition: opacity .5s;
      }

      :-ms-input-placeholder {
        color: ${colors['white-56']};
      }

      ::-ms-input-placeholder {
        color: ${colors['white-56']};
      }
    }
  }
`
export default SearchStyled
