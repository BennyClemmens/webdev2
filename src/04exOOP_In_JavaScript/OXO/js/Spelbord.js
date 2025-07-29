/*
3. Maak in de submap js een bestand Spelbord.js aan.
Declareer in Spelbord.js een klasse Spelbord met volgende members

#bord: in de constructor wordt een tweedimensionale array aangemaakt en aan #bord toegekend. Elk element van de array bevat null.Maak ook een getter aan.
plaatsSymbool(symbool, rij, kol): een methode die het symbool op de juiste plaats op #bord plaatst
geef( rij, kol): een methode die het symbool op in die rij en kolom op het bord teruggeeft
exporteer de klasse
*/

export default class Spelbord {
  static #DIMENSIE = 3;
  #bord;

  constructor() {
    this.#bord = [];
    for (let i = 0; i < Spelbord.#DIMENSIE; i++) {
      this.#bord[i] = [];
      for (let j = 0; j < Spelbord.#DIMENSIE; j++) {
        this.#bord[i][j] = null;
      }
    }
  }

  get bord() {
    return this.#bord;
  }

  static get DIMENSIE() {
    return Spelbord.#DIMENSIE;
  }

  plaatsSymbool(symbool, rij, kol) {
    this.#bord[rij][kol] = symbool;
  }

  geef(rij, kol) {
    return this.#bord[rij][kol];
  }

  isVrij(rij, col) {
    return !Boolean(this.geef(rij, col));
  }

  bevatDrieOpEenRij(symbool, rij, kol) {
    const isDrieOpEenRij = function (drieCellen) {
      for (const s of drieCellen) if (s !== symbool || !s) return false;
      return true;
    };
    // horizontaal
    if (isDrieOpEenRij(this.#bord[rij])) return true;
    // verticaal
    const kolom = [];
    for (let r = 0; r < 3; r++) {
      kolom.push(this.#bord[r][kol]);
    }
    if (isDrieOpEenRij(kolom)) return true;
    // diagonalen
    const diagonaal1 = [];
    const diagonaal2 = [];
    for (let index = 0; index < 3; index++) {
      diagonaal1.push(this.#bord[index][index]);
      diagonaal2.push(this.#bord[index][2 - index]);
    }
    return isDrieOpEenRij(diagonaal1) || isDrieOpEenRij(diagonaal2);
  }

  get isVolzet() {
    for (const rij of this.#bord) for (const kol of rij) if (!kol) return false;
    return true;
  }
  /*
10. Finaliseer de klassen Spelbord en Spel.

Spelbord
voeg een methode bevatDrieOpEenrij(symbool, rij, kol) toe die retourneert of er al dan niet een drie op een rij wordt gevormd door het zetten van symbool op rij, kol
voeg een methode isVolzet() toe die retourneert of het bord al dan niet volledig opgevuld is 
*/
}
