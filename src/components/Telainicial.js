import React from 'react';
import './Telainicial.css';
// import Capa from '../images/capa.png';
// import Capa from '../components/capa.gif';
import Capa from '../images/capa.svg'

const Telainicial = ({ iniciarJogo }) => {
  return (
    <div className="start">
      <div className="start-square">
        <h1>Jogo de Palavras</h1>
        <img src={Capa} alt="capa-do-jogo" />
        <p>Clique aqui para começar a jogar</p>
        <button onClick={iniciarJogo}>Iniciar o jogo</button>
      </div>
    </div>
  )
}

export default Telainicial;