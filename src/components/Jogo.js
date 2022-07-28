import React, { useState, useRef } from 'react';
import './Jogo.css';

const Jogo = ({
  verificaLetra,
  pickedWord,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetter,
  guesses,
  score,
}) => {

  const [letter, setLetter] = useState("");
  const letterInputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verificaLetra(letter)
    setLetter("")
    letterInputRef.current.focus()
  }

  return (
    <div className="game">
      <p className="points">
        <span>Pontuação: {score}</span>
      </p>
      <h1>Advinhe a palavra:</h1>
      <h3 className="tip">
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você ainda tem {guesses} tentativa(s).</p>
      <div className="word-container">
        {letters.map((letter, i) =>
          guessedLetters.includes(letter) ? (
            <span className="letter" key={i}>
              {letter}
            </span>
          ) : (
            <span key={i} className="blank-square"></span>
          )
        )}
      </div>
      <div className="wordContainer">
        <p>Tente advinhar a palavra:</p>
        <form className="letter-container" onSubmit={handleSubmit}>
          <input
            type="text"
            name="letter"
            maxLength="1" required
            onChange={(e) => setLetter(e.target.value)}
            value={letter}
            ref={letterInputRef}
          />
          <button>Jogar!</button>
        </form>
      </div>
      <div className="wrogn-letters-container">
        <p>Letras já utilizadas:</p>
        {wrongLetter.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div >
  )
}

export default Jogo;