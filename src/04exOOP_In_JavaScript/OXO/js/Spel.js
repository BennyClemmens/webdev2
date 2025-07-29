/*
7.
Declareer in een nieuw bestand Spel.js een klasse Spel met volgende properties

#spelbord: instantie van Spelbord, aan te maken in de constructor
#tePlaatsenSymbool: initieel ‘O’, voorzie een getter
#geplaatsteSymbool: initieel ‘X’, voorzie een getter
#winnaarsSymbool: initieel null, voorzie een getter
plaatsSymbool(rij, kol): methode die het te #plaatsenSymbool op rij, kolom zet op het spelbord en nadien #teplaatsenSymbool en #geplaatsteSymbool swapt.
Zorg dat dit niet gebeurt indien het bewuste vak op het spelbord niet vrij is. Voeg hiertoe een methode isVrij(rij, kol) toe aan Spelbord.
geefSymbool(rij, kol): methode die het symbool uit de rij en kolom teruggeeft
*/

import Spelbord from "./Spelbord.js";

export default class Spel {
  #spelbord;
  #tePlaatsenSymbool;
  #geplaatsteSymbool;
  #winnaarsSymbool;

  constructor() {
    this.#spelbord = new Spelbord();
    this.#tePlaatsenSymbool = "O";
    this.#geplaatsteSymbool = "X";
    this.#winnaarsSymbool = null;
  }

  get tePlaatsenSymbool() {
    return this.#tePlaatsenSymbool;
  }

  get geplaatsteSymbool() {
    return this.#geplaatsteSymbool;
  }

  get winnaarsSymbool() {
    return this.#winnaarsSymbool;
  }

  plaatsSymbool(rij, kol) {
    if (!this.isEindeSpel) {
      if (this.#spelbord.isVrij(rij, kol)) {
        this.#spelbord.plaatsSymbool(this.#tePlaatsenSymbool, rij, kol);
        [this.#tePlaatsenSymbool, this.#geplaatsteSymbool] = [
          this.#geplaatsteSymbool,
          this.#tePlaatsenSymbool,
        ];
        if (this.#spelbord.bevatDrieOpEenRij(this.geplaatsteSymbool, rij, kol))
          this.#winnaarsSymbool = this.geplaatsteSymbool;
      } else {
        console.log("vakje niet vrij");
      }
    }
  }

  geefSymbool(rij, kol) {
    return this.#spelbord.geef(rij, kol);
  }

  /*

  Spel
voeg een methode isEindeSpel() toe. 
Deze methode retourneert true als het bord volzet is of indien er een drie op een rij is gevormd
pas de methode plaatsSymbool(…) aan: er kan geen symbool geplaatst worden als het einde van het spel is bereikt;
als het einde van het spel wordt bereikt bij het plaatsen van een symbool dan wordt het winnaarsSymbool ingesteld
  */

  get isEindeSpel() {
    return this.#spelbord.isVolzet || this.winnaarsSymbool;
  }
}
