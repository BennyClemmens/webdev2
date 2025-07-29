//import DobbelSteen from "./DobbelSteen.js";
import Speler from "./Speler.js";
import Spel from "./Spel.js";
/***********************************
Deze klasse vormt de lijm tussen ons domein (Dobbelsteen) en de HTML pagina
als de gebruiker iets wijzigt op de html pagina gaat het domein aangesproken worden en de
web pagina aangepast worden. Voorbeeld: de gebruiker rolt de dobbelsteen
De AfrikaansDobbelenComponent gaat de methode rol aanspreken in de domeinklasse Dobbelsteen
*/

/*
De klasse AfrikaansDobbelenComponent vormt de lijm tussen ons domein (Dobbelsteen) en de HTML pagina.
Als de gebruiker iets wijzigt op de html pagina gaat het domein aangesproken worden en de web pagina aangepast worden.
Voorbeeld: de gebruiker klikt op de knop "rol dobbelsteen".
De AfrikaansDobbelenComponent gaat de methode rol aanspreken in de domeinklasse Dobbelsteen.
Deze klasse bevat volgende properties/methodes

OK #dobbelsteen, een property die de dobbelsteen bevat waarmee gespeeld zal worden
OK in de constructor maak je een nieuwe dobbelsteen aan en roep je de methode #toHtml aan zodat de dobbelsteen wordt weergegeven in de html pagina
OK de private methode #toHtml geeft het dobbelsteen object in de index pagina weer in het img-element met id 1 geef je het juiste beeldje weer.
OK gebruik document.getElementById(...) om het juiste element op te halen.
OK geef het src-attribuut van dat element de waarde ‘images/DiceX.PNG’ waarbij X het aantalOgen van de dobbelsteen is.
*/

export default class AfrikaansDobbelenComponent {
  /*  Pas de klasse AfrikaansDobbelenComponent aan
  OK verwijder de property dobbelsteen
  OK voeg een private property speler toe
  OK in de constructor maak je een nieuwe Speler aan.Geef de speler de naam Kirikou
  OK in de constructor zorg je voor event handling. Wanneer er geklikt wordt op de knop “Rol dobbelstenen”, 
    de dobbelstenen van de speler effectief gerold worden, en de methode toHtml aangeroepen wordt.
    Belangrijk: maak gebruik van een arrow functie. 
    Het this keyword verwijst dan naar de instantie van de klasse.
  OK pas de methode #toHtml aan zodat deze nu een speler object kan weergeven:
    OK in de img-elementen toon je de waarde van elke dobbelsteen van de speler.
    OK in het span element met id speler zet je ‘Speler = [de naam van de speler]’ 
    Maak gebruik van document.getElementById om de span op te halen, en gebruik de innerText property om de waarde van de span aan te passen.
    OK in het span element met id score zet je ‘Score = [de score van de speler]’ 
    Maak gebruik van document.getElementById om de span op te halen, en gebruik de innerText property om de waarde van de span aan te passen.
  */

  /*
  Pas de klasse AfrikaansDobbelenComponent aan

  OK verwijder de property #speler
  OK voeg een private property #spel toe
  OK voeg een private methode #geefSpelers toe
    vraag via een prompt naar het aantal spelers
    prompt naar de naam van elke speler en maak een array met alle spelersnamen aan
    return de net gemaakte array
  OK de constructor:
  OK maak een nieuw Spel object aan i.p.v. een Speler object. Om de spelers op te vragen maak je gebruik van de methode #geefSpelers
  OK event-handling
  OK wanneer op de “Rol dobbelstenen” knop wordt geklikt roep je de speel methode van spel aan en roep je nadien #toHtml aan
  OK wanneer op de knop “Scoreboard” wordt geklikt dan wordt in een alert het scoreOverzicht van spel getoond
    */

  // #dobbelsteen; // de dobbelsteen waarmee wordt gespeeld
  // #speler; // de speler die aan het spelen is
  #spel;

  constructor() {
    //this.#dobbelsteen = new DobbelSteen();
    //this.#speler = new Speler("Kirikou");
    this.#spel = new Spel(this.#geefSpelers());
    document.getElementById("play").onclick = () => {
      //this.#speler.speel(); // check out wat THIS is in een arrow functie
      this.#spel.speel();
      this.#toHtml();
    };
    document.getElementById("scorebord").onclick = () => {
      alert(this.#spel.scoreOverzicht);
    };
    this.#toHtml(); // al dan niet tonen bij de start van de pagina
  }

  #geefSpelers() {
    let aantalSpelers;
    do {
      aantalSpelers = parseInt(
        prompt("Hoeveel spelers zijn er? (min 2, max 4)", "2")
      );
    } while (isNaN(aantalSpelers) || aantalSpelers < 2 || aantalSpelers > 4);

    const namen = [];

    for (let i = 0; i < aantalSpelers; i++) {
      let naam = "";
      do {
        naam = prompt(`Voer de naam van speler ${i + 1} in:`);
      } while (!naam || naam.trim() === "");
      namen.push(naam);
    }
    return namen;
  }

  #toHtml() {
    // document.getElementById("1").src = `./images/Dice${
    //   this.#dobbelsteen.aantalOgen
    // }.png`;
    const { dobbelstenen, naam, score } = this.#spel.spelerAanZet;
    for (let index = 0; index < Speler.aantalDobbelstenen; index++) {
      document.getElementById(
        index + 1
      ).src = `./images/Dice${dobbelstenen[index].aantalOgen}.png`;
    }
    document.getElementById("speler").innerText = `Speler = ${naam}`;
    document.getElementById("score").innerText = `Score = ${score}`;

    if (this.#spel.heeftWinaar) {
      alert(`De winnaar is ${naam} met een score van ${score}!`);
      document.getElementById("play").disabled = true;
    } else {
      if (document.getElementById("play").value === "Rol dobbelstenen") {
        document.getElementById("play").value = "Volgende speler";
        document.getElementById("play").onclick = () => {
          this.#spel.bepaalVolgendeSpeler();
          this.#toHtml();
        };
      } else {
        document.getElementById("play").value = "Rol dobbelstenen";
        document.getElementById("play").onclick = () => {
          this.#spel.speel();
          this.#toHtml();
        };
      }
    }
  }
}

/***************************************************************************************** */
/* onderstaand stukje code heb je pas in de laatste stap van de oefening nodig (zie opgave) */
/***************************************************************************************** */
// if (document.getElementById("play").value === "Rol dobbelstenen") {
//   document.getElementById("play").value = "Volgende speler";
//   document.getElementById("play").onclick = () => {
//     this.#spel.bepaalVolgendeSpeler();
//     this.toHtml();
//   };
// } else {
//   document.getElementById("play").value = "Rol dobbelstenen";
//   document.getElementById("play").onclick = () => {
//     this.#spel.speel();
//     this.toHtml();
//   };
// }
