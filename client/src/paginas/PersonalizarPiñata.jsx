import { useState } from "react";

import "../css/PersonalizarPiñata.css";

import { TamañoPequeño } from "../servicios/tamaños/TamañoPequeño";
import { TamañoMediano } from "../servicios/tamaños/TamañoMediano";
import { TamañoGrande } from "../servicios/tamaños/TamañoGrande";

import MensajePedido from "../componentes/MensajePedido";
import Button from "../componentes/Button";
import Input from "../componentes/Input";
import Select from "../componentes/Select";

import PrecioService from "../servicios/PrecioService";
import httpClient from "../httpClient";
import Navbar from "../componentes/Navbar";
import Tarjeta from "../componentes/Tarjeta";

const PersonalizarPiñata = () => {
    const [tema, setTema] = useState("")
    const [tamaño, setTamaño] = useState("Pequeña")
    const [fechaEntrega, setFechaEntrega] = useState("")
    const [direccion, setDireccion] = useState("")
    const [contacto, setContacto] = useState("")
    const [especificaciones, setEspecificaciones] = useState("")
    const [relleno, setRelleno] = useState(false)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [mensaje, setMensaje] = useState(false)

    let estrategiaTamaño;

    switch (tamaño) {
        case "Pequeña": estrategiaTamaño = new TamañoPequeño(); break;
        case "Mediana": estrategiaTamaño = new TamañoMediano(); break;
        case "Grande": estrategiaTamaño = new TamañoGrande(); break;
    }

    const detallePrecio = PrecioService.calcularPrecio(estrategiaTamaño, relleno, fechaEntrega)

    const realizarPedido = async () => {
        try {
            if (tema && tamaño && fechaEntrega && direccion && contacto && especificaciones && relleno) {
                const total = detallePrecio.total
                await httpClient.post(`/api/pedidos/realizar-pedido`, {
                    tema,
                    tamaño,
                    fechaEntrega,
                    direccion,
                    contacto,
                    especificaciones,
                    relleno,
                    precioTotal: total
                })
                setMensaje(true)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="pagina-personalizar">
            <Navbar />
            <div className="form-container">
                <Tarjeta titulo="Personalizar Piñata" amplia>
                    <Input label="Tema" type="text" value={tema} onChange={e => setTema(e.target.value)} />
                    <Select label="Tamaño" opciones={["Pequeña","Mediana","Grande"]} value={tamaño} onChange={e => setTamaño(e.target.value)} />
                    <Input label="Fecha de entrega" type="date" value={fechaEntrega} onChange={e => setFechaEntrega(e.target.value)} />
                    <Input label="Dirección de envío" type="text" value={direccion} onChange={e => setDireccion(e.target.value)} />
                    <Input label="Contacto" type="text" value={contacto} onChange={e => setContacto(e.target.value)} />
                    <Input label="Especificaciones" type="text" value={especificaciones} onChange={e => setEspecificaciones(e.target.value)} />
                    <Input label="Relleno" type="checkbox" checked={relleno} onChange={e => setRelleno(e.target.checked)} />
                </Tarjeta>
                <Tarjeta titulo="Resumen del Pedido">
                    <p>Precio base: S/{detallePrecio.precioBase}</p>
                    <p>Costo tamaño: S/{detallePrecio.precioTamaño}</p>
                    <p>Costo entrega: S/{detallePrecio.precioEntrega}</p>
                    <p>Costo relleno: S/{detallePrecio.precioRelleno}</p>
                    <p>Precio total: S/{detallePrecio.total}</p>
                    <Button text="Realizar pedido" onClick={realizarPedido}/>
                </Tarjeta>
            </div>
            <MensajePedido mostrar={mensaje} cerrar={() => setMensaje(false)} />
        </div>
    );
}

export default PersonalizarPiñata;