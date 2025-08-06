import VacaturesRepository from "./VacatureRepository.js";

export default class VdabComponent {
  #zoektermen = [];
  #vacaturesRepository;
  #storage;
  constructor() {
    this.#vacaturesRepository = new VacaturesRepository();
    this.#storage = window.localStorage;

    this.#initialize();
  }

  #initialize() {
    this.#getZoektermenFromStorage();

    const buttonZoektermen = document.getElementById("zoektermToevoegen");
    const textZoekterm = document.getElementById("zoekterm");
    const divMessage = document.getElementById("message");

    buttonZoektermen.addEventListener("click", () => {
      const zoekterm = textZoekterm.value.trim();
      if (zoekterm) {
        if (this.#zoektermen.includes(zoekterm)) {
          this.#setDivMessage(`${zoekterm} was al toegevoegd.`);
          return;
        }
        this.#voegZoektermToe(zoekterm);
        textZoekterm.value = "";
        return;
      }
      this.#setDivMessage("Gelieve een zoekterm in te vullen.");
    });

    this.#toHtml();
  }

  #setDivMessage(message) {
    const divMessage = document.getElementById("message");
    divMessage.innerText = message;
  }

  #voegZoektermToe(zoekterm) {
    this.#zoektermen.push(zoekterm);
    this.#setZoektermenInStorage();
    this.#toHtml();
  }

  #verwijderZoekterm(zoekterm) {
    //console.log(`Verwijder zoekterm: ${zoekterm}`);
    this.#zoektermen = this.#zoektermen.filter(
      (term) => term.toLowerCase() !== zoekterm.toLowerCase()
    ); // of een splice ....
    this.#setZoektermenInStorage();
    this.#toHtml();
  }

  #getZoektermenFromStorage() {
    this.#zoektermen =
      JSON.parse(this.#storage.getItem("VDABZoektermen")) || [];
  }

  #setZoektermenInStorage() {
    try {
      this.#storage.setItem("VDABZoektermen", JSON.stringify(this.#zoektermen));
    } catch (error) {
      if (error.name === "QuotaExceededError") {
        alert("LocalStorage quota exceeded. Consider clearing some data.");
      }
      console.error(
        "Fout bij het opslaan van zoektermen in localStorage:",
        error
      );
    }
  }

  #toHtml() {
    this.#setDivMessage("");
    this.#zoektermenToHtml();
    this.#vacaturesToHtml();
  }

  #zoektermenToHtml() {
    const divZoektermen = document.getElementById("zoektermen");
    divZoektermen.innerHTML = "";
    this.#zoektermen.forEach((zoekterm) => {
      const spanElement = document.createElement("span");
      spanElement.innerText = zoekterm;
      const imgKruis = document.createElement("img");
      imgKruis.src = "images/destroy.png";
      imgKruis.id = zoekterm;
      imgKruis.alt = `Verwijder zoekterm ${zoekterm}`;

      imgKruis.addEventListener("click", () => {
        this.#verwijderZoekterm(zoekterm); // hoisting?
      });

      spanElement.appendChild(imgKruis);

      divZoektermen.appendChild(spanElement);
    });
  }

  #vacaturesToHtml() {
    document.getElementById("resultaat").innerHTML = "";
    this.#vacaturesRepository
      .filterOpZoekTermen(this.#zoektermen)
      .forEach((vacature) => {
        const divElement = document.createElement("div");
        const h2Element = document.createElement("h2");
        h2Element.innerText = vacature.titel;
        h2Element.setAttribute("class", "vacatureTitel");
        const h3Element = document.createElement("h3");
        h3Element.innerText = vacature.bedrijf + " - " + vacature.plaats;
        const h4Element1 = document.createElement("h4");
        h4Element1.innerText = "Functieomschrijving";
        const pElement = document.createElement("p");
        pElement.innerText = vacature.functieomschrijving;
        const h4Element2 = document.createElement("h4");
        h4Element2.innerText = "Profiel";
        const ulElement = document.createElement("ul");
        vacature.profiel.forEach((item) => {
          const liElement = document.createElement("li");
          liElement.innerText = item;
          ulElement.appendChild(liElement);
        });
        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element1);
        divElement.appendChild(pElement);
        divElement.appendChild(h4Element2);
        divElement.appendChild(ulElement);
        document.getElementById("resultaat").appendChild(divElement);
      });
  }
}
