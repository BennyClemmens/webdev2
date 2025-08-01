/* voorbeeld callback function */
function doHomework(subject, callback) {
  console.log(`Starting my ${subject} homework.`);
  setTimeout(callback, 10000); // after all other code ...
}
function logFinished() {
  console.log("Finished my homework");
}
doHomework("math", logFinished);

// ====================================================
const animals = [
  { name: "cat", size: "small", weight: 5 },
  { name: "dog", size: "small", weight: 10 },
  { name: "lion", size: "medium", weight: 150 },
  { name: "elephant", size: "big", weight: 5000 },
];
console.log("Array of animals:");
console.log(animals);
console.log(`Array of animals: ${JSON.stringify(animals)}`);

// ====================================================
// filter
// ====================================================

// VB - maak een array met alle animals met een gewicht in het interval [0, 1000]
const underTonAnimals = animals.filter(
  (a) => a.weight >= 0 && a.weight <= 1000
);
const underTonAnimalsBis = animals.filter(
  ({ weight }) => weight >= 10 && weight <= 1000 // obj. destructuring
);
console.log("Array with under a ton animals:");
console.log(underTonAnimals);
console.log(underTonAnimalsBis);

// DIY - maak een array met alle animals met size 'small'
const smallAnimals = animals.filter(({ size }) => size === "small");
console.log("Array with small animals:");
console.log(smallAnimals);

// ====================================================
// map
// ====================================================

// VB - maak een array met de namen van alle animals
const namesOfAnimals = animals.map(({ name }) => name);
console.log(`Names of animals: ${namesOfAnimals}`);

// DIY - maak een array met nieuwe objectjes.
// De objectjes bevatten dezelfde properties als die van onze animals
// maar de size wordt nu S (ipv small), M (ipv medium), L (ipv big)
const newAnimals = animals.map(({ name, size, weight }) => ({
  name,
  size: size === "small" ? "S" : size === "medium" ? "M" : "L",
  weight,
}));
console.log("Array with new animals:");
console.log(newAnimals);

// ====================================================
// reduce
// ====================================================

// VB - log het totale gewicht van alle animals naar de console
console.log(
  `Total weight of animals = ${animals.reduce(
    (pv, { weight }) => pv + weight,
    0
  )}`
);

// DIY - hoeveel animals hebben size die small is
const numberOfSmallAnimals = animals.reduce(
  (pv, { size }) => (size === "small" ? pv + 1 : pv),
  0
);
console.log(`Number of small animals: ${numberOfSmallAnimals}`);

// ====================================================
// filter - map - reduce combineren
// ====================================================

// VB - bereken het totale gewicht van alle 'small' animals
const weightSmallAnimals = animals
  .filter(({ size }) => size === "small")
  .reduce((pv, { weight }) => (pv += weight), 0);
console.log(`Weight of small animals: ${weightSmallAnimals}`);

// DIY - maak een string met de namen van alle 'small' animals,
// zet een - tussen de namen
const namesOfSmallAnimals = animals
  .filter(({ size }) => size === "small")
  .map(({ name }) => name)
  .join(" - ");
console.log(`Names of small animals: ${namesOfSmallAnimals}`);
