export const getAlphabet = (): string[] =>
  Array.from(Array(26)).map((_, i) => String.fromCharCode(97 + i));

const VOWELS = ["a", "e", "i", "o", "u"];
const CONSONANTS = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const getRandomValues = (list: string[], n: number = 9): string[] => {
  let letters = [];

  if (n > list.length) {
    console.log("list", list);
    throw new Error(
      `Error: n ${n} is larger than the list length ${list.length}`
    );
  }

  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * list.length);
    letters.push(list.splice(r, 1)[0]);
  }
  return letters;
};

export const getRandomLetters = (n: number): string[] => {
  let alphabet = getAlphabet();
  let letters = [];

  if (n > alphabet.length)
    throw new Error(
      `Error: n ${n} is larger than the alphabet length ${alphabet.length}`
    );

  for (let i = 0; i < n; i++) {
    let r = Math.floor(Math.random() * alphabet.length);
    letters.push(alphabet.splice(r, 1)[0]);
  }
  return letters;
};

export const getBalancedLetters = (n: number): string[] => {
  const consonants = getRandomValues([...CONSONANTS], n - 2);
  const vowels = getRandomValues([...VOWELS], 2);
  let letters = [...vowels, ...consonants];
  return getRandomValues([...letters], n);
};
