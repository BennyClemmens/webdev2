import Speler from "./Speler.js";

export default class Spel {
  static #winaarScore = 1000; // domeinregel, kan later aangepast worden
  #spelers = [];
  #spelerAanZet;
  constructor(spelersNamen) {
    // for (const naam of spelersNamen) this.#spelers.push(new Speler(naam));
    // this.#spelerAanZet = this.#spelers[0];
    this.#spelers = spelersNamen.map((naam) => new Speler(naam));
    this.#spelerAanZet = this.#spelers[0]; // de eerste speler is aan zet
  }

  // constructor: gebruik de map methode om de parameter spelersnamen (een array van Strings)
  // om te vormen tot een array van Speler-objecten.
  // Ken het resultaat toe aan de #spelers property.

  get spelerAanZet() {
    return this.#spelerAanZet;
  }

  get heeftWinnaar() {
    // for (const s of this.#spelers) {
    //   if (s.score >= 1000) return true;
    // }
    // return false;
    return this.#spelers.some(({ score }) => score >= Spel.#winaarScore);
  }
  // heeftWinnaar: gebruik some

  get scoreOverzicht() {
    // let overzicht = '';
    // for (const s of this.#spelers) {
    //   overzicht += `${s.naam}: ${s.score}\n`;
    // }
    // return overzicht;
    return this.#spelers.reduce(
      (pv, { naam, score }) => `${pv}${naam}: ${score}\n`,
      ""
    );
  }
  // scoreOverzicht: gebruik reduce

  speel() {
    if (!this.heeftWinnaar) this.spelerAanZet.speel();
  }

  bepaalVolgendeSpeler() {
    if (!this.heeftWinnaar) {
      const indexNext =
        (this.#spelers.indexOf(this.#spelerAanZet) + 1) % this.#spelers.length;
      this.#spelerAanZet = this.#spelers[indexNext];
    }
  }
}
