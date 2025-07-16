"use strict";

const getal = Number(prompt("Geef een getal:"));
let som = 0;
let reeks = "";
for (let i = 1; i <= getal; i++) {
  if (i % 3 === 0 || i % 5 === 0) {
    som += i;
    reeks += ` ${i}`;
  }
  reeks = reeks.trim();
}
console.log(
  `De som van de veelvouden van 3 en 5 onder ${getal} ${
    reeks ? `(` + reeks + `) ` : ""
  }is ${som}`
);
