import GefietsteKilometers from "./GefietsteKilometers.js";
export default class GefietsteKilometersRepository {
  #repository = [];
  constructor() {
    this.#opvullen();
  }

  /*
Implementeer de functie geefJaren in GefietsteKilometersRepository
De functie geefJaren retourneert een array van de unieke jaren die bestaan binnen GefietsteKilometersRepository
*/
  geefJaren() {
    const jaren = this.#repository.map((item) => item.jaar);
    return [...new Set(jaren)];
  }
  /*
Implementeer de functie geefGefietsteKilometersVoorEenJaar in GefietsteKilometersRepository
De functie retourneert een array van de gefietste kilometers voor het opgegeven jaar (parameter)
*/
  geefGefietsteKilometersVoorEenJaar(jaar) {
    const item = this.#repository.find((item) => item.jaar === jaar); // == ipv === if not parseInt!
    return item ? item.aantalKilometers : [];
  }
  /*
Implementeer de functie wijzigGefietsteKilometers in GefietsteKilometersRepository
De functie wijzigGefietsteKilometers vervangt de bestaande array aantalKilometers voor het opgegeven jaar (parameter) door de array waarden (parameter)
*/
  wijzigGefietsteKilometers(jaar, waarden) {
    const item = this.#repository.find((item) => item.jaar === jaar); // == ipv === !
    if (item) {
      item.aantalKilometers = waarden;
    }
    console.log(this.geefGefietsteKilometersVoorEenJaar(jaar));
  }

  /*
Implementeer de functie voegToe in GefietsteKilometersRepository
De functie voegToe voeg een nieuw object GefietsteKilometers toe aan GefietsteKilometersRepository
*/

  #voegToe(jaar, aantalKilometers, bedragPerKilometer) {
    //const item = this.#repository.find((item) => item.jaar === jaar);
    //if (item) {
    //  item.kilometers.push(aantalKilometers);
    //} else {
    this.#repository.push(
      new GefietsteKilometers(jaar, aantalKilometers, bedragPerKilometer)
    );
    //}
  }

  #opvullen() {
    const huidigJaar = new Date().getFullYear();
    this.#voegToe(
      huidigJaar - 2,
      [107, 109, 183, 154, 118, 136, 104, 178, 189, 98, 107, 145],
      0.2
    );
    this.#voegToe(
      huidigJaar - 1,
      [123, 145, 178, 113, 174, 158, 149, 133, 167, 120, 166, 142],
      0.2
    );
    this.#voegToe(
      huidigJaar,
      [156, 128, 129, 160, 190, 145, 155, 198, 120, 130, 140, 150],
      0.21
    );
  }
}
