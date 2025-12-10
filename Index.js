/*
import http from 'http';

const server = http.createServer((req, res) => {
    console.log(req.method);
    if(req.url=="/users"){
         res.writeHead(200, { "content-type": "application/json" });
         res.send(JSON.stringify({Name: "Thub"}))
    }else
    res.writeHead(200, { "content-type": "text/plain" });
    res.end("Hello this is from backend...");
});

server.listen(7007, () => {
    console.log(`Server running at port ${7007}`);
});
*/
//---------------------------------------------------------------------------------------

import express from 'express';
import StudentRouter from './routes/studentRoutes.js';
const app = express();

app.use('/', StudentRouter);


app.get('/users',(req,res) => {
    res.send("Hello This is from Backend using Express");
})

app.get('/get-users',(req,res) =>{
    res.send("Hello this is get users endpoint");
})

app.listen(7007,() => {
    console.log("Server is running at port 7007");
})





