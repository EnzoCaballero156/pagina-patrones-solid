import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import httpClient from "../httpClient";

const Registro = () => {
    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const autenticar = async () => {
        try {
            await httpClient.post('//localhost:5000/api/auth/register', { nombre, apellido, telefono, email, password })
            window.location.href = '/personalizar'
        } catch (error) {
            alert("Credenciales incorrectas.")
        }
    }

    return (
        <div>
            <form action={autenticar}>
                <h2>Registro</h2>
                <Input label="Nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} required/>
                <Input label="Apellido" type="text" value={apellido} onChange={e => setApellido(e.target.value)} required/>
                <Input label="Teléfono" type="text" value={telefono} onChange={e => setTelefono(e.target.value)} required/>
                <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <Input label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                
                <Button text="Ingresar"/>
            </form>
            <Link to="/">Volver al login</Link>
        </div>
    );
}

export default Registro;