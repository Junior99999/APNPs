const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Olá josé')
});

app.get("/msg", function(req,res){
    res.send("Essa mensagem é automatica!")
});

app.listen(3000,function(){
    console.log("Conexão inicializada")
});