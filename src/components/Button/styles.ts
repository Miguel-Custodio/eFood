import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { cores } from '../../styles'

export const ButtonContainer = styled.button`
  width: 304px;
  height: 24px;
  border: 1px solid ${cores.amareloClaro};
  color: ${cores.salmao};
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  margin-left: 8px;
  margin-bottom: 8px;
`
export const ButtonLink = styled(Link)`
  background-color: ${cores.amareloClaro};
  font-size: 14px;
  width: 82px;
  height: 24px;
`
