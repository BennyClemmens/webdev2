"use strict";

const getal = Number(prompt("Geef een getal in: "));

for (let i = 2; i <= getal; i++) {
  let isPriem = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPriem = false;
      break;
    }
  }

  if (isPriem) {
    console.log(i);
  }
}
