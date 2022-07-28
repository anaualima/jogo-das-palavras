import React from 'react';
import './Telainicial.css';
import Capa from '../images/capa.png';

const Telainicial = ({ iniciarJogo }) => {
  return (
    <div className="start">
      <div className="start-square">
        <img src={Capa} alt="capa-do-jogo" width="600" />
        <p>Clique aqui para começar a jogar</p>
        <button onClick={iniciarJogo}>Iniciar o jogo</button>
      </div>
    </div>
  )
}

export default Telainicial;