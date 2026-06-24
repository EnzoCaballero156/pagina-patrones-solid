const Input = ({ label, type, value, checked, onChange, required = false }) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} checked={checked} onChange={onChange} required={required}/>
        </div>
    )
}

export default Input;