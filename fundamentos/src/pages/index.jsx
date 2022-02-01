import Link from 'next/link'
import Navegador from '../components/Navegador'

const Home = () =>{
    return(
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            flexWrap: 'wrap'

        }}>
            <Navegador destino="/NewComponent" texto="NewComponent"/> 
            <Navegador destino="/Example" texto="Example" cor="#9400d3" /> 
            <Navegador destino="/navegacao" texto="Navegação #01" cor="green " />
            <Navegador destino="/cliente/sp/123" texto="Navegação #02" cor="blue " />
            <Navegador destino="/Estado" texto="Componente com estado" cor="#a45b21" />
            <Navegador destino="/Integracao_1" texto="Inegração com o back-end" cor="#42a9a9" />
            <Navegador destino="/Estatico" texto="Conteúdo Estático" cor="#fa054a" />
            <Navegador destino="/Dinamico" texto="Conteúdo Dinamico" cor="#fa951a" />
        </div>
    )
}

export default Home