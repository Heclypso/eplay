import { Image, Price, Title } from './styles'

import Tag from '../Tag'
import Button from '../Button'

import { formatPrice } from '../../components/ProductsList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>Carregando...</h3>
  }

  return (
    <Image style={{ backgroundImage: `url(${game?.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaque do dia</Tag>
        <div>
          <Title>{game.name}</Title>
          <Price>
            De <span>{formatPrice(game.prices?.old)}</span> <br />
            por apenas {formatPrice(game.prices?.current)}
          </Price>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta"
        >
          Aproveitar
        </Button>
      </div>
    </Image>
  )
}

export default Banner
