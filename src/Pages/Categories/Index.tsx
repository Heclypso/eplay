import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery
} from '../../services/api'

const Categorys = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: sportGames } = useGetSportsGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()

  if (actionGames && sportGames && simulationGames && fightGames && rpgGames) {
    return (
      <>
        <ProductsList games={actionGames} title="Ação" background="black" />
        <ProductsList games={sportGames} title="Esportes" background="gray" />
        <ProductsList
          games={simulationGames}
          title="Simuação"
          background="black"
        />
        <ProductsList games={fightGames} title="Luta" background="gray" />
        <ProductsList games={rpgGames} title="RPG" background="black" />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categorys
