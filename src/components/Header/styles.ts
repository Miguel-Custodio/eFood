import styled from 'styled-components'
import { cores } from '../../styles'
import vetor from '../../assets/images/Vector.png'

export const ContainerHeader = styled.header`
  background-color: ${cores.amareloClaro};
  background-image: url(${vetor});
  max-width: 1366px;
  height: 348px;
`

export const TextHeader = styled.div`
  color: ${cores.branca};
  width: 539px;
  height: 84px;
  margin-top: 132px;
  margin-left: 414px;
  text-align: center;

  h1 {
    color: ${cores.salmao};
  }
`
export const LinkCart = styled.a`
  display: flex;
  align-items: center;
`
export const Links = styled.div`
  color: ${cores.salmao};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  margin: auto 168px;

  a {
    color: ${cores.salmao};
    font-weight: bold;
    text-decoration: none;
  }
`
