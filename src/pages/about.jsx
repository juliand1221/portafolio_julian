import "../styles/about.css"
import Header from "../components/header"
import Footer_2 from "../components/footer_2"



const Curriculum=()=>{
    return(

        <div>
            <Header />

            <div className="title-about">
                About Me
            </div>
            <div className="text-about">
                <b>Me he dedicado al desarrollo web al rededor de un año, primero como un aficionado y ahora como autónomo.
                Como resultado tengo un solido conocimiento de los principales lenguajes de programación de desarrollo web
                y del software relacionado, así como la codificación HTML.
                </b>
            </div>
            
            <Footer_2 />
        </div>
    )
}

export default Curriculum;