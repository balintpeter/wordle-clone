import { FoundWords } from "./components/FoundWords";
import React, { useEffect, useState } from "react";
import "./App.css";
import { generateInput } from "./utils/words";
import { LetterGrid } from "./components/LetterGrid";
import ConfettiExplosion from "react-confetti-explosion";

const App = () => {
  const [letters, setLetters] = useState<string[]>();
  const [words, setWords] = useState<string[]>();
  const [guess, setGuess] = useState("");
  const [found, setFound] = useState<string[]>([]);
  const [shake, setShake] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    newGame();
  }, []);

  const newGame = () => {
    const [letters, words] = generateInput();

    // console.log("letters", letters.sort());
    console.log("words", words.sort());

    setLetters(letters);
    setWords(words);
    setGuess("");
    setFound([]);
  };

  const handleGuess = () => {
    if (words?.includes(guess) && !found.includes(guess)) {
      setFound((oldFound) => [...oldFound, guess].sort());
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setGuess("");
      }, 500);
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false);
        setGuess("");
      }, 500);
    }
  };

  return (
    <div className="App">
      <h1>Find all the words</h1>
      <div className="game-container">
        {found.length === words?.length && found.length !== 0 ? (
          <div className="success-container">
            <h2 style={{ textAlign: "center", marginTop: "center" }}>
              Great success!
            </h2>
            <ConfettiExplosion
              force={0.6}
              duration={2500}
              particleCount={80}
              width={1000}
            />
            <p style={{ width: 300 }}>
              You have found all {found.length} words! Click on New Game to
              start a new puzzle!
            </p>
            <button
              onClick={newGame}
              className="button"
              style={{ width: "100%", marginTop: ".4rem" }}
            >
              <span>New game</span>
            </button>
          </div>
        ) : (
          <>
            <div className="grid-container">
              <span
                className={`guess ${shake ? "shake" : ""} ${
                  success ? "success" : ""
                }`}
              >
                {guess}
              </span>
              <LetterGrid letters={letters} guess={guess} setGuess={setGuess} />
              <section className="buttons">
                <button onClick={() => setGuess("")} className="button">
                  <span>Reset</span>
                </button>
                <button onClick={handleGuess} className="button">
                  <span>Guess</span>
                </button>
              </section>
              <button
                onClick={newGame}
                className="button"
                style={{ width: "100%", marginTop: ".4rem" }}
              >
                <span>New game</span>
              </button>
            </div>
            <div className="score-container">
              <span className="score-header">
                Words found: {found?.length || 0}/{words?.length}
              </span>
              <FoundWords found={found} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
