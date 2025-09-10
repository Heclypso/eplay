import spiderman from '../../assets/images/banner-homem-aranha.png'
import hogwards from '../../assets/images/fundo_hogwarts.png'

import zoom from '../../assets/images/zoom.png'
import play from '../../assets/images/play.png'
import close from '../../assets/images/close.png'

import Section from '../Section'
import { Action, Item, Items, Modal, ModalContent } from './styles'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

type Props = {
  defaultCover: string
  name: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: hogwards
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/uHGShqcAHlQ?si=VnSBIbTIhzNxfR6j'
  }
]

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url

    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom

    return play
  }
  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name}`}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximar a mídia"
                />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={close} alt="Ícone de fechar" />
          </header>
          <img src={spiderman} />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}
export default Gallery
