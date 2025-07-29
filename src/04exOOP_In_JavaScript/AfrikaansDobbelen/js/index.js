/*
Het bestand index.js is het startpunt van onze applicatie. De init methode start de applicatie op door

de klasse AfrikaansDobbelenComponent te importeren
een nieuwe AfrikaansDobbelenComponent aan te maken
*/

import AfrikaansDobbelenComponent from "./AfrikaansDobbelenComponent.js";

function init() {
  const afrikaansDobbelenComponent = new AfrikaansDobbelenComponent();
}

/*
Zorg dat wanneer het load event van window afgevuurd wordt, de functie init aangeroepen wordt.
Deze code plaats je in index.js
*/

window.onload = init;
