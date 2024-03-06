import { Container, Social, TextFooter } from './styles'

import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'
import instagram from '../../assets/images/instagram.png'

const Footer = () => (
  <>
    <Container>
      <div>
        <img src={logo} alt="EFOOD" />
      </div>
      <Social>
        <img src={instagram} alt="intagram" />
        <img src={facebook} alt="facebook" />
        <img src={twitter} alt="twitter" />
      </Social>
      <TextFooter>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </TextFooter>
    </Container>
  </>
)

export default Footer
