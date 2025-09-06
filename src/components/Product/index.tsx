import Tag from '../Tag'
import { Card, Description, Title } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" />
    <Title>Nome do jogo</Title>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Description>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis
      fuga, distinctio corrupti nesciunt inventore placeat voluptatibus
      provident ex explicabo rem quam? Totam, expedita at? Ducimus qui
      voluptates dolores recusandae.
    </Description>
  </Card>
)

export default Product
