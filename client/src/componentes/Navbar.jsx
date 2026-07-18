import "../css/Navbar.css";
import Logo from "../imagenes/Logo.png"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo"/>
      </div>
      <div className="navbar-redes">
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="icono"/>
        </a>
        <a href="https://wa.me/51999999999" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="icono"/>
        </a>
      </div>
    </nav>
  );
}
export default Navbar;