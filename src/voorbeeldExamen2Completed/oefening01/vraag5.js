'use strict';
/**
 * ===== Vraag 5 =====
 * 5.1 Beschouw de array studenten.
 * Creëer op basis van deze array een nieuwe array geslaagden met de namen van de geslaagde
 * (score >=50) studenten.
 * Beeld de array geslaagden af in de console met tussen elke naam een puntkomma.
 * Te bekomen resultaat in de console:
 *    Carine;Piet;Carine
 *
 * 5.2 Verwijder de dubbele namen uit de array geslaagden en bewaar de array als een
 * JSON-string onder de naam 'geslaagden' in local storage.
 */

const studenten = [
  { name: 'Carine', score: 67 },
  { name: 'John', score: 45 },
  { name: 'Piet', score: 86 },
  { name: 'Carine', score: 68 },
];

// Oplossing 5.1
let geslaagden = studenten.filter((x) => x.score >= 50).map((x) => x.name);
console.log(geslaagden.join(';')); // Carine;Piet;Carine]

// Oplossing 5.2
geslaagden = [...new Set(geslaagden)];
window.localStorage.setItem('geslaagden', JSON.stringify(geslaagden));

// Voorbeeld 5.2
console.log(geslaagden); // ["Carine", "Piet"]
