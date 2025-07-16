/**
 * Vraag 5
 * Waarom wordt in onderstaand programma  console.log() niet uitgevoerd?
 */
"use strict";
const a = "5";
const b = 5;
if (a != b) {
  console.log(`A: De string '5' is verschillend van het getal 5.`);
}

// het is gelijk aan, omdat de '!=' operator een type coercion uitvoert.
// Om dit te voorkomen, gebruik je de '!=='
if (a !== b) {
  console.log(`B: De string '5' is verschillend van het getal 5.`);
}
