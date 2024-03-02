import React from "react";

interface ILetterGridProps {
  letters?: string[];
  guess: string;
  setGuess: (oldGuess: any) => void;
}
export const LetterGrid = ({ letters, guess, setGuess }: ILetterGridProps) => {
  return (
    <section className="letter-grid">
      {letters
        ? letters.map((letter, i) => (
            <span
              key={letter}
              className={`letter-box ${i === 4 ? "center-letter" : ""}`}
              onClick={() =>
                guess.length <= 9
                  ? setGuess((oldGuess: string) => oldGuess + letter)
                  : null
              }
            >
              {letter}
            </span>
          ))
        : "Loading..."}
    </section>
  );
};
