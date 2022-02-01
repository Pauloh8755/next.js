const handleGet = (req, res)=>{
    res.status(204).json({
        id: 3,
        nome: joao
    })  
} 

const handler = (req, res) =>{
    if(req.method === "GET"){
        handleGet(req,res)
    }
    else{
        res.status(405).send()
    }   
        
}

export default handler