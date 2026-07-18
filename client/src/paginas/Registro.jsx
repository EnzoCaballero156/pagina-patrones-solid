import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../imagenes/Logo.png"

import Input from "../componentes/Input";
import Button from "../componentes/Button";
import httpClient from "../httpClient";
import Tarjeta from "../componentes/Tarjeta";

import "../css/Auth.css";

const Registro = () => {
    const navigate = useNavigate()

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const autenticar = async (e) => {
        e.preventDefault();
        try {
            await httpClient.post('/api/auth/register', { nombre, apellido, telefono, email, password })
            window.location.href = '/personalizar'
        } catch (error) {
            alert("Credenciales incorrectas.")
        }
    }

    return (
        <div className="auth-page">
            <Tarjeta logo={true} titulo="Regístrate" texto="¿Ya tienes una cuenta? " linkTexto="Inicia sesión"
            linkRuta="/">
                <form onSubmit={autenticar}>
                    <Input label="Nombre" type="text" value={nombre} onChange={e => setNombre(e.target.value)} required/>
                    <Input label="Apellido" type="text" value={apellido} onChange={e => setApellido(e.target.value)} required/>
                    <Input label="Teléfono" type="text" value={telefono} onChange={e => setTelefono(e.target.value)} required/>
                    <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    <Input label="Contraseña" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div className="auth-button">
                        <Button text="Regístrase" />
                    </div>
                </form>
            </Tarjeta>
        </div>
    );
}

export default Registro;