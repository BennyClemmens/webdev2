// 1. Welke waarden krijgen de variabelen?
const [a, b] = [1, 2];
console.log(`a: ${a}, b: ${b}`); // a: 1, b: 2

// 2. Welke waarden krijgen de variabelen?
const [c, , d] = [1, 2, 3];
console.log(`c: ${c}, d: ${d}`); // c: 1, d: 3

// 3. Welke waarden krijgen de variabelen?
let e = 1;
let f = 2;
[f, e] = [e, f];
console.log(`e: ${e}, f: ${f}`); // e: 2, f: 1 (e en f verwisseld van waarde)

// 4. Welke waarden krijgen de variabelen?
const [i, [j, [k, l]]] = [1, [2, [[[3, 4], 5], 6]]];
// i:1
// j:2
//k: [[3, 4], 5]
//l: 6
console.log(i, j, k, l);
console.log(i, j, JSON.stringify(k), l);
console.log(`i: ${i}, j: ${j}, k: ${JSON.stringify(k)}, l: ${l}`); // i: 1, j: 2, k: [[3, 4], 5], l: 6

// 5. Plaats hieronder de twee console.log()-statements uit commentaar
// en maak gebruik van destructuring om de variabelen de correcte waarde toe te kennen.
const ninjaTurtles = ["Leonardo", "Raphael", "Donatello", "Michelangelo"];

const [leo, raph] = ninjaTurtles;

console.log(leo); // Leonardo
console.log(raph); // Raphael

// 6. Plaats hieronder de drie console.log()-statements uit commentaar
// en maak gebruik van destructuring om de variabelen de correcte waarde toe te kennen.

const introduction = ["Hello", "I", "am", "Sarah"];

const [greeting, pronoun, , name] = introduction;

console.log(greeting); // Hello
console.log(pronoun); // I
console.log(name); // Sarah

// 7. Plaats hieronder de vijf console.log()-statements uit commentaar
// en maak gebruik van destructuring om de variabelen de correcte waarde toe te kennen.
const avengers2 = [
  "Natasha Romanoff",
  ["Tony Stark", "James Rhodes"],
  ["Steve Rogers", "Sam Wilson"],
];

const [blackWidow, [ironMan, warMachine], [cap, falcon]] = avengers2;

console.log(blackWidow); // Natasha Romanoff
console.log(ironMan); // Tony Stark
console.log(warMachine); // James Rhodes
console.log(cap); // Steve Rogers
console.log(falcon); // Sam Wilson
