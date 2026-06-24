const ResumenPedido = ({ tamaño, fechaEntrega, relleno, detallePrecio, children }) => {
    return(
        <div>
            <h3>Resumen del Pedido</h3>
            <p>Precio base: S/{detallePrecio.precioBase}</p>
            <p>Costo tamaño: S/{detallePrecio.precioTamaño}</p>
            <p>Costo entrega: S/{detallePrecio.precioEntrega}</p>
            <p>Costo relleno: S/{detallePrecio.precioRelleno}</p>
            <p>Precio total: S/{detallePrecio.total}</p>
            {children}
        </div>
    )
}

export default ResumenPedido;