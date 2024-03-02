import React from "react";

export const FoundWords = ({ found }: { found: string[] }) => {
  return (
    <section className="found-words">
      {[0, 10, 20].map((rangeStart) => (
        <div key={rangeStart} className="found-words-col">
          {found?.slice(rangeStart, rangeStart + 10).map((word) => (
            <span key={word} className="found-word">
              {word}
            </span>
          ))}
        </div>
      ))}
    </section>
  );
};
