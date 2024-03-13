import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import { ContainerHeader, TextHeader, Links, ImageWrapper } from './styles'

const Header = () => {
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  return (
    <>
      <ContainerHeader>
        <Links isHomePage={isHomePage}>
          <h3>Restaurantes</h3>
          <ImageWrapper>
            <Link to="/">
              <img src={logo} alt="EFOOD" />
            </Link>
          </ImageWrapper>
          <Link to="/">0 - produto(s) no carrinho</Link>
        </Links>
        <TextHeader>
          Viva experiências gastronômicas no conforto da sua casa
        </TextHeader>
      </ContainerHeader>
    </>
  )
}

export default Header
