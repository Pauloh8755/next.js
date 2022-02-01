const Header = (props) =>{
    //props pode ser utilizado apenas para leitura
    return (
        <header>
            <h1>{props.titulo}</h1>
        </header>
    )
}

export default Header