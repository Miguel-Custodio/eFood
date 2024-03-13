import { Imagem, Titulo, Italic, TituloItalic } from './styles'

import bannerImg from '../../assets/images/Banner.png'

const Banner = () => (
  <>
    <div className="container">
      <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
        <TituloItalic>
          <Italic>Italiana</Italic>
          <Titulo>La Dolce Vita Trattoria</Titulo>
        </TituloItalic>
      </Imagem>
    </div>
  </>
)

export default Banner
