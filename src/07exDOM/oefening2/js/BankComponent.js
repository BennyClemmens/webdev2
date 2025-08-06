import Canvas from "./Canvas.js";
import UitgavenRepository from "./UitgavenRepository.js";

export default class BankComponent {
  #canvasCategorieen;
  #storage;
  #aantalBezoeken;
  #uitgavenRepository;
  constructor() {
    this.#canvasCategorieen = new Canvas(50);
    this.#storage = window.localStorage;
    this.#aantalBezoeken = 1;
    this.#uitgavenRepository = new UitgavenRepository();

    this.#getAantalBezoekenFromStorage();
    this.#setAantalBezoekenInStorage();
    this.#toHtml();
  }

  #toHtml() {
    this.#tekstToHtml();
    this.#canvasCategorieen.tekenen(this.#uitgavenRepository);
  }

  #tekstToHtml() {
    const aantalBezoekenElement = document.getElementById("aantalBezoeken");
    aantalBezoekenElement.innerText = `${this.#aantalBezoeken}`;

    const divData = document.getElementById("data");
    this.#uitgavenRepository.uitgaven.forEach((uitgave) => {
      const uitgaveElement = document.createElement("div");
      uitgaveElement.className = "aankoop";
      const imgElement = document.createElement("img");
      imgElement.src = `images/${uitgave.categorie.toLowerCase()}.png`;
      const hElement = document.createElement("h4");
      hElement.innerText = `${uitgave.omschrijving.toUpperCase()} - €${
        uitgave.bedrag
      }`;
      const pElement = document.createElement("p");
      pElement.innerText = `${uitgave.datum.datumNotatie()}`;

      // uitgaveElement.innerHTML = `
      //   <p><strong>Id:</strong> ${uitgave.id}</p>
      //   <p><strong>Datum:</strong> ${new Date(uitgave.datum).datumNotatie()}</p>
      //   <p><strong>Bedrag:</strong> €${uitgave.bedrag.toFixed(2)}</p>
      //   <p><strong>Omschrijving:</strong> ${uitgave.omschrijving}</p>
      //   <p><strong>Categorie:</strong> ${uitgave.categorie}</p>
      // `;
      divData.appendChild(uitgaveElement);
      uitgaveElement.appendChild(imgElement);
      uitgaveElement.appendChild(hElement);
      uitgaveElement.appendChild(pElement);
    });
  }

  #getAantalBezoekenFromStorage() {
    const aantalBezoeken = this.#storage.getItem("aantalBezoeken");
    this.#aantalBezoeken = aantalBezoeken
      ? parseInt(aantalBezoeken, 10) + 1
      : 1;
  }

  #setAantalBezoekenInStorage() {
    try {
      this.#storage.setItem("aantalBezoeken", this.#aantalBezoeken);
    } catch (error) {
      console.error(
        "Fout bij het opslaan van aantalBezoeken in localStorage:",
        error
      );
    }
  }
}

Date.prototype.datumNotatie = function () {
  const dagen = [
    "Zondag",
    "Maandag",
    "Dinsdag",
    "Woensdag",
    "Donderdag",
    "Vrijdag",
    "Zaterdag",
  ];
  return `${dagen[this.getDay()]} ${this.getDate()}/${
    this.getMonth() + 1
  }/${this.getFullYear()}`;
};
