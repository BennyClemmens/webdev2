'use strict';
/**
 * ===== Vraag 1 =====
 * 1.1 Maak gebruik van object destructuring om via 1 statement
 * twee variabelen, name en email te declareren en te initializeren.
 * De variabelen worden als volgt geinitialiseerd:
 *   - name bevat de waarde van de property name van person1.
 *   - email bevat de waarde van de property email van person1.
 * In het geval de property email ontbreekt in person1
 * moet de variabele email geïnitialseerd worden op de ledige string.
 *
 * 1.2 Implementeer de functie formatFransResult(student).
 * De functie wordt aangeroepen met als argument een student-object en
 * resulteert in een string die aangeeft of een student al dan niet
 * geslaagd is voor Frans. Een student is geslaagd 
 * als hij 50 of meer punten behaalt.
 * Maak gebruik van string interpolation (back-ticks).
 * Bekijk de voorbeelduitvoer om te zien welke twee verschillende
 * berichten er moeten afgebeeld worden.
 */

const person1 = { name: 'Bob', gender: 'male', email: 'bob@hogent.be', city:'London' };
const student1 = { name: 'Jan', scores: { frans: 65, wiskunde: 89 } };
const student2 = { name: 'Pieter', scores: { frans: 45, wiskunde: 89 } };

/* Oplossing 1.1 */
const { name, email = '' } = person1;

/* Voorbeeld */
console.log(name, email); // Bob bob@hogent.be

/* Oplossing 1.2 */
function formatFransResult(student) {
  return `${student.name} is${
    student.scores.frans < 50 ? ' niet' : ''
  } geslaagd voor het vak Frans.`;
}

/* Voorbeeld */
console.log(formatFransResult(student1)); // Jan is geslaagd voor het vak Frans.
console.log(formatFransResult(student2)); // Pieter is niet geslaagd voor het vak Frans.
