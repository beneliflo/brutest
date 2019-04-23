import styled from 'styled-components'
import { colors } from '../../layouts/theme'

const TopStyled = styled.div`

  .title-list {
    font-size: 12px;
    text-transform: uppercase;
    color: ${colors['white-56']};
    margin: 30px 0;
  }

  .content-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media only screen and (min-width: 600px) {
      justify-content: space-between;
    }
  }
`
export default TopStyled
