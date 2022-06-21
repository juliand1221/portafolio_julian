
import "../styles/footer_2.css"
import facebook from "../media/redes/facebook.png"
import twitter from "../media/redes/gorjeo.png"
import instagram from "../media/redes/instagram.png"
import linkedin from "../media/redes/linkedin.png"
import github from "../media/redes/github.png"

const Footer_2 =() =>{
    return(
        <footer className="footer_2">
            <div className="footer_content">
                <h3>Junior Developer</h3>
                <p>I am Julian David Tenorio, I am a junior developer. </p>
                <p>My experience is based in web designe, HTML, CSS, JavaScript, React, Node.js. </p>
                <p> Follow me in my social media.</p>
                <ul className="socials">
                    <li>
                        <a href="https://www.facebook.com/julian.tenorio1/" target="_blank">
                            <img src={facebook} />
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/juliantenorio" target="_blank">
                            <img src={twitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/julian.tenorio1/" target="_blank">
                            <img src={instagram} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/julian-david-tenorio-yotengo-726674104" target="_blank">
                            <img src={linkedin} />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/juliand1221" target="_blank">
                            <img src={github} />
                        </a>
                    </li>
                </ul>

            </div>

            <div className="footer_2_bottom">
                <p>copyright &copy;2021 <a href="#">foolishdeveloper</a>  </p>
            </div>



        </footer>
    );

};

export default Footer_2;