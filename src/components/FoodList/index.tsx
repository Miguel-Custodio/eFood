import Food from '../../models/food'
import FoodProducts from '../FoodProducts'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'branco' | 'salmao'
  food: Food[]
}

const FoodList = ({ background, food }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {food.map((food) => (
          <FoodProducts
            key={food.id}
            category={food.category}
            description={food.description}
            image={food.image}
            infos={food.infos}
            title={food.title}
            nota={food.nota}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default FoodList
