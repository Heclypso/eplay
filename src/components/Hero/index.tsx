import { Game } from '../../Pages/Home/Index'
import Button from '../Button'
import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { formatPrice } from '../ProductsList'
import { useDispatch } from 'react-redux'

type Props = {
  game: Game
}

import { add, open } from '../../store/reducers/cart'

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }

  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>
          <p>
            {game.prices?.discount && (
              <span>De {formatPrice(game.prices?.old)}</span>
            )}
            {game.prices?.current && (
              <>por {formatPrice(game.prices?.current)}</>
            )}
          </p>
          {game.prices?.current && (
            <Button
              onClick={addToCart}
              type="button"
              title="Clique aqui para adicionar esse jogo ao carrinho"
              $variant="primary"
            >
              Adicionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
