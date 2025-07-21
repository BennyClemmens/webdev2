"use strict";

const keuzeGebruiker = prompt("Kies je blad, steen of schaar?").toLowerCase();

let keuzeComputer = Math.random();
if (keuzeComputer < 1 / 3) {
  keuzeComputer = "blad";
} else if (keuzeComputer < 2 / 3) {
  keuzeComputer = "steen";
} else {
  keuzeComputer = "schaar";
}
console.log(geefResultaat(keuzeGebruiker, keuzeComputer));

function geefResultaat(keuze1, keuze2) {
  if (keuze1 === keuze2) {
    return "Het resultaat is een gelijkspel!";
  }
  if (keuze1 === "steen") {
    if (keuze2 === "schaar") return "Steen wint";
    else return "Blad wint";
  }
  if (keuze1 === "blad") {
    if (keuze2 === "steen") return "Blad wint";
    else return "Schaar wint";
  }
  if (keuze1 === "schaar") {
    if (keuze2 === "steen") return "Steen wint";
    else return "Schaar wint";
  }
}
