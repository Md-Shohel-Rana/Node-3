const http = require ('http');
const port=2000;
const hostname = '127.0.0.1'

const server = http.createServer((req,res)=>{
    res.end("<h1>Hello World, I am Sahel Server.Owner Sahel</h1>");
});

server.listen(port, hostname,()=>{
    console.log(`server run Ins-Allah at http://${hostname}:{port}`);
});