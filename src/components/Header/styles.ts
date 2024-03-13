import styled from 'styled-components'
import { cores } from '../../styles'
import vetor from '../../assets/images/Vector.png'

export const ContainerHeader = styled.header`
  background-color: ${cores.amareloClaro};
  background-image: url(${vetor});
  max-width: 100%;
  height: 348px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TextHeader = styled.div`
  width: 539px;
  margin-top: 110px;
  margin-right: 80px;
  color: ${cores.salmao};
  text-align: center;
  font-size: 36px;
  font-weight: bold;
`

export const Links = styled.div<{ isHomePage: boolean }>`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${cores.salmao};

  h3,
  a {
    text-decoration: none;
    color: ${cores.salmao};
    font-weight: bold;
    z-index: ${({ isHomePage }) => (isHomePage ? -1 : 1)};
  }
`
export const ImageWrapper = styled.div`
  z-index: 1;
`
