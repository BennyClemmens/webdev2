//voorbeeld 1: spread syntax bij array literal notation
const aString = "Javascript";
console.log([...aString]);

const anArray = ["a", "b", "c"];
console.log([1, 2, ...anArray, 3, 4]);

const aMap = new Map([
  ["Belgium", 11589623],
  ["Burkina Faso", 20903275],
  ["Iceland", 341243],
]);
console.log([1, 2, ...aMap, 3, 4]);
console.log([1, 2, ...aMap.values(), 3, 4]);
console.log([1, 2, ...aMap.keys(), 3, 4]);

const aSet = new Set([
  "patrick.lauwaerts@hogent.be",
  "stefaan.decock@hogent.be",
]);
console.log([1, 2, ...aSet, 3, 4]);

// //voorbeeld 2: spread syntax bij functie aanroepen
const numbers = [-1, 5, 11, 3];

console.log(Math.max(numbers));
console.log(Math.max(...numbers));
console.log(Math.max(1, 10, ...numbers, 20, 2));
console.log(Math.max(...aMap.values()));

// //voorbeeld 3:nog enkele voorbeelden
const arr1 = ["Jan", "Piet"];
const arr2 = ["Joris", "Korneel"];

// maak een shallow copy die de inhoud van beide arrays bevat:
const arr12 = [...arr1, ...arr2];
console.log(arr12); // ["Jan", "Piet", "Joris", "Korneel"]

// voeg aan arr1 de elementen van arr2 toe
arr1.push(...arr2);
console.log(arr1); // ["Jan", "Piet", "Joris", "Korneel"]

// // voorbeeld 4:
// Vorm sets en maps om tot arrays om zo de
// krachtige array-methodes te kunnen gebruiken
let population = new Map();

population.set("Belgium", 11589623);
population.set("Burkina Faso", 20903275);
population.set("Iceland", 341243);

// population stijgt met 0.1%
console.log(`Before population increase:`);
console.log(population);
let populationInArray = [...population];
let adjustedArray = populationInArray.map(([country, population]) => [
  country,
  Math.round(population * 1.001),
]);
population = new Map(adjustedArray);
console.log(`After population increase of 0.1%:`);
console.log(population);
// in 1 regel code zonder extra variabelen:
population = new Map(
  [...population].map(([country, population]) => [
    country,
    Math.round(population * 1.001),
  ])
);
console.log(population);

// population stijgt met 0.1% in-place wijzigen
console.log(`Before population increase:`);
console.log(population);
population.forEach((value, key, map) =>
  map.set(key, Math.round(value * 1.001))
);
console.log(`After population increase of 0.1%:`);
console.log(population);

// // voorbeeld 5: sorteren
// keys van de map alfabetisch sorteren
population.clear();
population.set("Iceland", 341243);
population.set("Burkina Faso", 20903275);
population.set("Belgium", 11589623);

console.log(`Before sort:`);
console.log(population);
let populationSort = new Map(
  [...population].sort(([key1], [key2]) => key1 - key2)
);
console.log(`After sort:`);
console.log(populationSort);

// again
population.clear();
population.set("Iceland", 341243);
population.set("Burkina Faso", 20903275);
population.set("Belgium", 11589623);

console.log(`Before sort:`);
console.log(population);
populationSort = new Map(
  [...population].sort(([country1], [country2]) =>
    country1 < country2 ? -1 : country1 > country2 ? 1 : 0
  )
);
console.log(`After sort:`);
console.log(populationSort);

// again
population.clear();
population.set("Iceland", 341243);
population.set("Burkina Faso", 20903275);
population.set("Belgium", 11589623);

console.log(`Before sort:`);
console.log(population);
populationSort = new Map(
  [...population].sort(([country1], [country2]) =>
    country1.localeCompare(country2)
  )
);
console.log(`After sort:`);
console.log(populationSort);

// // voorbeeld 6:
// Haal alle landen met minder dan 5000000 inwoners uit population
console.log(`Original map:`);
console.log(population);
populationInArray = [...population];
adjustedArray = populationInArray.filter(
  ([country, population]) => population > 5000000
);
population = new Map(adjustedArray);
console.log(`Map without SMALL countries:`);
console.log(population);

// in 1 regel code zonder extra variabelen:
population = new Map(
  [...population].filter(([country, population]) => population > 5000000)
);

// // voorbeeld 7:
// twee maps combineren in een derde map
const population2 = new Map([
  ["Zimbabwe", 14862924],
  ["Colombia", 97338579],
]);

console.log("Landen in eerste map:");
console.log(population);
console.log("Landen in tweede map:");
console.log(population2);
const combinedPopulation = new Map([...population, ...population2]);
console.log("Alle landen samen in 1 map:");
console.log(combinedPopulation);

// // voorbeeld 8:
// rest syntax bij parameters
function showName(lastname, ...firstnames) {
  console.log(`De parameter firstnames bevat `);
  console.log(firstnames);
  const i = firstnames.reduce((initials, current) => initials + current[0], "");
  return `${i} ${lastname}`;
}

console.log(showName("Rowling", "Joanne", "Kathleen")); // JK Rowling
console.log(showName("Rubens", "Pieter", "Paul")); // PP Rubens

// rest syntax bij array destructuring
const [a, ...b] = ["Jan", "Piet", "Korneel", "Steven", "Maarten"];
console.log(a);
console.log(b);
