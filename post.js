const express = require('express');
const bodyParse = require('body-parser');
const app = express();
app.use(bodyParse.urlencoded({extented:true}));

app.get('/saludo',function(req,res){
    res.send(`hola ${req.query.name}`);
});

app.post('/',function(req,res){
    res.send(`hola ${req.body.name}`);
});

app.listen(3000);