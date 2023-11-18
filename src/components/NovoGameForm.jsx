import { useState } from 'react'
import PropTypes from 'prop-types'
import InputTexto from './components/InputTexto'

NovoGameForm.propTypes = {
    addGame: PropTypes.func
}

export default function NovoGameForm({ addGame }) {

    const [titulo, setTitulo] = useState('')
    const [capa, setCapa] = useState('')

    // Evita da página atualizar quando for
    // clicado no botão 'Adicionar à biblioteca'
    const attSubmit = (ev) => {
        ev.preventDefault()
        addGame({ titulo, capa })
        setTitulo('')
        setCapa('')
    }

    return (
        <form onSubmit={attSubmit}>
            <InputTexto id='titulo' label='Nome do Jogo:' value={titulo} setValue={setTitulo} />
            <InputTexto id='capa' label='Link da Capa:' value={capa} setValue={setCapa}/>
            <button type="submit">Adicionar à biblioteca</button>
        </form>
    )
}