import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#FFF',
  salmao: '#E66767',
  amareloClaro: '#FFEBD9',
  amarelo: '#FFB930',
  cinza: '#EEEEEE'
}

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}
`
