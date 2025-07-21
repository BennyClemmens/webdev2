import Uitgave from './Uitgave.js';
import { uitgaven } from './uitgavenArray.js';

export default class UitgavenRepository {
  #uitgaven = []; // array met Uitgave-objecten
  constructor() {
    this.#uitgavenOpvullen();
  }

  get uitgaven() {
    return this.#uitgaven;
  }

  #voegUitgaveToe(id, datum, bedrag, omschrijving, categorie) {
    this.#uitgaven.push(
      new Uitgave(id, datum, bedrag, omschrijving, categorie)
    );
  }

  #uitgavenOpvullen() {
    uitgaven.forEach(([id, datum, bedrag, omschrijving, categorie]) =>
      this.#voegUitgaveToe(id, datum, bedrag, omschrijving, categorie)
    );
  }

  geefCategorieen() {
    return [
      ...new Set(this.#uitgaven.map((uitgave) => uitgave.categorie).sort()),
    ];
  }

  totaalBedragUitgaven() {
    return this.#uitgaven.reduce(
      (totaal, uitgave) => totaal + uitgave.bedrag,
      0
    );
  }

  uitgavenPerCategorie(categorie) {
    return this.#uitgaven.reduce((totaal, uitgave) => {
      return uitgave.categorie === categorie
        ? (totaal += uitgave.bedrag)
        : totaal;
    }, 0);
  }
}
