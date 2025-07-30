"use strict";
// ==================
// a. Gesorteerde map
// ==================
const tekst =
  "De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort";

// model oplossing:
let woordenMap = new Map();
for (const w of tekst.toUpperCase().split(" ")) {
  if (woordenMap.has(w)) woordenMap.set(w, woordenMap.get(w) + 1);
  else woordenMap.set(w, 1);
}
woordenMap = new Map([...woordenMap.entries()].sort((a, b) => b[1] - a[1]));

for (const [woord, aantal] of woordenMap) {
  console.log(`${woord} komt ${aantal} keer voor.`);
}

//eigen oneliner:
const onliner = [
  ...tekst
    .toLowerCase()
    .split(" ")
    .reduce(
      (map, woord) => map.set(woord, (map.get(woord) || 0) + 1),
      new Map()
    )
    .entries(),
]
  //.sort((a, b) => b[1] - a[1])
  .sort(([, aantalFirst], [, aantalSecond]) => aantalSecond - aantalFirst)
  .forEach(([woord, aantal]) =>
    console.log(`${woord} komt ${aantal} keer voor.`)
  );

// =======================
// b. Coderen en Decoderen
// =======================
const alfabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const teCoderen = "ERRARE HUMANUM EST.";
const teDecoderen = "SHUIHFW! BRX DUH GRLQJ JUHDW, NHHS LW XS!";
const code = 3;

const codeer = function (teCoderen, code, alfabet) {
  return [...teCoderen]
    .map((value) =>
      alfabet.indexOf(value) !== -1
        ? alfabet[(alfabet.indexOf(value) + code) % alfabet.length]
        : value
    )
    .join("");
};

const decodeer = function (teDecoderen, code, alfabet) {
  return codeer(teDecoderen, alfabet.length - code, alfabet);
};

console.log(
  `"${teCoderen}" is gecodeerd "${codeer(teCoderen, code, alfabet)}"\n`
);
console.log(
  `"${teDecoderen}" is gedecodeerd "${decodeer(teDecoderen, code, alfabet)}"`
);

console.log(
  `"${alfabet.join("")}" is gecodeerd "${codeer(
    alfabet.join(""),
    code,
    alfabet
  )}"\n`
);

console.log(
  `DEFGHIJKLMNOPQRSTUVWXYZABC is gedecodeerd "${decodeer(
    "DEFGHIJKLMNOPQRSTUVWXYZABC",
    code,
    alfabet
  )}"\n`
);

const codeerBis = function (teCoderen, code, alfabet) {
  return [...teCoderen]
    .map((value) => {
      let index = alfabet.indexOf(value);
      if (index !== -1) return alfabet[(index + code) % alfabet.length];
      else return value;
    })
    .join("");
};

const decodeerBis = function (teDecoderen, code, alfabet) {
  return codeerBis(teDecoderen, code, alfabet.reverse());
};

console.log(
  `"${teCoderen}" is gecodeerd "${codeerBis(teCoderen, code, alfabet)}"\n`
);
console.log(
  `"${teDecoderen}" is gedecodeerd "${decodeerBis(teDecoderen, code, alfabet)}"`
);

// ===========
// c. Camelize
// ===========
const camelize = function (input) {
  return input
    .split("-") // my-long-word -> ['my', 'long', 'word']
    .map((word, index) =>
      index === 0
        ? word.toLowerCase()
        : word[0].toUpperCase() + word.slice(1).toLowerCase()
    ) // ['my', 'long', 'word'] -> ['my', 'Long', 'Word']
    .join(""); // ['my', 'Long', 'Word'] -> myLongWord
};

console.log(camelize("background-color")); // backgroundColor
console.log(camelize("list-style-image")); // listStyleImage
console.log(camelize("-webkit-transition")); // WebkitTransition

// ========
// d. Buren
// ========
const woorden = [
  "KOLDER",
  "HOLDER",
  "HELDER",
  "HERDER",
  "VERDER",
  "VERVER",
  "VERSER",
  "VELSER",
];

const zijnBuren = function (woord1, woord2) {
  return (
    1 ===
    [...woord1].reduce((aantalVerschillendeLetters, letter, index) => {
      return aantalVerschillendeLetters + (letter !== woord2[index]);
    }, 0)
  );
};

// const zijnBuren = function (woord1, woord2) {
//   return (
//     1 ===
//     [...woord1].reduce((aantalVerschillendeLetters, letter, index) => {
//       return aantalVerschillendeLetters + (letter !== woord2[index]);
//     }, 0)
//   );
// };

// const allemaalBuren = woorden.every((woord, index) =>
//   woorden.slice(index + 1).every((anderWoord) => zijnBuren(woord, anderWoord))
// );

const allemaalBuren = woorden.reduce(
  (result, value, index, array) =>
    index < array.length - 1
      ? result && zijnBuren(value, woorden[index + 1])
      : result,
  true
);

console.log(
  `KOLDER en HOLDER zijn ${zijnBuren("KOLDER", "HOLDER") ? "" : "geen "}buren`
);
console.log(
  `KOLDER en HALDER zijn ${zijnBuren("KOLDER", "HALDER") ? "" : "geen "}buren`
);
console.log(
  `${allemaalBuren ? "Alle" : "Niet alle"} woorden in de array zijn buren.`
);

// =====
// Morse
// =====
let morse = new Map();
morse.set("A", ".-");
morse.set("B", "-...");
morse.set("C", "-.-.");
morse.set("D", "-..");
morse.set("E", ".");
morse.set("F", "..-.");
morse.set("G", "--.");
morse.set("H", "....");
morse.set("I", "..");
morse.set("J", ".---");
morse.set("K", "-.-");
morse.set("L", ".-..");
morse.set("M", "--");
morse.set("N", "-.");
morse.set("O", "---");
morse.set("P", ".--.");
morse.set("Q", "--.-");
morse.set("R", ".-.");
morse.set("S", "...");
morse.set("T", "-");
morse.set("U", "..-");
morse.set("V", "...-");
morse.set("W", ".--");
morse.set("X", "-..-");
morse.set("Y", "-.--");
morse.set("Z", "--..");
morse.set("0", "-----");
morse.set("1", ".----");
morse.set("2", "..---");
morse.set("3", "...--");
morse.set("4", "....-");
morse.set("5", ".....");
morse.set("6", "-....");
morse.set("7", "--...");
morse.set("8", "---..");
morse.set("9", "----.");
morse.set(".", ".-.-.-");
morse.set(",", "--..--");
morse.set("?", "..--..");
morse.set("-", "-....-");
morse.set("/", "-..-.");
morse.set(":", "---...");
morse.set("'", ".----.");
morse.set("-", "-....-");
morse.set(")", "-.--.-");
morse.set(";", "-.-.-");
morse.set("(", "-.--.");
morse.set("=", "-...-");
morse.set("@", ".--.-.");

const converteer = function (bericht, morse) {
  return bericht
    .toUpperCase()
    .split("")
    .map((letter) => morse.get(letter) || letter)
    .join(" ");
};

console.log(converteer("SOS Javascript", morse));

// ========
// Josephus
// ========
const josephus = function (nPersonen, stapGrootte) {
  let personen = Array.from({ length: nPersonen }, (_, i) => i + 1);
  let index = 0;

  while (personen.length > 1) {
    index = (index + stapGrootte - 1) % personen.length;
    personen.splice(index, 1);
  }

  return personen[0];
};

const josephusBis = (n, k) =>
  [...Array(n).keys()].reduce((r, _, i) => (r + k) % (i + 1), 0) + 1;

let aantalPersonen = 30;
let stapGrootte = 9;
console.log(
  `In een cirkel met ${aantalPersonen} personen en stapgrootte ${stapGrootte} sta je best op plaats ${josephus(
    aantalPersonen,
    stapGrootte
  )} (${josephusBis(aantalPersonen, stapGrootte)})`
); // 21?

aantalPersonen = 12;
stapGrootte = 3;
console.log(
  `In een cirkel met ${aantalPersonen} personen en stapgrootte ${stapGrootte} sta je best op plaats ${josephus(
    aantalPersonen,
    stapGrootte
  )} (${josephusBis(aantalPersonen, stapGrootte)})`
); // 10?

aantalPersonen = 41;
stapGrootte = 3;
console.log(
  `In een cirkel met ${aantalPersonen} personen en stapgrootte ${stapGrootte} sta je best op plaats ${josephus(
    aantalPersonen,
    stapGrootte
  )} (${josephusBis(aantalPersonen, stapGrootte)})`
); // 31?
