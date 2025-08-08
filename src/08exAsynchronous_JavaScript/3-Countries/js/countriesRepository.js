import Country from "./country.js";
export default class CountriesRepository {
  #countries = [];

  get countries() {
    return this.#countries;
  }

  addCountry(name, capital, region, flag) {
    this.#countries.push(new Country(name, capital, region, flag));
  }

  filteredCountries(searchString) {
    return searchString
      ? this.countries.filter((c) =>
          c.countryName.toLowerCase().includes(searchString.toLowerCase())
        )
      : this.countries;
  }
}
