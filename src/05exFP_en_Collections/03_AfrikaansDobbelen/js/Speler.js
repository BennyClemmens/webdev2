import Dobbelsteen from "./dobbelsteen.js";

export default class Speler {
  static #aantalDobbelstenen = 5;
  #naam;
  #score;
  #dobbelstenen;

  constructor(naam) {
    this.#naam = naam;
    this.#score = 0;
    this.#dobbelstenen = [];
    for (let i = 1; i <= Speler.aantalDobbelstenen; i++) {
      this.#dobbelstenen.push(new Dobbelsteen());
    }
  }

  static get aantalDobbelstenen() {
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
    this.#dobbelstenen.forEach((dobbelsteen) => dobbelsteen.rol());
    this.#score = this.#dobbelstenen.reduce(
      (previousValue, dobbelsteen) =>
        dobbelsteen.aantalOgen === 1
          ? previousValue + 100
          : dobbelsteen.aantalOgen === 5
          ? previousValue + 50
          : previousValue,
      this.score
    );
  }
}
