'use strict';
/**
 * ===== Vraag 3 =====
 * De array kleuren moet gesorteerd worden volgens de volgorde bepaald
 * in de array sorteervolgorde. Schrijf hiervoor de comparator-functie.
 * De gesorteerde array moet dus gelijk zijn aan:
 *    ['red', 'yellow', 'brown', 'black']
 */

// prettier-ignore
const sorteervolgorde = ['white', 'cream', 'pink', 'red', 'orange', 'yellow',
   'green', 'blue', 'indigo', 'violet', 'brown', 'gray','black'];

const kleuren = ['yellow', 'red', 'black', 'brown'];

// Oplossing
function compareFunction(a, b) {
  const indexA = sorteervolgorde.indexOf(a);
  const indexB = sorteervolgorde.indexOf(b);
  return indexA - indexB;
}

// Voorbeeld
console.log(kleuren.sort(compareFunction)); // ['red', 'yellow', 'brown', 'black']