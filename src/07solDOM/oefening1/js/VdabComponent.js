import VacaturesRepository from './VacatureRepository.js';

export default class VdabComponent {
  #zoektermen = [];
  #vacaturesRepository;
  #storage;
  constructor() {
    this.#vacaturesRepository = new VacaturesRepository();
    this.#storage = window.localStorage;

    document.getElementById('zoektermToevoegen').onclick = () => {
      const zoekterm = document.getElementById('zoekterm').value;
      if (
        zoekterm === '' ||
        this.#zoektermen.find(
          (value) => value.toLowerCase() === zoekterm.toLowerCase()
        )
      )
        document.getElementById('message').innerText =
          'De zoekterm bestaat reeds of heeft geen waarde!';
      else {
        this.#voegZoektermToe(zoekterm);
        document.getElementById('zoekterm').value = '';
      }
    };

    this.#getZoektermenFromStorage();
    this.#toHtml();
  }

  #voegZoektermToe(zoekterm) {
    this.#zoektermen.push(zoekterm);
    this.#setZoektermenInStorage();
    this.#toHtml();
  }

  #verwijderZoekterm(zoekterm) {
    const indexZoekterm = this.#zoektermen.findIndex(
      (value) => zoekterm === value
    );
    this.#zoektermen.splice(indexZoekterm, 1);
    this.#setZoektermenInStorage();
    this.#toHtml();
  }
  /*
  Of via de filter methode:
  #verwijderZoekterm(zoekterm) {
    this.#zoektermen = this.#zoektermen.filter((z) => z !== zoekterm);
    this.#setZoektermenInStorage();
    this.#toHtml();
  }
  */

  #getZoektermenFromStorage() {
    this.#zoektermen = [];
    if (this.#storage.getItem('VDABZoektermen')) {
      this.#zoektermen = JSON.parse(this.#storage.getItem('VDABZoektermen'));
    }
  }

  #setZoektermenInStorage() {
    try {
      this.#storage.setItem('VDABZoektermen', JSON.stringify(this.#zoektermen));
    } catch (e) {
      if (e.name === 'QuotaExceededError') alert('Out of storage!');
    }
  }

  #toHtml() {
    this.#zoektermenToHtml();
    this.#vacaturesToHtml();
  }

  #zoektermenToHtml() {
    document.getElementById('message').innerText = '';
    document.getElementById('zoektermen').innerHTML = '';
    this.#zoektermen.forEach((zoekterm) => {
      const sp = document.createElement('span');
      sp.innerText = zoekterm;
      const img = document.createElement('img');
      img.setAttribute('src', 'images/destroy.png');
      img.setAttribute('id', zoekterm);
      sp.appendChild(img);
      document.getElementById('zoektermen').appendChild(sp);
      img.onclick = () => {
        this.#verwijderZoekterm(zoekterm);
      };
    });
  }

  #vacaturesToHtml() {
    document.getElementById('resultaat').innerHTML = '';
    this.#vacaturesRepository
      .filterOpZoekTermen(this.#zoektermen)
      .forEach((vacature) => {
        const divElement = document.createElement('div');
        const h2Element = document.createElement('h2');
        h2Element.innerText = vacature.titel;
        h2Element.setAttribute('class', 'vacatureTitel');
        const h3Element = document.createElement('h3');
        h3Element.innerText = vacature.bedrijf + ' - ' + vacature.plaats;
        const h4Element1 = document.createElement('h4');
        h4Element1.innerText = 'Functieomschrijving';
        const pElement = document.createElement('p');
        pElement.innerText = vacature.functieomschrijving;
        const h4Element2 = document.createElement('h4');
        h4Element2.innerText = 'Profiel';
        const ulElement = document.createElement('ul');
        vacature.profiel.forEach((item) => {
          const liElement = document.createElement('li');
          liElement.innerText = item;
          ulElement.appendChild(liElement);
        });
        divElement.appendChild(h2Element);
        divElement.appendChild(h3Element);
        divElement.appendChild(h4Element1);
        divElement.appendChild(pElement);
        divElement.appendChild(h4Element2);
        divElement.appendChild(ulElement);
        document.getElementById('resultaat').appendChild(divElement);
      });
  }
}
