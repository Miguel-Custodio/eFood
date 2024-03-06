import { Imagem, Titulo, Italic, TituloItalic } from './styles'

import bannerImg from '../../assets/images/Banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <TituloItalic>
        <Italic>Italiana</Italic>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </TituloItalic>
    </div>
  </Imagem>
)

export default Banner
