const http = require('http');
const port = process.env.PORT || 8600;
const app = require('./app');


const server = http.createServer(app);

server.listen(port, ()=>{
    console.log(`Listenning on port ${port}`);
})