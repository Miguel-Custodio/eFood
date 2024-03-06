import Tag from '../Tag'
import estrela from '../../assets/images/estrela.png'

import { Card, Descricao, Infos, Notas, Titulo } from './styles'
import { Link } from 'react-router-dom'

type Props = {
  title: string
  category: string
  description: string
  infos: string[]
  image: string
  nota: number
}

const FoodProducts = ({
  title,
  category,
  description,
  infos,
  image,
  nota
}: Props) => (
  <Card>
    <img src={image} alt={title} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <Titulo>
      {title}
      <Notas>
        {nota}
        <img src={estrela} alt="estrela" />
      </Notas>
    </Titulo>
    <Descricao>{description}</Descricao>
    <Link to="/perfil">
      <Tag>{category}</Tag>
    </Link>
  </Card>
)

export default FoodProducts
