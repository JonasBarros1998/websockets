import React, {useState} from 'react';
import './App.css';
import {io} from 'socket.io-client';

function App() {
  const [cotacao, setCotacao] = useState();
  const socket = io('ws://127.0.0.1:8080')

  socket.on('cotacao',  valor => {
    setCotacao(valor);
  })

  return (
    <div>
      <h1>Valor da ação JS3</h1>
      <h2 id="valor">R$ {cotacao}</h2>
    </div>
  );
}

export default App;
