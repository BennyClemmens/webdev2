'use strict';
/**
 * ===== Vraag 4 [9 punten]=====
 * Definieer een class Temperature met één private property celcius
 * om de temperatuur op te slaan.
 *   T-fahrenheit = T-celcius * 1.8 + 32.
 *   Voorbeelden:
 *     25 celcius is 77 fahrenheit
 *     95 fahrenheit is 35 celcius
 * Definieer een getter voor celcius.
 * Definieer een getter en setter voor fahrenheit
 * zodat onderstaand voorbeeld het gewenste resultaat oplevert.
 */

// Oplossing

// Voorbeeld
const temp = new Temperature(25); // 25 celcius
console.log(temp.fahrenheit); // 77
temp.fahrenheit = 95;
console.log(temp.celcius); // 35
