"use strict";

let input = prompt("Geef een woord in:");

input = input.trim().toLowerCase();
const reversedInput = input.split("").reverse().join("");

if (input === reversedInput) {
  alert('Het woord "' + input + '" is een palindroom.');
} else {
  alert('Het woord "' + input + '" is geen palindroom.');
}

console.log(
  `Het woord "${input}" is ${input === reversedInput ? "" : "g"}een palindroom.`
);
