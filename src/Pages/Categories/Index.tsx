import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

import { Game } from '../Home/Index'

const Categorys = () => {
  const [gamesAction, setGamesAction] = useState<Game[]>([])
  const [gamesSports, setGamesSports] = useState<Game[]>([])
  const [gamesSimulator, setGamesSimulator] = useState<Game[]>([])
  const [gamesFight, setGamesFight] = useState<Game[]>([])
  const [gamesRPG, setGamesRPG] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fakeapi-cyan.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAction(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesSports(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulator(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesFight(res))

    fetch('https://fakeapi-cyan.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRPG(res))
  }, [])

  return (
    <>
      <ProductsList games={gamesAction} title="Ação" background="black" />
      <ProductsList games={gamesSports} title="Esportes" background="gray" />
      <ProductsList
        games={gamesSimulator}
        title="Simuação"
        background="black"
      />
      <ProductsList games={gamesFight} title="Luta" background="gray" />
      <ProductsList games={gamesRPG} title="RPG" background="black" />
    </>
  )
}

export default Categorys
