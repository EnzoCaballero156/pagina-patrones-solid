const Select = ({ label, opciones, value, onChange, disabled = false }) => {
    return (
        <div>
            <label>{label}</label>
            <select value={value} onChange={onChange} className='input' disabled={disabled}>
                {opciones.map(opcion =>
                    <option key={opcion} value={opcion}>
                        {opcion}
                    </option>
                )}
            </select>
        </div>
    )
}

export default Select