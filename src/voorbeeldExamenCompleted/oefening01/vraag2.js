'use strict';
/**
 * ===== Vraag 2 =====
 * Declareer en initialiseer een variabele arrayOfTypes.
 * De array arrayOfTypes moet alle unieke types (in string vorm) bevatten van de elementen uit mySet.
 **/

const mySet = new Set([10, 'abc', undefined, { a: 10 }, 20, 'def']);

/* Modeloplossing */
const arrayOfTypes = [...new Set([...mySet].map((v) => typeof v))];

/* Voorbeeld uitvoer */
console.log(arrayOfTypes.join(' - ')); // number - string - undefined - object
