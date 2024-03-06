import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { ContainerHeader, TextHeader, LinkCart, Links } from './styles'

const Header = () => (
  <>
    <ContainerHeader>
      <Links>
        <h3>Restaurantes</h3>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <LinkCart href="#">0 - produto(s) no carrinho</LinkCart>
      </Links>
      <TextHeader>
        <h1>Viva experiências gastrônomicas no conforto da sua casa</h1>
      </TextHeader>
    </ContainerHeader>
  </>
)

const Header2 = () => (
  <>
    <ContainerHeader>
      <Links>
        <h3></h3>
        <Link to="/">
          <img src={logo} alt="EFOOD" />
        </Link>
        <LinkCart href="#"></LinkCart>
      </Links>
      <TextHeader>
        <h1>Viva experiências gastrônomicas no conforto da sua casa</h1>
      </TextHeader>
    </ContainerHeader>
  </>
)

export { Header, Header2 }
