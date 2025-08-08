export default class Country {
  #countryName;
  #capital;
  #region;
  #flag;

  constructor(co, ca, re, fl) {
    this.#countryName = co;
    this.#capital = ca;
    this.#region = re;
    this.#flag = fl;
  }

  get countryName() {
    return this.#countryName;
  }

  get capital() {
    return this.#capital;
  }

  get region() {
    return this.#region;
  }

  get flag() {
    return this.#flag;
  }
}
