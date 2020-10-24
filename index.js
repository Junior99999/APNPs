const express = require('express');
const app = express();

app.get('/',function(req,res){
    res.send('Olá josé')
});

app.get("/msg", function(req,res){
    res.send("Essa mensagem é automatica!")
});

app.get("/sobre", function(req,res){
    res.send("Esta pagina esta sendo desenvolvida por Jose!")
});

app.get("/layout", function(req,res){
    res.send("Esse é o novo layout")
});

app.listen(3000,function(){
    console.log("Conexão inicializada")
});