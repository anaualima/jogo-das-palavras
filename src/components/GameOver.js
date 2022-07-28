import React from 'react';
import './GameOver.css';

const GameOver = ({ reiniciar, score }) => {
  return (
    <div>
      <h1>Game Over</h1>
      <h2>Sua pontuação foi: <span>{score}</span></h2>
      <button onClick={reiniciar}>Reiniciar Jogo</button>
    </div>
  )
}

export default GameOver