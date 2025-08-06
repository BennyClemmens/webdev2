/*
Voorzie een klasse Vacature (file Vacature.js). Elke vacature heeft id, titel, functieomschrijving, profiel, bedrijf en plaats.

Voorzie publieke getters voor elke private property.

Voeg een methode bevatZoekterm (zoektermen) toe aan de klasse Vacature.
Hierbij is zoektermen een array van strings en deze methode retourneert true indien de titel van de vacature één of meerdere van de zoektermen bevat.
Dit mag niet hoofdlettergevoelig zijn.

Test de code door 'testcode.html' te openen met de Live Server. TESTCODE DEEL 1, moet onderstaand resultaat geven in de console.
*/

export default class Vacature {
  #id;
  #titel;
  #functieomschrijving;
  #profiel;
  #bedrijf;
  #plaats;

  constructor(id, titel, functieomschrijving, profiel, bedrijf, plaats) {
    this.#id = id;
    this.#titel = titel;
    this.#functieomschrijving = functieomschrijving;
    this.#profiel = profiel;
    this.#bedrijf = bedrijf;
    this.#plaats = plaats;
  }

  // publieke getters
  get id() {
    return this.#id;
  }

  get titel() {
    return this.#titel;
  }

  get functieomschrijving() {
    return this.#functieomschrijving;
  }

  get profiel() {
    return this.#profiel;
  }

  get bedrijf() {
    return this.#bedrijf;
  }

  get plaats() {
    return this.#plaats;
  }

  // methode om te controleren of de titel één of meerdere zoektermen bevat
  bevatZoekterm(zoektermen) {
    const titel = this.#titel.toLowerCase();
    return zoektermen.some((zoekterm) =>
      titel.includes(zoekterm.toLowerCase())
    );
  }
}
