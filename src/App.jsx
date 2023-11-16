import { useState} from 'react'

export default function App() {

  const [games, setGames] = useState(() => {
    const storedGames = localStorage.getItem('obc-game-lib')
    if (!storedGames) return []
    return JSON.parse(storedGames)
  })
  const [titulo, setTitulo] = useState('')
  const [capa, setCapa] = useState('')
  
  // Gera um id para cada jogo então 1 e 1 milhão
  const addGame = ({ titulo, capa }) => {
    const id = Math.floor(Math.random() * 1000000)
    const game = { id, titulo, capa }

    // Salva no localstorage quando a página é atualizada
    setGames(state => {
      const novoState = [...state, game]
      localStorage.setItem('obc-game-lib', JSON.stringify(novoState))
      return novoState
    })
  }

  // Remove o jogo da lista
  const removerGame = (id) => {
    setGames(state => {
      const novoState = state.filter(game => game.id !== id)
      localStorage.setItem('obc-game-lib', JSON.stringify(novoState))
      return novoState
    })
  }

  // Evita da página atualizar quando for
  // clicado no botão 'Adicionar à biblioteca'
  const attSubmit = (ev) => {
    ev.preventDefault()
    addGame({ titulo, capa })
    setTitulo('')
    setCapa('')
  }


  return (
    <div className="app">
      <h1>Biblioteca de Jogos</h1>

      <form onSubmit={attSubmit}>
        <div>
          <label htmlFor="titulo">Título do Jogo:</label>
          <input 
            type="text"
            name="titulo"
            id="titulo"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="capa">Link da Capa:</label>
          <input 
            type="text"
            name="capa"
            id="capa"
            value={capa}
            onChange={(e) => setCapa(e.target.value)}
          />
        </div>

        <button type="submit">Adicionar à biblioteca</button>
      </form>

      <div className='games'>
        {games.map((game) => (
          <div key={game.id}>
            <img src={game.capa} alt="" />
            <div>
              <h2>{game.titulo}</h2>
              <button onClick={() => removerGame(game.id)}>Remover</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}