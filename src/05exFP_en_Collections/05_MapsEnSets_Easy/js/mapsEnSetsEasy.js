'use strict';
// =============
// Deel 1 - Maps
// =============

// Declareer een lege map genaamd nl_en_dict
const nl_en_dict = new Map();

// Voeg de volgende key-value pairs toe aan nl_en_dict. Maak gebruik van method chaining.
// stoel - chair
// tafel - table
// kaars - candle
// dubbel - double


// Declareer een map genaamd en_fr_dict die initieel volgende entries bevat.
// chair - chaise
// table - table
// candle - bougie
// double - double


// Gebruik nl_en_dict om woorden te vertalen van NL naar EN
// Vul onderstaande code aan
console.log('Vertalen van NL naar EN');
let word = prompt('Geef een nederlands woord');
while (word) {
  if (/** hier aanvullen **/)
    console.log(`NL: ${word} - EN: ${/** hier aanvullen **/}`);
  else console.log(`${word} staat niet in het woordenboek`);
  word = prompt('Geef een nederlands woord');
}

// Gebruik beide woordenboeken om woorden te vertalen van NL naar EN
// Vul onderstaande code aan
console.log('Vertalen van NL naar FR');
word = prompt('Geef een nederlands woord');
while (word) {
  if (/** hier aanvullen **/)
    console.log(`NL: ${word} - FR: ${/** hier aanvullen **/}`);
  else console.log(`${word} staat niet in het woordenboek`);
  word = prompt('Geef een nederlands woord');
}

// Itereer over nl_en_dict en log alle nederlandse woorden naar de console.
// Maak gebruik van een for .. of lus

// Itereer over en_fr_dict en log alle entries naar de console.
// Maak gebruik van een for .. of lus en array destructuring.
// Elke entry wordt getoond als key: value


// Schrijf een functie die een woordenboek als parameter heeft
// en die retourneert hoeveel woorden identiek zijn in beide talen (i.e. key en value hebben dezelfde waarde)


// Gebruik de functie en log naar de console voor onze beide dictionaries
// hoeveel identieke woorden ze bevatten

// =============
// Deel 2 - Sets
// =============

const krishna = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O'
];

// Overloop de array krishna met een forEach en voeg alle
// elementen toe aan een initieel lege set.
// Overloop de set met een for-of en druk de inhoud af.
// Zijn de dubbels verdwenen?

// Maak nu gebruik van de spread syntax om met een one-liner
// een *array* van unieke waarden te krijgen uit de array krishna


// Maak een array met 3 *verschillende* random getallen tussen 1 en 6

