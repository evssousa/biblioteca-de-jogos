import { useState} from 'react'

export default function colecaoGames() {
    const [games, setGames] = useState(() => {
        const storedGames = localStorage.getItem('obc-game-lib')
        if (!storedGames) return []
        return JSON.parse(storedGames)
    })

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

    return { games, addGame, removerGame }
}