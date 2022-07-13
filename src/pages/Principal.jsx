import  "../styles/presentacion.css"
import foto from "../media/redes/Perfil_Julian.jpeg"

const Index=() => {
    return (
        <div>
          <div className="olivetti">
            <h1>Bienvenido a mi Pagina Web!</h1>
          </div>
          <div>
            <img className="foto" src={foto} alt="Perfil"/>
          </div>
          <div className="text-presentacion">
            <b>Me he dedicado al desarrollo web al rededor de un año, primero como un aficionado y ahora como autónomo.
              Como resultado tengo un solido conocimiento de los principales lenguajes de programación de desarrollo web
              y del software relacionado, así como la codificación HTML.
            </b>
          </div>
        </div>
    )
};

export default Index;