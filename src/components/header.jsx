import "../styles/header.css"
import logo from "../media/icon.png"
import {Link} from "react-router-dom"


const Header=() =>{
    return(
        <header className="header">
            <div className="container logo-nav-container">
                <div className="logo">
                    <Link to="/">
                    <img className="circular-square" src={logo}/>
                    </Link>
                </div>
                <span className="menu-icon">MENU</span>
                <nav className="navigation">
                    <ul>
                        <li>
                            <Link to="/">
                            Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="about">
                            Acerca
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                            Servicios
                            </Link></li>
                        <li>
                            <Link to="#">
                            Contacto
                            </Link></li>
                    </ul>  
                </nav>
            </div>
        </header>
    );
};

export default Header;