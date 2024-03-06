import Button from '../Button'
import { Card, Descricao, Titulo } from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const LaDolceProducts = ({ title, description, image }: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Titulo>{title}</Titulo>
    <Descricao>{description}</Descricao>
    <Button type={'button'} title={'Adicionar ao carrinho'}>
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default LaDolceProducts
