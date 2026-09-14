// http  and https

// http protocol hai ya rule hai jisko follow kara bina app internet pe naa hi kuch bhej sakto ho naa hi kuch manga sakta ho


const http =require('http');
const server =http.createServer(function(req,res){
    res.end("helloworld");

})
server.listen(3000);