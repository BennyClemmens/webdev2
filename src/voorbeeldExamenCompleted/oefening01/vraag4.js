'use strict';
/**
 * ===== Vraag 4 =====
 * Het werpen van 1 dart in een dartsboard wordt als volgt bijgehouden: [ring, value]
 *  - mogelijke waarden voor ring: 'none', double' of 'triple'
 *  - mogelijke waarden voor value: geheel getal in interval [1, 20]
 *
 * Een shot bevat het resultaat van het werpen van 1 tot 3 pijltjes
 *  - de variabelen shot1, shot2 en shot3 zijn voorbeelden hiervan
 *
 * 4.1 Implementeer de functie giveTotal(shot) die het totaal van een gegeven shot retourneert.
 * Het totaal wordt berekend door de som te maken van
 * de waarde van elke dart die deel uitmaakt van de worp.
 * De waarde van een dart is gelijk aan
 *  - de value indien ring gelijk is aan 'single'
 *  - de value * 2 indien ring gelijk is aan 'double'
 *  - de value * 3 indien ring gelijk is aan 'triple'
 *
 * 4.2 Implementeer de functie isEndOfLeg(shot, amountToClear).
 * Deze functie retourneert true indien
 *  - de ring van de laatste dart in shot gelijk is aan 'double' én
 *  - het totaal van shot gelijk is aan amountToClear
 * in andere gevallen retourneert de functie false
 **/

const shot1 = [
  ['single', 18],
  ['triple', 20],
  ['double', 20]
];

const shot2 = [
  ['single', 16],
  ['double', 15]
];

const shot3 = [
  ['single', 8],
  ['single', 8],
  ['triple', 10]
];

/* 4.1 Modeloplossing */
function giveTotal(shot) {
  return shot.reduce(
    (acc, [d, v]) =>
      acc + (d === 'triple' ? v * 3 : d === 'double' ? v * 2 : v),
    0
  );
}

/* 4.2 Modeloplossing */
function isEndOfLeg(shot, amountToClear) {
  return (
    shot[shot.length - 1][0] === 'double' && giveTotal(shot) === amountToClear
  );
}

/* Voorbeeld uitvoer */
console.log(giveTotal(shot1)); // 118
console.log(giveTotal(shot2)); // 46
console.log(giveTotal(shot3)); // 46
console.log(isEndOfLeg(shot1, 118)); // true
console.log(isEndOfLeg(shot1, 115)); // false
console.log(isEndOfLeg(shot2, 46)); // true
console.log(isEndOfLeg(shot3, 46)); // false
