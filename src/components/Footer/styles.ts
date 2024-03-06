import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.amareloClaro};
  max-width: 1366px;
  height: 298px;
  width: 100%;

  img {
    margin-top: 40px;
    margin-left: 621px;
  }
`
export const Logo = styled.div`
  width: 125px;
  height: 58px;
  margin-left: 621px;
  margin-top: 40px;
`
export const Social = styled.div`
  display: flex;
  align-items: center;
  width: 88px;
  margin-left: 621px;

  img {
    margin-top: 48px;
    margin-bottom: 72px;
    margin-left: 12px;
  }
`
export const TextFooter = styled.h3`
  color: ${cores.salmao};
  width: 480px;
  heigth: 24px;
  margin-left: 444px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  text-align: center;
`
