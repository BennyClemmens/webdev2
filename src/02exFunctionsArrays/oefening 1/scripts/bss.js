"use strict";
const keuzes = ["blad", "steen", "schaar"];

let keuze;

do {
  keuze = prompt("Wat is je keuze? (blad - steen - schaar)")?.toLowerCase();
} while (!keuze || !["blad", "steen", "schaar"].includes(keuze));

console.log(`Je keuze is: ${keuze}`);

let computer = keuzes[Math.floor(Math.random() * keuzes.length)];
console.log(`De computer kiest: ${computer}`);

function resultaat(keuze, computer) {
  if (keuze === computer) {
    return "Gelijkspel!";
  } else if (
    (keuze === "blad" && computer === "steen") ||
    (keuze === "steen" && computer === "schaar") ||
    (keuze === "schaar" && computer === "blad")
  ) {
    return "Je wint!";
  } else {
    return "Je verliest!";
  }
}

console.log(
  `je koos: ${keuze}, de computer koos: ${computer} => ${resultaat(
    keuze,
    computer
  )}`
);
