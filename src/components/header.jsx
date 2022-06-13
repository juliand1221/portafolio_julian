import "../styles/header.css"
import logo from "../media/icon.png"


const Header=() =>{
    return(
        <header className="header">
            <div className="container logo-nav-container">
                <div className="logo">
                    
                    <img className="circular-square" src={logo}/>
                
                </div>
                <span className="menu-icon">MENU</span>
                <nav className="navigation">
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Acerca</a></li>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Contacto</a></li>
                    </ul>  
                </nav>
            </div>
        </header>
    );
};

export default Header;