/**
 * Genereer een willekeurig geheel getal tussen 20 en 50 (grenzen inbegrepen)
 * en schrijf één van de volgende boodschappen naar de Console:
 *  Het willekeurig getal ligt in het interval [20,30[
 *  Het willekeurig getal ligt in het interval [30,40[
 *  Het willekeurig getal ligt in het interval [40,50]
 */

const willekeurigGetal = Math.floor(Math.random() * 31) + 20;

let interval;
if (willekeurigGetal < 30) {
  interval = "[20,30[";
} else if (willekeurigGetal < 40) {
  interval = "[30,40[";
} else {
  interval = "[40,50]";
}
console.log(
  `Het willekeurig getal (${willekeurigGetal}) ligt in het interval ${interval}`
);
