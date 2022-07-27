import './App.css';
import { useCallback, useState, useEffect } from 'react';
import { listaDePalavras } from './data/palavras';
import Telainicial from './components/Telainicial';
import Jogo from './components/Jogo';
import GameOver from './components/GameOver';

const estagios = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  const [gameStage, setGameStage] = useState(estagios[0].name);
  const [palavras] = useState(listaDePalavras);

  const iniciarJogo = () => {
    setGameStage(estagios[1].name)
  }

  const verificaLetra = () => {
    setGameStage(estagios[2].name)
  }

  const reiniciar = () => {
    setGameStage(estagios[0].name)
  }

  return (
    <div className="App">
      {gameStage === "start" && <Telainicial iniciarJogo={iniciarJogo} />}
      {gameStage === "game" && <Jogo verificaLetra={verificaLetra} />}
      {gameStage === "end" && <GameOver reiniciar={reiniciar} />}
    </div>
  );
}

export default App;
