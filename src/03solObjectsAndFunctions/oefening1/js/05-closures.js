'use strict';
// Schrijf een functie makeStringRepeater
// De functie heeft 1 parameter, bv. nrOfTimes, die aangeeft hoeveel keer
// een string moet herhaald worden.
// De functie makeStringRepeater retourneert een functie. Deze functie heeft 1 parameter,
// i.e. een string, en retourneert de string, nrOfTimes aan elkaar geplakt

const makeStringRepeater = function (nrOfTimes) {
  return function (aString) {
    let result = aString;
    for (let i = 0; i < nrOfTimes - 1; i++) {
      result += aString;
    }
    return result;
  };
};

// // don't forget to use ES6 features...
// const makeStringRepeater = function(nrOfTimes) {
//   return function(aString) {
//     return aString.repeat(nrOfTimes);
//   };
// };

const stringDoubler = makeStringRepeater(2);
const stringTripler = makeStringRepeater(3);
console.log(stringDoubler('abc ')); // abc abc
console.log(stringTripler('def ')); // def def def
