import { getBalancedLetters } from "./letters";
import wordsData from "./wordlist.json";

export const getAllWords = (minLen: number = 3, maxLen: number = 9) => {
  return wordsData.filter(
    (word) => word.length >= minLen && word.length <= maxLen
  );
};

export const getPossibleWords = (
  letters: string[],
  mustHaveChar: string | undefined = undefined
): string[] => {
  const words = getAllWords();
  let possibleWords = [];

  for (const word of words) {
    if (mustHaveChar) {
      if (!word.includes(mustHaveChar)) {
        continue;
      }
    }

    let pass = true;
    for (const char of word) {
      if (!letters.includes(char)) {
        pass = false;
        break;
      }
    }
    if (pass) possibleWords.push(word);
  }
  return possibleWords;
};

export const generateInput = (): string[][] => {
  let words: string[] = [];
  let letters: string[] = [];
  let tryCount = 0;

  while (words.length < 10 || words.length > 25) {
    tryCount += 1;
    letters = getBalancedLetters(9);
    words = getPossibleWords(letters, letters[4]);
  }

  console.log(`Input generated in ${tryCount} iterations`);

  return [letters, words];
};
