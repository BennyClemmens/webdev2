/**
 * Vraag 2
 * Een string bevat twee getallen die van elkaar gescheiden zijn door een min-teken.
 * Haal het tweede getal uit de string en tel er 10 bij op.
 * Je code moet algemeen bruikbaar zijn. Ze moet bijvoorbeeld ook werken als het min-teken verplaatst wordt.
 * In het onderstaande geval moet er afgeprint worden in de console: Het resultaat is 4869
 */

// const orderNumber = '14284-4859';

/* Oplossing */
"use strict";
const orderNumber = "14284-4859";
const indexOfSecondNumber = orderNumber.indexOf("-") + 1;
// Je gebruikt beter substring() ipv substr() => MDN
// De expliciete conversie van de string naar een number met behulp van de Number-functie
// is hier wel degelijk nodig.
const res = Number(orderNumber.substring(indexOfSecondNumber)) + 10;
console.log(`Het resultaat is ${res}`);
