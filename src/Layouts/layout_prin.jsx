import Header from "components/header"
import Footer_2 from "components/footer_2"

const LayoutPrincipal = ({children})=>{
    return(
        <div className="mainContainer">
            <Header/>
            <main>{children}</main>
            <Footer_2/>
        </div>
    )
};

export default LayoutPrincipal;

