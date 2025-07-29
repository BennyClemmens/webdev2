/*
4.
Maak in de submap js een bestand OxoComponent.js aan.
Declareer in OxoComponent.js een klasse OxoComponent met volgende members

OK #bord: instantie van Spelbord, aan te maken in de constructor
OK maak een methode #toHtml aan. We voorzien de code later.
in de constructor
  maak een instantie aan van het Spelbord en ken dit toe aan #bord
  haal alle img- elementen op en stop deze in een array, dit kan je als volgt doen
  const imgElementen = document.getElementsByTagName('img');
  overloop deze array imgElementen en definieer de onclick event handler voor elk element (gebruik de arrow functions):
    roep de methode plaatsSymbool aan van spelbord;
    als argument voor de parameter symbool geef je ‘O’ door,
    de argumenten voor de rij en kol parameters zal je uit het id van het img-element moeten halen.
    denk eraan dat arrays in JavaScript 0-based zijn en dat de id’s van de img-elementen 1-based zijn.
    roep de methode #toHtml aan
  roep de #toHtml methode aan
  de methode #toHtml:
  overloop alle rijen en kolommen van het bord.
  Voor elke cel (combinatie rij/kolom) haal je de bijhorende image op in de HTML pagina en stel je het src attribuut in.
  Als cel de waarde null bevat dan maak je gebruik van wit.png, anders van symbool.png
*/

/*
8.
Pas de klasse OxoComponent aan.

vervang de private property #bord door #spel, een instantie van Spel aan te maken in de constructor

in de constructor

instantieer een Spel ipv een Spelbord
zorg dat het img-element nu volgens het geplaatsteSymbool aangepast wordt (niet langer steeds een ‘O’). Maak gebruik van plaatsSymbool uit klasse Spel
pas #toHtml() aan.

In deze functie ga je de innerHTML van div-element met id message instellen:

Speler [s] is aan de beurt
waarbij [s] het tePlaatsenSymbool is.
Bovendien vraag je nu het symbool per vakje op via het spel.
*/

import Spelbord from "./Spelbord.js";
import Spel from "./Spel.js";

export default class OxoComponent {
  // #bord;
  #spel;

  constructor() {
    this.#spel = new Spel();
    const imgElementen = document.getElementsByTagName("img");
    for (const img of imgElementen) {
      img.onclick = (event) => {
        const id = event.target.id;
        const [rij, kol] = id.split("").map(Number);
        //this.#bord.plaatsSymbool("O", rij - 1, kol - 1); // Convert to 0-based index
        this.#spel.plaatsSymbool(rij - 1, kol - 1);
        this.#toHtml();
      };
    }
    this.#toHtml(); // eerste keer => allemaal blanco vakjes
  }

  #toHtml() {
    //console.log("TODO");
    const speler = document.getElementById("message");
    // speler.innerHTML = `Speler [${
    //   this.#spel.tePlaatsenSymbool
    // }] is aan de beurt`;

    for (let rij = 0; rij < Spelbord.DIMENSIE; rij++) {
      for (let kol = 0; kol < Spelbord.DIMENSIE; kol++) {
        //const cel = this.#bord.geef(rij, kol);
        const cel = this.#spel.geefSymbool(rij, kol);
        const id = (rij + 1).toString() + (kol + 1).toString();
        document.getElementById(id).src = `./images/${cel ? cel : "wit"}.png`;
        //this.#bord[i][j] = null;
      }
    }

    speler.innerText = this.#spel.winnaarsSymbool
      ? `Proficiat, speler ${this.#spel.winnaarsSymbool} wint`
      : this.#spel.isEindeSpel
      ? `Gelijkspel!`
      : `Speler ${this.#spel.tePlaatsenSymbool} is aan de beurt`;
  }
}
