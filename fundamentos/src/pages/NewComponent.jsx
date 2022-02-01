'use strict'

import styles from '../styles/NewComponent.module.css'
import Link from 'next/link'
import Layout from '../components/Layout'

const NewComponent = () =>{
    return(
        <Layout title="Exmplo">
            <div className={styles.container}>
                <h1>Estilo utilizando Módulos</h1>
            </div>
        </Layout>
    )
}

export default NewComponent