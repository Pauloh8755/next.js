// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ 
    name: 'John Doe',
    method: req.method,
    params: req.query.nome,
    params: +req.query.idade
  })
}
