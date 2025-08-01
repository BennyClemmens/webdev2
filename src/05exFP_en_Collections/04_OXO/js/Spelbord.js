export default class Spelbord {
  #bord;
  constructor() {
    this.#bord = [];
    for (let rij = 0; rij < 3; rij++) {
      this.#bord[rij] = [];
      for (let kol = 0; kol < 3; kol++) {
        this.#bord[rij][kol] = "";
      }
    }
  }

  get bord() {
    return this.#bord;
  }

  plaatsSymbool(symbool, rij, kol) {
    this.#bord[rij][kol] = symbool;
  }

  geefSymbool(rij, kol) {
    return this.#bord[rij][kol];
  }

  isVrij(rij, kol) {
    return !this.#bord[rij][kol];
  }

  bevatDrieOpEenRij(symbool, rij, kol) {
    /*
    herschrijf de functie isDrieOpEenRij;
    deze functie checkt of elke cel in een ééndimensionale array (parameter drieCellen) de parameter symbool bevat; gebruik every
    */
    const isDrieOpEenRij = function (drieCellen) {
      //for (const s of drieCellen) if (s !== symbool || !s) return false;
      //return true;
      return drieCellen.every((cel) => cel === symbool);
    };
    // horizontaal
    if (isDrieOpEenRij(this.#bord[rij])) return true;
    // verticaal
    // const kolom = [];
    // for (let r = 0; r < 3; r++) {
    //   kolom.push(this.#bord[r][kol]);
    // }
    const kolom = this.#bord.reduce((pv, rij) => pv.concat([rij[kol]]), []);
    if (isDrieOpEenRij(kolom)) return true;
    // diagonalen
    // const diagonaal1 = [];
    // const diagonaal2 = [];
    // for (let index = 0; index < 3; index++) {
    //   diagonaal1.push(this.#bord[index][index]);
    //   diagonaal2.push(this.#bord[index][2 - index]);
    // }
    // return isDrieOpEenRij(diagonaal1) || isDrieOpEenRij(diagonaal2);

    let diagonaal = this.#bord.reduce((pv, el, i) => pv.concat([el[i]]), []);
    if (isDrieOpEenRij(diagonaal)) return true;
    diagonaal = this.#bord.reduce((pv, el, i) => pv.concat([el[2 - i]]), []);
    if (isDrieOpEenRij(diagonaal)) return true;
    return false;
  }

  get isVolzet() {
    // for (const rij of this.#bord) for (const kol of rij) if (!kol) return false;
    // return true;
    /*
    maak gebruik van some of every...
    */
    return this.#bord.every((rij) => rij.every((kol) => kol));
  }
}
