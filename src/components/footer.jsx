import facebook from "../media/redes/facebook.png"
import twitter from "../media/redes/gorjeo.png"
import instagram from "../media/redes/instagram.png"
import linkedin from "../media/redes/linkedin.png"
import github from "../media/redes/github.png"
import ubicacion from "../media/tu-ubicacion.png"
import whatsapp from "../media/redes/whatsapp.png"
import correo from "../media/mail.png"

const Footer =() =>{
    return(
        <footer class="footer">

            <div class="container-footer-all">

                 <div class="container-footer">
                    <div class="column1">
                        <h1>Mas información</h1>
                        <p>HOLA</p>
                    </div>
                    <div class="column2">
                        <h1>Redes sociales</h1>
                        <div class="row">
                            <img src={facebook}/>
                            <label>Facebook</label>
                        </div>
                        <div class="row">
                            <img src={twitter} />
                            <label>Twitter</label>
                        </div>
                        <div class="row">
                            <img src={instagram} />
                            <label>Instagram </label>
                        </div>
                        <div class="row">
                            <img src={linkedin} />
                            <label>Linkedin </label>
                        </div>
                        <div class="row">
                            <img src={github} />
                            <label>Github</label>
                        </div>
                    </div>
                    <div class="column3">
                        <h1>Información contacto</h1>
                        <div class="row2">
                            <img src={ubicacion}  />
                            <label>
                                Barcelona,
                                España
                            </label>
                        </div>
                        <div class="row2">
                            <img src={whatsapp} />
                            <label>
                                +64 (649)-899927
                                +57 (321)-7219328
                            </label>
                        </div>
                        <div class="row2">
                            <img src={correo} />
                            <label>
                                Judt1221@hotmail.com
                            </label>
                        </div>
                    </div>
                </div>

            </div>

    <div class="container-footer2">
            <div class="copyright">
                © 2022 Todos los derechos reservados |
            </div>
        </div>
    
  </footer>
    );
};

export default Footer;