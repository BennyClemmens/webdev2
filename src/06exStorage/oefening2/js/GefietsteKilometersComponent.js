import GefietsteKilometersRepository from "./GefietsteKilometersRepository.js";

export default class GefietsteKilometersComponent {
  #gefietsteKilometersRepository;
  #storage;
  constructor() {
    /*
Constructor van de GefietsteKilometersComponent
Het laatst gekozen jaar wordt opgehaald uit de storage en ingesteld als waarde van de keuzelijst met id jaar
De tekstvakken worden met de correcte waarden dynamisch opgevuld voor dat jaar (functie #gefietsteKilometersToHtml)
Als een ander jaar gekozen wordt in de keuzelijst met id jaar
De tekstvakken met de correcte waarden worden dynamisch opgevuld voor dat jaar (functie #gefietsteKilometersToHtml)
Het laatst gekozen jaar wordt bijgewerkt in de storage
Als op de knop opslaan geklikt wordt, moet de repository bijgewerkt worden.
*/
    this.#gefietsteKilometersRepository = new GefietsteKilometersRepository();
    this.#storage = window.localStorage;

    const jaarSelect = document.getElementById("jaar");
    const opslaan = document.getElementById("opslaan");

    this.#jarenToHtml();
    this.#getJaarFromStorage();
    this.#gefietsteKilometersToHtml(parseInt(jaarSelect.value));

    jaarSelect.onchange = () => {
      this.#gefietsteKilometersToHtml(parseInt(jaarSelect.value));
      this.#setJaarInStorage();
    };

    opslaan.onclick = () => {
      let nieuw = [];
      for (let i = 0; i < 12; i++) {
        const inputElement = document.getElementById(`${i}`);
        if (inputElement) {
          nieuw.push(parseInt(inputElement.value) || 0);
        }
      }
      this.#gefietsteKilometersRepository.wijzigGefietsteKilometers(
        jaarSelect.value,
        nieuw
      );
      this.#gefietsteKilometersToHtml(jaarSelect.value);
    };
  }

  /* De keuzelijst met jaren dynamisch genereren */
  #jarenToHtml() {
    this.#gefietsteKilometersRepository.geefJaren().forEach((value) => {
      const optionElement = document.createElement("option");
      optionElement.setAttribute("value", value);
      const optionTekst = document.createTextNode(value);
      optionElement.appendChild(optionTekst);
      document.getElementById("jaar").appendChild(optionElement);
    });
  }

  /* De tekstvakken dynamisch invullen */
  /*
  #gefietsteKilometersToHtml
De tekstvakken krijgen de correcte waarde voor het meegegeven jaar (parameter)
  */
  #gefietsteKilometersToHtml(jaar) {
    const kilometers =
      this.#gefietsteKilometersRepository.geefGefietsteKilometersVoorEenJaar(
        jaar
      );
    // const bedragPerKilometer = this.#gefietsteKilometersRepository.geefBedragPerKilometerVoorEenJaar(jaar);

    kilometers.forEach((value, index) => {
      const inputElement = document.getElementById(`${index}`);
      if (inputElement) {
        inputElement.value = value;
      }
    });
  }

  /*
#getJaarFromStorage
Als de storage een sleutel jaarGefietsteKilometers bevat, moet de keuzelijst met id jaar deze waarde krijgen
*/
  #getJaarFromStorage() {
    const jaar = this.#storage.getItem("jaarGefietsteKilometers");
    if (jaar) {
      document.getElementById("jaar").value = jaar;
    }
  }
  /*
#setJaarInStorage
Deze functie wordt gebruikt om het gekozen jaar weg te schrijven naar de storage. De gebruikte sleutel is jaarGefietsteKilometers
*/
  #setJaarInStorage() {
    try {
      const jaar = document.getElementById("jaar").value;
      this.#storage.setItem("jaarGefietsteKilometers", jaar);
    } catch (error) {
      console.error("Fout bij het wegschrijven van het jaar:", error);
    }
  }
}
