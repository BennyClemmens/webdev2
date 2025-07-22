// ========== forEach ==================

let fruit = ["orange", "pear", "kiwi", "melon"];

// Iteratie: klassieke manier
for (const f of fruit) {
  console.log(f);
}

// Iteratie: forEach
fruit.forEach(function (element) {
  console.log(element);
});
// orange
// pear
// kiwi
// melon

// Iteratie: forEach & arrow function
fruit.forEach((element) => console.log(element));

// De meest algemene vorm van forEach
fruit.forEach((el, i, arr) =>
  console.log(`${el} sits in slot ${i} in an array of ${arr.length} elements`)
);

// ========== find, findIndex & sort ==================
const users = [
  {
    id: 1,
    firstname: "Jan",
    lastname: "Janssens",
  },
  {
    id: 2,
    firstname: "Eva",
    lastname: "De Smet",
  },
  {
    id: 3,
    firstname: "Pieter",
    lastname: "Martens",
  },
];

// find
const user = users.find((item) => item.id === 1);
console.log(user);

// findIndex
const indexuser = users.findIndex((item) => item.id === 1);
console.log(indexuser); // 0

// De functie find zoekt naar het enige (of eerste) element dat aan de voorwaarde voldoet
// Als er verschillende objecten aan de voorwaarden voldoen, kan je gebruik maken van filter
const someusers = users.filter((item) => item.id < 3);
console.log(someusers);
console.log(someusers.length); // 2

// De functie sort sorteert de items van de array als strings by default
fruit = ["orange", "pear", "kiwi", "melon"];
console.log(fruit.sort()); // ["kiwi", "melon", "orange", "pear"]

// Stel dat we de strings willen sorteren op aantal letters
function sorterenOpAantalLetters(a, b) {
  if (a.length > b.length) return 1;
  if (a.length === b.length) return 0;
  if (a.length < b.length) return -1;
}
fruit = ["orange", "pear", "kiwi", "melon"];
console.log(fruit.sort(sorterenOpAantalLetters)); // ["pear", "kiwi", "melon", "orange"]

// Je kan het voorgaande ook verkort schrijven als
fruit = ["orange", "pear", "kiwi", "melon"];
fruit.sort((a, b) => a.length - b.length);
console.log(fruit); // ["pear", "kiwi", "melon", "orange"]

fruit = ["orange", "pear", "kiwi", "melon"];
console.log(fruit.toSorted((a, b) => a.length - b.length)); // ["pear", "kiwi", "melon", "orange"]

// Je kan kan ook gebruik maken van toSorted() die een coyping versie is van sort()
// We sorteren het fruit nu op aantal letters en bij gelijk aantal letters wordt alfabetisch gesorteerd
fruit = ["orange", "pear", "kiwi", "melon"];
let sortedFruit = fruit.toSorted((a, b) => {
  const compareLength = a.length - b.length;
  if (compareLength === 0)
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
  else return compareLength;
});

console.log(sortedFruit); // ["kiwi", "pear", "melon", "orange"];

fruit = ["orange", "pear", "kiwi", "melon"];
sortedFruit = fruit.toSorted((a, b) =>
  a.length === b.length ? a.localeCompare(b) : a.length - b.length
);

console.log(sortedFruit);
