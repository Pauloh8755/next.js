import Header from "../components/Header"
import Layout from "../components/Layout"

const Example = () =>{
    return(
        <Layout title="Utilizano componentes">
            <Header titulo="Fundamentos de next.js - Componentes react" color="red" hide="false"/>
            <Header titulo="Inicio dos estudos" />
        </Layout>
    )
}

export default Example