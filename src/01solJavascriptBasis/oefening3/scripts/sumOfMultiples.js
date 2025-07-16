"use strict";

let limit;
while (isNaN(limit)) limit = prompt("Enter a number");

let sum = 0;

for (let i = 0; i <= limit; i++) {
  if (i % 3 === 0 || i % 5 === 0) sum += i;
}

console.log(`the sum of multiples of 3 and 5 is ${sum}`);
