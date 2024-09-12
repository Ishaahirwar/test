const port = 4000;
const http = require('http');
const app = require('./app')
const server = http.createServer(app);


server.listen(port , async()=>{
    console.log("server is listening on port " + port)
})
