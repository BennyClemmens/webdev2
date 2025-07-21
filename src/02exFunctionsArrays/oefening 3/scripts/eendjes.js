"use strict";

import { berekenIndex, geefScore } from "./bereken.js";
const eendjesVB = [5, 2, 4, 1, 1, 5, 4, 4, 3, 2];

console.log(
  `De begin index voor de eendjes ${eendjesVB} met de hoogste score is ${berekenIndex(
    eendjesVB
  )}, namelijk ${geefScore(eendjesVB, berekenIndex(eendjesVB))}`
);
