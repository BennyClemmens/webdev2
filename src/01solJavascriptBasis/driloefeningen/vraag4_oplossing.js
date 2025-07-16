/**
 * Genereer een willekeurig geheel getal tussen 20 en 50 (grenzen inbegrepen)
 * en schrijf één van de volgende boodschappen naar de Console:
 *  Het willekeurig getal ligt in het interval [20,30[
 *  Het willekeurig getal ligt in het interval [30,40[
 *  Het willekeurig getal ligt in het interval [40,50]
 */

/* Oplossing */
// We gebruiken Math.random() in combinatie met Math.floor()
// om willekeurige gehele getallen te genereren.
// We genereren eerst een willekeurig getal tussen 0 en 30 en
// tellen daarbij 20 op.
"use strict";
const randomNumber = Math.floor(Math.random() * 31) + 20;
let interval;
console.log(randomNumber);
if (randomNumber < 30) {
  interval = "[20,30[";
} else if (randomNumber < 40) {
  interval = "[30,40[";
} else {
  interval = "[40,50]";
}
console.log(`Het willekeurig getal ligt in het interval ${interval}`);
