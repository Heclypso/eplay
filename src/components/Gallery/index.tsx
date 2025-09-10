import banner from '../../assets/images/banner-homem-aranha.png'
import Section from '../Section'
import { Item, Items } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <Items>
      <Item>
        <img src={banner} alt="" />
      </Item>
      <Item>
        <img src={banner} alt="" />
      </Item>
      <Item>
        <img src={banner} alt="" />
      </Item>
      <Item>
        <img src={banner} alt="" />
      </Item>
    </Items>
  </Section>
)

export default Gallery
