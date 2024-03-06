import LaDolce from '../../models/laDolce'

import { Container, List } from '../LaDolceList/styles'
import LaDolceProducts from '../LaDolceProducts'

export type Props = {
  title: string
  background: 'branco' | 'salmao'
  LaDolce: LaDolce[]
}

const LaDolceList = ({ background, LaDolce }: Props) => (
  <Container background={background}>
    <div className="container">
      <List>
        {LaDolce.map((LaDolce) => (
          <LaDolceProducts
            key={LaDolce.id}
            description={LaDolce.description}
            image={LaDolce.image}
            title={LaDolce.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default LaDolceList
