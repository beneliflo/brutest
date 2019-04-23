import styled from 'styled-components'
// import { colors } from '../../layouts/theme'

const MoviesStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-arround;
  margin-top: 78px;

  @media only screen and (min-width: 600px) {
    justify-content: space-between;
  }
`
export default MoviesStyled
