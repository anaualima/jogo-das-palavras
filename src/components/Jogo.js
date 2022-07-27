import React from 'react';
import './Jogo.css';

const Jogo = ({ verificaLetra }) => {
  return (
    <div>
      <h1>Jogo</h1>
      <button onClick={verificaLetra}>Finalizar jogo</button>
    </div>
  )
}

export default Jogo;