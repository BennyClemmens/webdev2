export default class Fruit {
  #naam;
  #koolhydraten;
  #eiwit;
  #vet;
  #energie;

  constructor(naam, koolhydraten, eiwit, vet, energie) {
    this.#naam = naam;
    this.#koolhydraten = koolhydraten;
    this.#eiwit = eiwit;
    this.#vet = vet;
    this.#energie = energie;
  }

  get naam() {
    return this.#naam;
  }
  get koolhydraten() {
    return this.#koolhydraten;
  }
  get eiwit() {
    return this.#eiwit;
  }
  get vet() {
    return this.#vet;
  }
  get energie() {
    return this.#energie;
  }
}
