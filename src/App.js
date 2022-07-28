import './App.css';
import { useCallback, useState, useEffect } from 'react';
import { listaDePalavras } from './data/palavras';
import Telainicial from './components/Telainicial';
import Jogo from './components/Jogo';
import GameOver from './components/GameOver';
// import { setSelectionRange } from '@testing-library/user-event/dist/utils';

const estagios = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" }
]

function App() {

  const [gameStage, setGameStage] = useState(estagios[0].name);
  const [palavras] = useState(listaDePalavras);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedcategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetter, setWrognLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);


  const sortPalavraEcategoria = useCallback(() => {
    const categorias = Object.keys(palavras);
    const sortCategoria = categorias[Math.floor(Math.random() * categorias.length)]
    const sortPalavra = palavras[sortCategoria][Math.floor(Math.random() * palavras[sortCategoria].length)]
    return { sortCategoria, sortPalavra }
  }, [palavras]);

  const iniciarJogo = useCallback(() => {
    apagaLetras()
    const { sortCategoria, sortPalavra } = sortPalavraEcategoria()
    let letrasSeparadas = sortPalavra.split("");
    letrasSeparadas = letrasSeparadas.map((l) => l.toLowerCase())
    console.log(sortCategoria, sortPalavra);
    console.log(letrasSeparadas);

    setPickedWord(sortPalavra);
    setPickedcategory(sortCategoria);
    setLetters(letrasSeparadas);

    setGameStage(estagios[1].name)
  }, [sortPalavraEcategoria]);

  const verificaLetra = (letter) => {
    const normalizaLetra = letter.toLowerCase()
    if (guessedLetters.includes(normalizaLetra) || wrongLetter.includes(normalizaLetra)) {
      return;
    };

    if (letters.includes(normalizaLetra)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizaLetra
      ]);
    } else {
      setWrognLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizaLetra
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  }

  const apagaLetras = () => {
    setGuessedLetters([]);
    setWrognLetters([]);
  };

  useEffect(() => {
    if (guesses <= 0) {
      apagaLetras()
      setGameStage(estagios[2].name)
    }
  }, [guesses]);

  // useEffect(() => {
  //   const letrasUnicas = [...new Set(letters)];
  //   if (guessedLetters.length === letrasUnicas.length) {
  //     setScore((actualScore) => actualScore += 100)
  //     iniciarJogo();
  //   }
  // }, [guessedLetters, letters, iniciarJogo]);

  useEffect(() => {
    const letrasUnicas = [...new Set(letters)];
    if (guessedLetters.length === letrasUnicas.length && gameStage === estagios[1].name) {
      setScore((actualScore) => (actualScore += 100));
      iniciarJogo();
    }
  }, [guessedLetters, letters, iniciarJogo, gameStage]);

  const reiniciar = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(estagios[0].name);
  };

  return (
    <div className="App">
      {gameStage === "start" && <Telainicial iniciarJogo={iniciarJogo} />}
      {gameStage === "game" && <Jogo
        verificaLetra={verificaLetra}
        pickedWord={pickedWord}
        pickedCategory={pickedCategory}
        letters={letters}
        guessedLetters={guessedLetters}
        wrongLetter={wrongLetter}
        guesses={guesses}
        score={score}
      />}
      {gameStage === "end" && <GameOver reiniciar={reiniciar} score={score} />}
    </div>
  );
}

export default App;
