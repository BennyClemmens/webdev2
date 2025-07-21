'use strict';
/**
 * ===== Vraag 3 [6 punten]=====
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

// Voorbeeld
console.log(kleuren.sort(compareFunction)); // ['red', 'yellow', 'brown', 'black']
