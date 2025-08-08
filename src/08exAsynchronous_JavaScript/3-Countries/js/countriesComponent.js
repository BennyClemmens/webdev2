import CountriesRepository from "./countriesRepository.js";

export default class CountriesComponent {
  #countriesRepository;
  #url;

  constructor() {
    //'./data/countries.json';
    //console.log("something to fetch the data");
    this.#url = "./data/countries.json";
    this.#countriesRepository = new CountriesRepository();
    //console.log(this.#countriesRepository);
    this.#initialiseHTML();
  }

  async #initialiseHTML() {
    await this.#getData();
    this.#setupSearchBox();
    this.#countriesToHTML(this.#countriesRepository.countries);
  }

  async #getData() {
    try {
      const response = await fetch(this.#url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      //console.log(data);

      data.forEach((c) => {
        this.#countriesRepository.addCountry(
          `${c.name} - ${c.nativeName}`,
          c.capital,
          c.region,
          c.flag
        );
      });

      //this.#countriesToHTML(this.#countriesRepository.countries);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }

  #setupSearchBox() {
    const searchBox = document.getElementById("search");
    searchBox.addEventListener("keyup", () => {
      const filteredCountries = this.#countriesRepository.filteredCountries(
        searchBox.value
      );
      this.#countriesToHTML(filteredCountries);
    });
    searchBox.focus();
  }

  // Beeld een doorgegeven countries-array af op de webpagina
  // (de countries-array kan alle countries landen bevatten
  // of de gefilterde landen)
  #countriesToHTML(countries) {
    console.log(countries);
    const tbodyEl = document.getElementById("countries");
    tbodyEl.innerHTML = ""; // Clear existing rows
    if (countries.length === 0) {
      const tr = document.createElement("tr");
      const td = document.createElement("td");
      td.colSpan = 4;
      td.textContent = "No countries found";
      tr.appendChild(td);
      tbodyEl.appendChild(tr);
      return;
    }
    countries.forEach(({ countryName, capital, region, flag }) => {
      const tr = document.createElement("tr");
      const tdcountryName = document.createElement("td");
      tdcountryName.textContent = countryName;
      const tdcapital = document.createElement("td");
      tdcapital.textContent = capital;
      const tdregion = document.createElement("td");
      tdregion.textContent = region;
      const tdflag = document.createElement("td");
      const imgflag = document.createElement("img");
      imgflag.src = flag;
      imgflag.alt = countryName;
      imgflag.width = 35;
      imgflag.height = 25;
      tdflag.insertAdjacentElement("afterbegin", imgflag);

      tr.insertAdjacentElement("beforeend", tdcountryName);
      tr.insertAdjacentElement("beforeend", tdcapital);
      tr.insertAdjacentElement("beforeend", tdregion);
      tr.insertAdjacentElement("beforeend", tdflag);

      tbodyEl.insertAdjacentElement("beforeend", tr);
    });
  }
}
