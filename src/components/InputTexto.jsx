import PropTypes from 'prop-types'

InputTexto.propType = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func
}

export default function InputTexto({ id, label, value, setValue }) {
    return (
        <div>
            <label htmlFor={id}>{label}</label>
            <input
                type="text"
                name={id}
                id={id}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>

    )
}