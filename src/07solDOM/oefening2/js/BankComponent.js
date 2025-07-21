import Canvas from './Canvas.js';
import UitgavenRepository from './UitgavenRepository.js';

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
    document.getElementById('aantalBezoeken').innerHTML = this.#aantalBezoeken;

    document.getElementById('data').innerHTML = '';
    this.#uitgavenRepository.uitgaven.forEach((uitgave) => {
      document.getElementById('data').insertAdjacentHTML(
        'beforeend',
        `<div class="aankoop">
        <img src="images/${uitgave.categorie}.png">
        <h4>${uitgave.omschrijving.toUpperCase()} - €${uitgave.bedrag}</h4>
        <p>${uitgave.datum.datumNotatie()}</p>
      </div>`
      );
    });
  }

  #getAantalBezoekenFromStorage() {
    if (this.#storage.getItem('aantalBezoeken')) {
      this.#aantalBezoeken = parseInt(this.#storage.getItem('aantalBezoeken')) + 1;
    } else {
      this.#aantalBezoeken = 1;
    }
  }

  #setAantalBezoekenInStorage() {
    try {
      this.#storage.setItem('aantalBezoeken', this.#aantalBezoeken);
    } catch (e) {
      if (e.name === 'QuotaExceededError') alert('Out of storage!');
    }
  }
}

Date.prototype.datumNotatie = function () {
  const dagen = ['Zondag', 'Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag'];
  return `${dagen[this.getDay()]} ${this.getDate()}/${this.getMonth() + 1}/${this.getFullYear()}`;
};
