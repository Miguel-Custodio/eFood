import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'
import { Card } from '../FoodProducts/styles'

export const Container = styled.section<Omit<Props, 'title' | 'food'>>`
  padding: 32px 0;
  background-color: ${(props) =>
    props.background === 'branco' ? cores.branca : cores.salmao};

  ${Card} {
    background-color: ${(props) =>
      props.background === 'salmao' ? cores.salmao : cores.branca};
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 36px;
  margin: 40px 171px;
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
