import express from "express"

const app = express()

app.get('/', (req, res)=>{
    res.json({"message": "hola"})
})

const server = app.listen(0,()=>{
    console.log(`Api creada en http://localhost:${server.address().port}`);
})