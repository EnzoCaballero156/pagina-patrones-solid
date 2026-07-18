import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Logo from "../imagenes/Logo.png";

import Button from "../componentes/Button";
import Input from "../componentes/Input";
import httpClient from "../httpClient";

import "../css/Auth.css";
import Tarjeta from "../componentes/Tarjeta";

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const autenticar = async (e) => {
        e.preventDefault();
        try {
            await httpClient.post("/api/auth/login", {
                email,
                password,
            });
            window.location.href = "/personalizar";
        } catch (error) {
            alert("Credenciales incorrectas.");
        }
    };

    return (
        <div className="auth-page">
            <Tarjeta logo={true} titulo="Iniciar sesión" texto="¿No te has registrado aún? " linkTexto="Únete ahora"
            linkRuta="/registro">
                <form onSubmit={autenticar}>
                    <Input
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <Input
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <div className="auth-button">
                        <Button text="Ingresar" />
                    </div>
                </form>
            </Tarjeta>
        </div>
    );
};

export default Login;