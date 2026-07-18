import { Link } from 'react-router-dom';
import '../css/Tarjeta.css'
import Logo from '../imagenes/Logo.png'

const Tarjeta = ({ logo = false, amplia = false, id, titulo, texto, linkTexto, linkRuta, children }) => {
  return (
    <div id={id} className={`tarjeta-container ${amplia ? 'amplia' : ''}`}>
      {logo && (
        <div className="tarjeta-logo">
          <img src={Logo} alt="Logo"/>
        </div>
      )}

      <div className="tarjeta-formulario">
        <h2>{titulo}</h2>
        <hr/>
        <p>{texto}<Link to={linkRuta}>{linkTexto}</Link></p>
        {children}
      </div>
    </div>
  );
}

export default Tarjeta;