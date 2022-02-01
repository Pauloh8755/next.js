import { useState } from 'react'
import Layout from '../components/Layout'

const Integracao = ()=>{
    const [codigo, setCodigo] = useState(1)
    const [cliente, setCliente] = useState({})


    const obterCliente=async()=>{
        const response = await fetch(`http://localhost:3000/api/clientes/${codigo}` )
        const json = await response.json()
        setCliente(json)
    }   

    return(
        <Layout>
            <div>
                <input type="number" onChange ={e=>setCodigo(e.target.value)}value={codigo}/>
                <button onClick={obterCliente}>Obter Cliente</button>
            </div>
            <ul>
                <li>Código: {cliente.id}</li>
                <li>Nome: {cliente.nome}</li>
                <li>Email: {cliente.email}</li>
            </ul>
        </Layout>
    )
}
export default Integracao