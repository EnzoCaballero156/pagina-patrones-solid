import "../css/MensajePedido.css";

const MensajePedido = ({ mostrar, cerrar }) => {
    if (!mostrar) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-container">
                <h2 className="modal-title">Mensaje</h2>
                <hr className="modal-line"/>
                <p className="modal-text">Pedido realizado correctamente.</p>
                <button className="modal-button" onClick={cerrar}>OK</button>
            </div>
        </div>
    );

}

export default MensajePedido;