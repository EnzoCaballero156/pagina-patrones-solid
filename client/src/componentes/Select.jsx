import "../css/Select.css";
const Select = ({ label, opciones, value, onChange, disabled = false }) => {
    return (
        <div className="select-group">
            <label className="select-label">{label}</label>
            <select value={value} onChange={onChange} className='select-input' disabled={disabled}>
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