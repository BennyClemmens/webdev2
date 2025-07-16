'use strict';

const bovengrens = 20;
let message = `De even getallen tussen 0 en ${bovengrens} zijn: \n`;
let som = 0;

for (let teller = 0; teller <= 20; teller++) {
  if (teller % 2 === 0) {
    message += `${teller} `;
    som *= teller;
  }
}

console.log(message + `\nDe som van deze getallen is ${som}.`;)
