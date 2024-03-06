import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.div`
  background-color: ${cores.salmao};
  position: relative;
  border: 1px solid;
  margin-bottom: 32px;
  width: 320px;
  height: 360px;
  color: ${cores.amareloClaro};

  img {
    width: 304px;
    height: 167px;
    margin-left: 8px;
    margin-top: 8px;
  }
`
export const Titulo = styled.h3`
  color: ${cores.amareloClaro}
  font-weight: bold;
  font-size: 16px;
  padding: 8px;
`
export const Descricao = styled.p`
  color: ${cores.amareloClaro}
  font-size: 12px;
  line-height: 22px;
  display: block;
  padding: 8px;
`
