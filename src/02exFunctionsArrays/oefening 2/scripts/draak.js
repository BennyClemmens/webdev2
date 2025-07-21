"use strict";

const gewonnen = 4;
let eindeSpel = false;
let totaleSchade = 0;

function slaDeDraak() {
  const geraakt = Math.random() < 0.5;
  if (geraakt) return Math.floor(Math.random() * 5) + 1;
  return 0;
}

while (!eindeSpel) {
  const schade = slaDeDraak();
  console.log(`Je hebt ${schade} extra schade toegebracht aan de draak.`);
  if (!schade) break; // eindespel manipuleren zou ook kunnen
  totaleSchade += schade;
  if (totaleSchade >= gewonnen) {
    eindeSpel = true;
  }
}

console.log(
  `${
    eindeSpel ? "Je hebt de draak verslagen!" : "De draak heeft je verslagen."
  }`
);
console.log(`Totale schade: ${totaleSchade}`);
