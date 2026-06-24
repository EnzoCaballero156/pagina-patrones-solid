import { Link, useNavigate } from "react-router-dom";

import Button from "../componentes/Button";
import Input from "../componentes/Input";
import { useState } from "react";
import httpClient from "../httpClient";

const Login = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const autenticar = async () => {
        try {
            await httpClient.post('//localhost:5000/api/auth/login', { email, password })
            window.location.href = '/personalizar'
        } catch (error) {
            alert("Credenciales incorrectas.")
        }
    }

    return (
        <div>
            <form action={autenticar}>
                <h2>Iniciar Sesión</h2>
                <Input label="Email" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                <Input label="Contraseña" type="password" value={password} onChange={e => setPassword(e.target.value)} required/>
                
                <Button text="Ingresar"/>

                <p>¿No tienes cuenta?</p>
                <Link to="/registro">Registrarse</Link>
            </form>
        </div>
    )
}

export default Login;