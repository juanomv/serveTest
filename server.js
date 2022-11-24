// server con node puro

// const http = require('http');

// function responderPetcion(request,response){
//     response.end('Hola mundo');
// }

// let server = http.createServer(responderPetcion);

// server.listen(3000);

//  serve con express

const express = require('express');

const app = express();

app.get('/saludo',function(req,res){
    res.send(`hola ${req.query.name}`);
});

app.listen(3000);