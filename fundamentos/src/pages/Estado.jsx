import { useState } from "react"
import Layout from "../components/Layout"

const Estado = () =>{

    const [num, setNum] = useState()

    const inc = () =>{
        setNum(num+ 1)
    }
    return(
        <Layout>
            <span>{num}</span>
            <button onClick={inc}>Incrementar</button>
        </Layout>
    )
}
export default Estado