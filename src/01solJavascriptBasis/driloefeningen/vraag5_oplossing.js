/**
 * Vraag 5
 * Waarom wordt in onderstaand programma  console.log() niet uitgevoerd?
 */
"use strict";
const a = "5";
const b = 5;
/* Oplossing */
// != en == voeren een 'type conversion' uit vooraleer te vergelijken.
// !== en === doen dit niet. Indien het 'data type' verschilt retourneren ze false.
// Gebruik bij voorkeur !== en ===, tenzij je weet wat je doet...
if (a !== b) {
  console.log(`De string '5' is verschillend van het getal 5.`);
}
