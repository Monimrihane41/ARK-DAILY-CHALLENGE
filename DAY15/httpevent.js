const http = require('http');
const server = http.createServer();



server.on("request",(req , res)=>{
    res.end('welcome :) ');

})

server.listen(5000,()=>{
    console.log("Server is Listening on port : 5000")
})
