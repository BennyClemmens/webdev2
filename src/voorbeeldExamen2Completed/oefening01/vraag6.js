'use strict';
/**
 * ===== Vraag 6 =====
 * Bij deze vraag moet je geen foutafhandelingscode toevoegen.
 *
 * 6.1 Importeer de functies asyncGetChapter1, asyncGetChapter2, asyncGetChapter3
 * uit de module simulate-as.js (map modules)
 *
 * 6.2 Beeld de 'resolve value' van de functie asyncGetChapter1 af in de console,
 * zonder gebruik te maken van await.
 *
 * 6.3 Voer de drie asynchrone functies parallel uit en injecteer de
 * resultaten in de correcte volgorde, in de webpagina vraag6.html.
 * Ongeveer 2 seconden na het laden van het script moet de webpagina
 * er uitzien als in vraag6.png
 */

// Oplossing 6.1
// prettier-ignore
import { asyncGetChapter1, asyncGetChapter2, asyncGetChapter3 } from './modules/simulate-as.js';

// Oplossing 6.2
asyncGetChapter1().then((html) => console.log(html));

// Oplossing 6.3
const promiseArray = [
  asyncGetChapter1(),
  asyncGetChapter2(),
  asyncGetChapter3(),
];
Promise.all(promiseArray).then((resArray) => {
  resArray.forEach((res) => boektekst.insertAdjacentHTML('beforeend', res));
});
