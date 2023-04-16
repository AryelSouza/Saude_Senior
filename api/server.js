const express = require('express')
const app = express()
const cors = require('cors');


const porta = 3000;
app.use(cors())

app.get("/teste",(req,res)=>{
    console.log("Funcionou!")
    res.status(200).send("Funcionou!")
})

app.listen(porta, function () {
    console.log(`servidor ta rodando na porta ${porta}`);
  });