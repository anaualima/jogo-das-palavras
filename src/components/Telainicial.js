import React from 'react';
import "./Telainicial.css";

const Telainicial = ({ iniciarJogo }) => {
  return (
    <div className="start">
      <h1>Jogo de Palavras</h1>
      <p>Clique aqui para começar a jogar</p>
      <button onClick={iniciarJogo}>Iniciar o jogo</button>
    </div>
  )
}

export default Telainicial;