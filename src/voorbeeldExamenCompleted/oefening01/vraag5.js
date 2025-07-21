/**
 * ===== Vraag 5 =====
 * Shrijf een klasse EStep die volgende private properties heeft:
 * - _topSpeed: een getal die de maximale snelheid in km/u voorstelt
 * - _tireType: een string die de bandensoort voorstelt
 *
 * Voorzie voor elke property een getter en voor de property _tireType een setter. Volgende
 * domeinregel moet gerespecteerd worden. Indien niet aan deze domeinregel is voldaan word een
 * Error met een gepaste boodschap geworpen.
 *  - tireType kan enkel de waarden 'pneumatic', 'solid' of 'honeycomb' aannemen,
 *    dit is case-insensitive, de lowercase versie van de string wordt bijgehouden
 *
 * Schrijf een constructor die via zijn parameters waarden aangeleverd krijgt
 * voor de properties van een scooter. Indien geen waarde wordt aangeleverd
 * voor het tireType dan wordt deze property ingesteld op 'pneumatic'.
 *
 * Schrijf een methode toString(). Bekijk de voorbeelduitvoer om te zien wat deze
 * methode exact moet retourneren.
 *
 * Schrijf een getter canGetFlat. De getter levert true op indien het
 * bandentype 'pneumatic' is, in andere gevallen levert deze getter false op.
 *
 * Schrijf een methode pimp(extraSpeed). Deze methode verhoogt de topSpeed van de
 * EStep met extraSpeed indien extraSpeed niet meer dan 10% van de huidige topSpeed is.
 * Indien de extraSpeed meer is dan 10% van de huidige topSpeed wordt een Error geworpen.
 **/

/* Modeloplossing */
class EStep {
  #topSpeed;
  #tireType;
  constructor(topSpeed, tireType = "pneumatic") {
    this.#topSpeed = topSpeed;
    this.tireType = tireType;
  }
  get topSpeed() {
    return this.#topSpeed;
  }
  get tireType() {
    return this.#tireType;
  }
  set tireType(value) {
    if (!["pneumatic", "solid", "honeycomb"].includes(value.toLowerCase()))
      throw new Error("Invalid type of tire");
    this.#tireType = value.toLowerCase();
  }
  get canGetFlat() {
    return this.tireType === "pneumatic";
  }
  toString() {
    return `Top speed of ${this.topSpeed} km/h and ${this.tireType} tires`;
  }
  pimp(extraSpeed) {
    if ((extraSpeed * 100) / this.#topSpeed > 10)
      throw new Error("You can't pimp your e-Step like that");
    this.#topSpeed += extraSpeed;
  }
}

/* Voorbeeld uitvoer */
const myFirstStep = new EStep(20, "Solid");
console.log(myFirstStep.toString()); // Top speed of 20 km/h and solid tires
const myOtherStep = new EStep(30);
console.log(myOtherStep.toString()); // Top speed of 30 km/h and pneumatic tires
console.log(myFirstStep.canGetFlat); // false
myOtherStep.pimp(2);
console.log(myOtherStep.toString()); // Top speed of 32 km/h and pneumatic tires
// myOtherStep.pimp(10); // Uncaught Error: You can't pimp your e-Step like that
// const myThirdStep = new EStep(25, 'tubeless'); // Uncaught Error: Invalid type of tire
