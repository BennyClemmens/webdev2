'use strict';

const aRedBicycle = {
  speed: 30,
  gear: 1,
  color: 'red'
};

const aGreenBicycle = {
  speed: 15,
  gear: 3,
  color: 'green'
};

// Schrijf een functie swapColors die de kleur van twee bicycles wisselt
const swapColors = function (bike1, bike2) {
  // with auxiliary var
  // const aux = bike1.color;
  // bike1.color = bike2.color;
  // bike2.color = aux;

  // without auxiliary var
  [bike1.color, bike2.color] = [bike2.color, bike1.color];
};

// Schrijf een functie die een boolean retourneert
// die vertelt of twee bicycles dezelfde kleur hebben.
// Gebruik een arrow functie
const sameColor = (bike1, bike2) => bike1.color === bike2.color;

// Schrijf een functie met een kleur en een willekeurig aantal bicycles
// als parameters. De functie retourneert alle fietsen met de opgegeven kleur.
// Maak gebruik van de Array-methode filter, bekijk de documentatie op https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// Geef een arrow functie door als parameter voor filter
const getBikesWithColor = function (color, ...bicycles) {
  return bicycles.filter((element) => element.color === color);
};

swapColors(aRedBicycle, aGreenBicycle);
console.log(`myRedBicycle is now ${aRedBicycle.color}`);
console.log(`myGreenBicycle is now ${aGreenBicycle.color}`);

console.log(
  `aRedBicycle & aGreenBicycle ${
    sameColor(aRedBicycle, aGreenBicycle) ? '' : 'do not '
  }have the same color`
);

const redBikes = getBikesWithColor('red', aRedBicycle, aGreenBicycle);
console.log(redBikes);
