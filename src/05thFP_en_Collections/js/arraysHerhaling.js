// Een lege array creëren
const leeg1 = new Array();
const leeg2 = [];

// Initiële elementen opgeven
let fruit = ["apple", "pear", "lemon"];

// Individuele elementen gebruiken
console.log(fruit[1]); // pear

// Een element vervangen
fruit[2] = "kiwi";

// Een nieuw element toevoegen
fruit[3] = "grape";

// Het aantal elementen weergeven
console.log(fruit.length); // 4

// De ganse array tonen
console.log(fruit); // ["apple", "pear", "kiwi", "grape"]

// Een array kan elementen van verschillende types bijhouden
const arr = [
  "apple",
  {
    firstname: "Jan",
    lastname: "Janssens",
  },
  true,
  function () {
    console.log(`Hello!`);
  },
];

// de firstname laten zien van het element op positie 1
console.log(arr[1].firstname); // Jan

// de functie gebruiken op positie 3
arr[3](); // Hello!

// pop verwijdert het laatste element en retourneert het
console.log(fruit.pop()); // grape

// push voegt een nieuw element achteraan toe
fruit.push("melon");
console.log(fruit); // ["apple", "pear", "kiwi", "melon"]

// shift verwijdert het eerste element en retourneert het
console.log(fruit.shift()); // apple

// met unshift kan je een element vooraan de array toevoegen
fruit.unshift("orange");
console.log(fruit); // ["orange", "pear", "kiwi", "melon"]
/*
Oefening
*/
// Creëer een array stijlen met de items "jazz" en "blues"
// Voeg achteraan "rock-n-roll" toe
// Verwijder de waarde in het midden door "klassiek".
// Je code moet werken voor alle arrays met een oneven aantal elementen
// Verwijder het eerste element en toon het
// Voeg vooraan "rap" en "reggae" toe

let stijlen = ["jazz", "blues"];
console.log(stijlen);
stijlen.push("rock-n-roll");
console.log(stijlen);
stijlen.splice(Math.floor(stijlen.length / 2), 1, "klassiek");
console.log(stijlen);
console.log(stijlen.shift()); // jazz
console.log(stijlen);
stijlen.unshift("rap", "reggae");
console.log(stijlen); // ["rap", "reggae", "blues", "klassiek", "rock-n-roll"]

/*
Lussen
*/
// De klassieke manier
for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// For .. of loop
for (const f of fruit) {
  console.log(f);
}
// orange
// pear
// kiwi
// melon

// Elementen verwijderen
// Verwijder het element op positie 1
delete fruit[1];
console.log(fruit); // ["orange", empty, "kiwi", "melon"]

// De functie splice
// Verwijder 2 elementen vertrekkend van positie 1 en voeg "pineapple", "strawberry", "blueberry" in
// De verwijderde elementen worden geretourneerd
fruit = ["orange", "apple", "kiwi", "melon"];
console.log(fruit.splice(1, 2, "pineapple", "strawberry", "blueberry")); // ["apple"", "kiwi"]
console.log(fruit); // ["orange", "pineapple", "strawberry", "blueberry", "melon"]

// De functie toSpliced is de 'copying' versie van splice
// Verwijder 2 elementen vertrekkend van positie 1 en voeg "pineapple", "strawberry", "blueberry" in
// De verwijderde elementen worden geretourneerd
fruit = ["orange", "apple", "kiwi", "melon"];
const splicedFruit = fruit.toSpliced(
  1,
  2,
  "pineapple",
  "strawberry",
  "blueberry"
);
console.log(fruit); // ["orange", "apple", "kiwi", "melon"];
console.log(splicedFruit); // ["orange", "pineapple", "strawberry", "blueberry", "melon"]

// De functie slice retourneert een nieuwe array waarbij alle items gekopieerd worden
// vanaf de startindex tot (niet tot en met) de eindindex
console.log(fruit.slice(2, 5)); // ["kiwi", "melon"]
console.log(splicedFruit.slice(2, 5)); // ["strawberry", "blueberry", "melon"]

// Zoeken in een array
// De functie indexOf(item, from) zoekt naar item startend van positie from (default waarde 0)
// en retourneert de index waar het gezochte item gevonden werd. Anders wordt er -1 geretourneerd
console.log(fruit.indexOf("blueberry")); // 3
console.log(fruit.indexOf("orange")); // -1

// De functie lastIndexOf(item, from) doet hetzelfde maar zoekt van rechts naar links
console.log(fruit.lastIndexOf("blueberry")); // 3
console.log(fruit.lastIndexOf("orange")); // -1

// De functie includes(item, from) zoekt naar item startend van positie from
// en retourneert true wanneer het gezochte item werd gevonden
console.log(fruit.includes("blueberry")); // true
console.log(fruit.includes("blueberry", 4)); // false
console.log(fruit.includes("orange")); // false

// De functie reverse keert de volgorde van de elementen in de array om
fruit = ["orange", "apple", "kiwi", "melon"];
fruit.reverse();
console.log(fruit); // ["melon", "kiwi", "apple", "orange"]

// De functie toReversed is de copying versie van de functie reverse()
fruit = ["orange", "apple", "kiwi", "melon"];
const reversedFruit = fruit.toReversed();
console.log(fruit); // ["orange", "apple", "kiwi", "melon"]
console.log(reversedFruit); // ["melon", "kiwi", "apple", "orange"]

// De functie split splitst de meegegeven string op in stukken op basis van het opgegeven scheidingsteken
const namen = "Bilbo, Gandalf, Nazgul";
const arrNamen1 = namen.split(",");
console.log(arrNamen1); // ["Bilbo", " Gandalf", " Nazgul"]

// De split methode heeft een optioneel tweede argument, namelijk de maximumlengte van de array
// Als dit tweede argument opgegeven wordt, worden alle extra elementen genegeerd;
const arrNamen2 = namen.split(",", 2);
console.log(arrNamen2); // ["Bilbo", " Gandalf"]

const str = "test";
console.log(str.split("")); // ["t", "e", "s", "t"]

// De functie join is de omgekeerde bewerking. De functie join creëert een join waarbij
// de items gescheiden worden door het opgegeven scheidingsteken
const arrNamen3 = ["Bilbo", "Gandalf", "Nazgul"];
const strNamen3 = arrNamen3.join(";");
console.log(strNamen3); // Bilbo;Gandalf;Nazgul
