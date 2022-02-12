import express from 'express';
import http from 'http';
import {Server} from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: ["http://localhost:3000"]
});

app.get('/', (request, response) => {
  response.sendFile("/home/jonas/developer/websockets/finance/index.html")
});

io.on('connection', (socket) => {
  console.log("conectado id: ", socket.id);
});

function geraValor() {
  return (Math.random() * 100).toFixed(2);
}

setInterval(() => {
  io.emit('cotacao', geraValor())
}, 1000)

server.listen(8080, () => {
  console.log("Listen in the port 8080");
});
