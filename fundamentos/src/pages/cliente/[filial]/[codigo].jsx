import Layout from "../../../components/Layout"
import { useRouter } from 'next/router'

const ClientePorCodigo = () =>{
    const router = useRouter()
    return(
        <Layout titulo="Navegação Dinâmica">
            <span>Código = {router.query.codigo}</span>
            <div>Filial = {router.query.filial}</div>
        </Layout>
    )
}

export default ClientePorCodigo