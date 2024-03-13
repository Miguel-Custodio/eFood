import styled from 'styled-components'
import { cores } from '../../styles'

export const Imagem = styled.div`
  width: 100%;
  height: 280px;
  margin-top: -162px;
  display: block;
  background-size: cover;
  color: ${cores.branca};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    height: 200px;
    margin-top: -100px;
  }
`

export const TituloItalic = styled.div`
  margin-left: 168px;
  padding-top: 40px;

  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
    padding-top: 20px;
  }
`

export const Titulo = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-top: 120px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-top: 80px;
`

export const Italic = styled.h2`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 100;
  line-height: 37.5px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`
