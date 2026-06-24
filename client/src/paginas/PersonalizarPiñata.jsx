import { useState } from "react";

import { TamañoPequeño } from "../servicios/tamaños/TamañoPequeño";
import { TamañoMediano } from "../servicios/tamaños/TamañoMediano";
import { TamañoGrande } from "../servicios/tamaños/TamañoGrande";

import ResumenPedido from "../componentes/ResumenPedido";
import Button from "../componentes/Button";
import Input from "../componentes/Input";
import Select from "../componentes/Select";

import PrecioService from "../servicios/PrecioService";
import httpClient from "../httpClient";

const PersonalizarPiñata = () => {
    const [tema, setTema] = useState("")
    const [tamaño, setTamaño] = useState("Pequeña")
    const [fechaEntrega, setFechaEntrega] = useState("")
    const [especificaciones, setEspecificaciones] = useState("")
    const [relleno, setRelleno] = useState(false)
    const [precioTotal, setPrecioTotal] = useState(0)

    let estrategiaTamaño;

    switch (tamaño) {
        case "Pequeña": estrategiaTamaño = new TamañoPequeño(); break;
        case "Mediana": estrategiaTamaño = new TamañoPequeño(); break;
        case "Grande": estrategiaTamaño = new TamañoGrande(); break;
    }

    const detallePrecio = PrecioService.calcularPrecio(estrategiaTamaño, relleno, fechaEntrega)

    const realizarPedido = async () => {
        try {
            const total = detallePrecio.total
            await httpClient.post(`//localhost:5000/api/pedidos/realizar-pedido`, { 
                tema, 
                tamaño, 
                fechaEntrega, 
                especificaciones,
                relleno,
                precioTotal: total
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <form action={realizarPedido}>
                <h3>Personalizar Piñata</h3>
                <Input label="Tema" type="text" value={tema} onChange={e => setTema(e.target.value)} required/>
                <Select label="Tamaño" opciones={["Pequeña", "Mediana", "Grande"]} value={tamaño} onChange={e => setTamaño(e.target.value)} required></Select>
                <Input label="Fecha de entrega" type="date" value={fechaEntrega} onChange={e => setFechaEntrega(e.target.value)} required/>
                <Input label="Especificaciones" type="text" value={especificaciones} onChange={e => setEspecificaciones(e.target.value)} required/>
                <Input label="Relleno" type="checkbox" checked={relleno} onChange={e => setRelleno(e.target.checked)} />
                <ResumenPedido
                    tamaño={tamaño}
                    fechaEntrega={fechaEntrega}
                    relleno={relleno}
                    detallePrecio={detallePrecio}
                >
                    <Button text="Realizar pedido" onClick={realizarPedido}/>
                </ResumenPedido>
            </form>
        </div>    
    );
}

export default PersonalizarPiñata;