import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.amareloClaro};
  max-width: 1366px;
  height: 298px;
  width: 100%;
`
export const Foot = styled.div`
  width: 1024px;
  height: 298px;
  margin: auto 171px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Logo = styled.div`
  width: 125px;
  height: 58px;
  margin-left: 450px;
  margin-top: 40px;
`
export const Social = styled.div`
  width: 88px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 32px;
`
export const TextFooter = styled.h3`
  color: ${cores.salmao};
  width: 49it0px;
  height: 24px;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  text-align: center;
  margin-top: 90px;
`
