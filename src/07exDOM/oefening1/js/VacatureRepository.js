import Vacature from "./Vacature.js";
import { vacatures } from "./vacatureArray.js";

export default class VacaturesRepository {
  #vacatures = [];
  constructor() {
    this.#vacaturesVullen();
  }

  get vacatures() {
    return this.#vacatures;
  }

  /*
Implementeer de methode voegVacatureToe om één vacature toe te voegen aan de array van vacatures.
Maak gebruik van de meegegeven parameters.

Test de code door 'testcode.html' te openen met de Live Server.
In TESTCODE DEEL 2 worden de 4 vacatrures uitgeschreven en bekom je onderstaand resultaat in de console.
De undefined is afkomstig van de filterOpZoekTermen-methode die momenteel nog niets retourneert.
*/
  voegVacatureToe(id, titel, functieomschrijving, profiel, bedrijf, plaats) {
    const vacature = new Vacature(
      id,
      titel,
      functieomschrijving,
      profiel,
      bedrijf,
      plaats
    );
    this.#vacatures.push(vacature);
  }

  #vacaturesVullen() {
    vacatures.forEach(
      ([id, titel, functieomschrijving, profiel, bedrijf, plaats]) =>
        this.voegVacatureToe(
          id,
          titel,
          functieomschrijving,
          profiel,
          bedrijf,
          plaats
        )
    );
  }
  /* 
Implementeer de methode filterOpZoekTermen die de vacatures retourneert die voldoen aan één of meerdere van de meegegeven zoektermen.

Controleer of de testcode de gewenste resultaten geeft.
*/
  filterOpZoekTermen(zoektermen) {
    return this.#vacatures.filter((vacature) =>
      vacature.bevatZoekterm(zoektermen)
    );
  }
}
