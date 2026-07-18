import "../css/Input.css";
const Input = ({ label, type, value, checked, onChange, required = false }) => {
    return (
        <div>
            <label className="input-label">{label}</label>
            <input className="input-field" type={type} value={value} checked={checked} onChange={onChange} required={required}/>
        </div>
    )
}
export default Input;