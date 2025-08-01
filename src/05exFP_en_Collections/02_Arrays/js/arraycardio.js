"use strict";
// Source: javascript30 course by Wes Bos
// Get your shorts on - this is an array workout!
// ## Array Cardio
// Some data we can work with
const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];
const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William",
];
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(({ year }) => year >= 1500 && year < 1600);
console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map(({ first, last }) => `${first} ${last}`);
console.table(fullNames);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });
const ordered = inventors.toSorted((a, b) => a.year - b.year);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce(
  (acc, { passed, year }) => acc + (passed - year),
  0
);
console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.toSorted((firstInventor, secondInventor) => {
  const secondAge = secondInventor.passed - secondInventor.year;
  const firstAge = firstInventor.passed - firstInventor.year;
  return secondAge - firstAge;
});
console.table(oldest);
//console.table(inventors);

// 6. Sort Exercise
// Create a copy of the array people which holds people alphabetically by last name

// const alpha = people.toSorted((lastOne, nextOne) => {
//   const [aLast] = lastOne.split(", ");
//   const [bLast] = nextOne.split(", ");
//   return aLast.localeCompare(bLast);
// });

const alpha = people.toSorted((prev, next) => {
  const [prevLastname] = prev.split(", ");
  const [nextLastname] = next.split(", ");
  return prevLastname.localeCompare(nextLastname); // is eigenlijk al zo gerangschikt
});
console.log(alpha);

// 7. Reduce Exercise
// Sum up the instances of each of these. In other words, how many times does `car`,`truck`, etc. exist in the array?
// The result should be the following:
//const result = {
//  bike: 2,
//  car: 5,
//  pogostick: 1,
//  truck: 3,
//  van: 2,
//  walk: 2,
//}
// TIP: start with an empty object and add properties / keys to the object.

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];
const transportation = function (obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
};
const result = data.reduce(transportation, {});
console.log(result);
//console.log(transportation);

const transportationBis = function (obj, item) {
  obj[item] = obj[item] ?? 0;
  obj[item]++;
  return obj;
};
const resultBis = data.reduce(transportationBis, {});
console.log(resultBis);

const family = [
  { name: "Wes", year: 1988 },
  { name: "Kait", year: 1986 },
  { name: "Irv", year: 1970 },
  { name: "Lux", year: 2015 },
];

const comments = [
  { text: "Love this!", id: 523423 },
  { text: "Super good", id: 823423 },
  { text: "You are the best", id: 2039842 },
  { text: "Ramen is my fav food ever", id: 123523 },
  { text: "Nice Nice Nice!", id: 542328 },
];

// 8. Some and Every Checks
// Array.prototype.some() // is at least one person 19?
// const isAdult = family.some(function(person) {
//   const currentYear = (new Date()).getFullYear();
//   if(currentYear - person.year >= 19) {
//     return true;
//   }
// });
const isAdult = family.some(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ isAdult });
// Array.prototype.every() // is everyone 19?
const allAdults = family.every(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log({ allAdults });

const adults = family.filter(
  (person) => new Date().getFullYear() - person.year >= 19
);
console.log(adults);

//9. Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const comment =
  comments.find((comment) => comment.id === 823423) || "Comment not found";
console.log(comment);

//10.  Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
console.table(comments);
const index = comments.findIndex((comment) => comment.id === 823423);
console.log(index);

if (index !== -1) {
  comments.splice(index, 1);
}
console.table(comments);
