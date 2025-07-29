/*
OK 1. Maak in de map ‘OXO’ een submap genaamd js aan en maak hierin een bestand index.js aan.
*/

import OxoComponent from "./OxoComponent.js";

/*
5.
Declareer in index.js een init functie. In de functie doe je het volgende:

maak een instantie van de OxoComponent aan
Stel de init functie in als event handler voor het load event van window
*/

function init() {
  const oxoComponent = new OxoComponent();
}

window.onload = init;
