import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;
  border: 1px solid;
  margin-bottom: 32px;
  width: 472px;
  color: ${cores.salmao};

  ${TagContainer} {
    margin-right: 8px;
  }

  img {
    width: 472px;
    height: 181px;
    max-width: 100%;
  }
`
export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 16px;
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  img {
    width: 21px;
    height: 21px;
  }
`
export const Descricao = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
`
export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`
export const Notas = styled.span`
  width: 55px;
  height: 21px;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
`
