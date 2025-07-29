/*
Declareer een klasse Speler in een aparte module met volgende members:

OK #aantalDobbelstenen: private static variabele met waarde 5, voorzie een getter
OK #naam: de naam van de speler, wordt ingesteld via een parameter van de constructor; voorzie een getter
OK #score: de totale score van de reeds gespeelde beurten, voorzie een getter
OK #dobbelstenen: een array van dobbelstenen, voorzie een getter
OK constructor: na constructie van een Speler werd zijn naam correct ingesteld via de parameter,
OK  staat zijn score op 0,
OK  en bevat #dobbelstenen 5 (i.e. #aantalDobbelstenen) nieuwe Dobbelstenen
OK speel: methode waarbij alle dobbelstenen uit #dobbelstenen worden gerold en de score wordt verhoogd volgens de domeinregels
*/

import Dobbelsteen from "./DobbelSteen.js";

export default class Speler {
  static #aantalDobbelstenen = 5; // gelijk voor alle spelers...
  #naam;
  #score;
  #dobbelstenen;

  constructor(naam) {
    this.#naam = naam;
    this.#score = 0;
    this.#dobbelstenen = [];
    for (let index = 0; index < Speler.aantalDobbelstenen; index++) {
      this.#dobbelstenen.push(new Dobbelsteen());
    }
  }

  static get aantalDobbelstenen() {
    // om een static prop te halen => static getter ... ?
    return Speler.#aantalDobbelstenen;
  }

  get naam() {
    return this.#naam;
  }

  get score() {
    return this.#score;
  }

  get dobbelstenen() {
    return this.#dobbelstenen;
  }

  speel() {
    for (const dobbelsteen of this.dobbelstenen) {
      dobbelsteen.rol();
      // tel de ogen van de gerolde dobbelstenen op bij de score
      // domeinregels:
      // 1. Als de speler een 1 gooit, krijgt hij 100 punten.
      // 2. Als de speler een 5 gooit, krijgt hij 50 punten.
      // 3. Alle andere waarden leveren 0 punten op.
      this.#score +=
        dobbelsteen.aantalOgen === 1
          ? 100
          : dobbelsteen.aantalOgen === 5
          ? 50
          : 0;
    }
  }
}
