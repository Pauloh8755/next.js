import Layout from "../components/Layout"

const getStaticProps = () =>{
    return{
        props:{
            number: Math.random()
        }
    }
}

const Estatico = (props) =>{
    return(
        <Layout title="Conteúdo estático">
            <div>{props.number}</div>
        </Layout>
    )
}

export default Estatico
export {
    getStaticProps
}