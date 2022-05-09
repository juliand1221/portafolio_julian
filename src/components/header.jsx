import
const Header=() =>{
    return(
        <header className="header">
            <div className="container logo-nav-container">
                <a className="logo">
                    <img className="circular-square" src="./media/icon.png"/>
                </a>
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