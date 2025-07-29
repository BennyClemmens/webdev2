import Speler from "./Speler.js";
/*
Declareer een klasse Spel met volgende properties:

OK #spelers: een array van Speler-objecten; de namen van de spelers worden via de constructor aangeleverd
OK #spelerAanZet: initieel de eerste speler uit de lijst van spelers; voorzie een getter
OK constructor: maak voor elke gegeven spelersnaam (parameter) een Speler-objectje en stop deze in de array #spelers
OK aantalSpelers: een getter die de lengte van de spelers-array retourneert
OK heeftWinaar: een getter die true retourneert indien 1 van de spelers een score heeft >= 10000
(tip: tijdens het testen van je spel wil je deze waarde waarschijnlijk iets lager zetten)
OK scoreOverzicht: een getter die een string retourneert met het overzicht van de spelers en hun score (zie afbeelding scorebord in de inleiding van de oefening)
OK speel: methode die, indien er nog geen winnaar is, de speel methode van de spelerAanzet aanroept
OK bepaalVolgendeSpeler: methode die, indien er nog geen winnaar is, de volgende spelerAanZet instelt 
  (1 voor 1 komen de spelers aan beurt, na de laatste speler is de eerste speler weer aan de beurt)

*/

export default class Spel {
  static #winaarScore = 1000; // domeinregel, kan later aangepast worden
  #spelers = [];
  #spelerAanZet;

  constructor(namen) {
    for (const naam of namen) {
      this.#spelers.push(new Speler(naam));
    }
    this.#spelerAanZet = this.#spelers[0];
  }

  get spelerAanZet() {
    return this.#spelerAanZet;
  }

  get aantalSpelers() {
    return this.#spelers.length;
  }

  get heeftWinaar() {
    // nu nog geen stream functie :)
    for (const speler of this.#spelers) {
      if (speler.score >= Spel.#winaarScore) {
        return true;
      }
    }
    return false;
  }

  get scoreOverzicht() {
    let overzicht = "";
    for (const speler of this.#spelers) {
      overzicht += `${speler.naam} = ${speler.score}\n`;
    }
    return overzicht;
  }

  speel() {
    if (!this.heeftWinaar) {
      this.#spelerAanZet.speel();
    }
  }

  bepaalVolgendeSpeler() {
    if (!this.heeftWinaar) {
      this.#spelerAanZet =
        this.#spelers[
          (this.#spelers.indexOf(this.#spelerAanZet) + 1) % this.aantalSpelers
        ];
    }
  }
}
