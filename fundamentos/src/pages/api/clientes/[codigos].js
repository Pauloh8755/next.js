const handler = (req, res)=>{
    const codigo = req.query.codigos
    res.status(200).json({
        id: codigo,
        nome: `Maria ${codigo}`,
        email: `Maria@email  ${codigo}`
    })
}

export default handler