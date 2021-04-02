'use strict';


const express = require('express');

const server = express();

const PORT = process.env.PORT || 3000 ;

server.use(express.static('./public'));

server.get('/test',(request,response) =>{
    response.send('The server is LIVE !')
})

server.listen(PORT,()=>{
    console.log(`Iam listening at PORT ${PORT}`)
})