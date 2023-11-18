import Game from './components/Game'
import NovoGameForm from './components/NovoGameForm'
import colecaoGames from './hooks/colecaoGames'

export default function App() {
  const { games, addGame, removerGame } = colecaoGames()

  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>

      <NovoGameForm addGame={addGame} />

      <div className='games'>
        {games.length > 0 ? games.map((game) => (
          <Game 
            key={game.id}
            titulo={game.titulo}
            capa={game.capa}
            remover={() => removerGame(game.id)}
          />))
          : (
            <h2 style={{ margin: '4rem auto' }}>Parece que ainda não há jogos. Tente adicionar algum jogo.</h2>
          )}
      </div>
    </div>
  )
}