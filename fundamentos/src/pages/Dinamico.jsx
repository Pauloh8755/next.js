import Layout from "../components/Layout"

const getServerSideProps = () =>{
    return{
        props:{
            number: Math.random()
        }
    }
}

const Dinamico = (props) =>{
    return(
        <Layout title="Conteúdo Dinamico">
            <div>{props.number}</div>
        </Layout>
    )
}

export default Dinamico
export {
    getServerSideProps
}