"use strict";

const myBicycle = {
  speed: 30,
  gear: 1,
  frameMaterial: "carbon fibre",
};

// Voeg een methode accelerate toe aan myBicycle
// De methode heeft 1 parameter, een percentage waarmee
// de speed van myBicycle moet worden aangepast
myBicycle.accelerate = function (percentage) {
  this.speed = this.speed * (1 + percentage / 100);
};

// Laat de fiets 25% versnellen. Log de speed voor en na
// de methode aanroep.
console.log(`Speed before acceleration: ${myBicycle.speed}`);
myBicycle.accelerate(25);
console.log(`Speed after acceleration: ${myBicycle.speed}`);

// Voeg een methode toe die de snelheid beoordeelt
// De methode retourneert een string
// speed [0..10[ 'Walking...'
// speed [10..20[ 'Brakes on...'
// speed [20..40[ 'Pushing...'
// speed [40..60[ 'Peleton style...'
// speed >= 60 'Sagan style...

myBicycle.evaluateSpeed = function () {
  return this.speed < 10
    ? "Walking..."
    : this.speed < 20
    ? "Brakes on..."
    : this.speed < 40
    ? "Pushing..."
    : this.speed < 60
    ? "Peleton style..."
    : "Sagan style...";
};

// Stel de speed van myBicycle in op 5
myBicycle.speed = 5;

// Test nu bovenstaande methode door in een lusje de speed in stapjes van 10%
// te verhogen (via de methode accelerate) en telkens de geretourneerde string te loggen.
// De iteratie stopt wanneer de speed van myBicycle hoger dan 100 is.
console.log(`Initial speed: ${myBicycle.speed}`);
while (myBicycle.speed <= 100) {
  console.log(`Current speed: ${myBicycle.speed}`);
  console.log(myBicycle.evaluateSpeed());
  myBicycle.accelerate(10);
}
console.log(`Final speed: ${myBicycle.speed}`);
