import { berekenPositieMaxScore } from "./berekenPositieMaxScore.js";

const eendjes = [5, 2, 4, 1, 1, 5, 4, 4, 3, 2];
console.log(
  `De beginpositie voor de eendjes ${eendjes} met de hoogste score is ${
    berekenPositieMaxScore(eendjes) + 1
  }`
);

//Extra:
const eendjesVanGebruiker = [];
for (let i = 0; i < 10; i++) {
  eendjesVanGebruiker[i] = Number(
    prompt(`Geef de waarde in voor eendje ${i + 1}: `)
  );
}
console.log(
  `De beginpositie voor de eendjes ${eendjesVanGebruiker} met de hoogste score is ${
    berekenPositieMaxScore(eendjesVanGebruiker) + 1
  }`
);
