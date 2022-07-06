import  "../styles/presentacion.css"
import foto from "../media/redes/Perfil_Julian.jpeg"

const Presentacion=() => {
    return (
        <div>
          <div>
            <img className="foto" src={foto} alt="Perfil"/>
          </div>
          <div className="text-presentacion">
            <b>Me he dedicado al desarrollo web al rededor de un año, primero como un aficionado y ahora como autonomo.
              Como resultado tengo un solido conocimiento de los principales lenguajes de programación de desarrollo web
              y del software relacionado, asi como la codificación HTML.
            </b>
          </div>
        </div>
    )
};

export default Presentacion;