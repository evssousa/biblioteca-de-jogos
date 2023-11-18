import PropTypes from 'prop-types'

Game.propTypes = {
    titulo: PropTypes.string,
    capa: PropTypes.string,
    remover: PropTypes.func
}

export default function Game({ titulo, capa, remover }) {
    return (
        <div key={game.id}>
            <img src={capa} alt="" />
            <div>
                <h2>{titulo}</h2>
                <button onClick={remover}>Remover</button>
            </div>
        </div>
    )
}