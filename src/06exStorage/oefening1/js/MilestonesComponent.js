import Milestone from "./Milestone.js";
export default class MilestonesComponent {
  #storage;
  #milestones = [];
  constructor(storage) {
    this.#storage = storage;

    const addButton = document.getElementById("add");
    const clearButton = document.getElementById("clear");
    const nameText = document.getElementById("name");
    const dateText = document.getElementById("date");
    /*
Voeg code toe aan de constructor van de MilestonesComponent zodat de functie #addMilestone wordt opgeroepen als op de knop met id add wordt geklikt.
Gebruik hier een try/catch constructie om de foutmeldingen op te vangen (die onderliggend mogelijks werden veroorzaakt)
en een alert te tonen met de foutmelding.
Indien er geen foutmelding is, zet je de waarden van de input velden terug leeg.
*/
    addButton.onclick = () => {
      //console.log(`To be implemented: adding a milestone`);
      try {
        this.#addMilestone(nameText.value, dateText.value);
        nameText.value = "";
        dateText.value = "";
      } catch (error) {
        alert(error.message);
      }
    };
    /*
Voeg code toe aan de constructor van de MilestonesComponent zodat de functie #clearMilestones wordt uitgevoerd als op de knop met id clear wordt geklikt,
nadat de gebruiker via een confirm box toestemming gaf.
*/
    clearButton.onclick = () => {
      if (confirm("Are you sure you want to clear all milestones?")) {
        this.#clearMilestones();
      }
    };

    this.#getMilestonesFromStorage();
    this.#toHTML();
  }

  /*
Voeg code toe aan de methode #addMilestone:
De name en date zijn verplichte velden, indien niet ingevuld, zal de functie een Error gooien met een gepaste foutmelding.
Als de date kleiner is of gelijk is aan vandaag, gooit de functie een Error met de foutmelding "This milestone is already in the past and isn't added."
Als de datum groter is dan vandaag, wordt er een nieuwe milestone toegevoegd aan de array van milestones.
Wanneer de milestone succesvol werd toegevoegd, wordt de functie #toHTML opgeroepen.
Bekijk de bestaande code bij de functie #toHTML. Deze code zorgt ervoor dat alle milestones verschijnen als een notificatie lijst en voegt een verwijderknop toe. Hier dien je momenteel nog niets te wijzigen.
*/
  /*
Voeg code toe aan
#addMilestone: om de veranderde array in de storage te stoppen (maak gebruik van #setMilestonesInStorage)
*/
  #addMilestone(name, date) {
    if (!name || !date) {
      throw new Error("Both name and date are required.");
    }
    if (!(new Date(date) instanceof Date)) {
      throw new Error("Date not correctly formatted.");
    }
    console.log(`Adding milestone: ${name} on ${date}`);
    if (new Date(date) <= new Date()) {
      throw new Error("This milestone is already in the past and isn't added.");
    }
    this.#milestones.push(new Milestone(name, date));
    this.#setMilestonesInStorage();
    this.#toHTML();
  }

  #deleteMilestone(ind) {
    this.#milestones.splice(ind, 1);
    this.#setMilestonesInStorage();
    this.#toHTML();
  }

  /*
Voeg code toe aan de methode #clearMilestones
De array #milestones wordt leeg gemaakt
De functie #toHTML wordt opgeroepen
*/
  #clearMilestones() {
    this.#milestones = [];
    this.#setMilestonesInStorage();
    this.#toHTML();
  }

  #toHTML() {
    const overview = document.getElementById("overview");
    overview.innerHTML = "";

    this.#milestones.map((m, ind) => {
      const note = document.createElement("div");
      note.setAttribute("class", "notification");

      const btn = document.createElement("button");
      btn.setAttribute("class", "delete");
      btn.addEventListener("click", () => {
        /*Nadat de gebruiker op de verwijder knop klikt van een milestone,
        moet hij eerst via een confirm box toestemming geven. 
        Pas de #toHTML functie aan zodat de gebruiker een confirm box krijgt alvorens te verwijderen.*/
        if (confirm("Are you sure you want to delete this milestone?")) {
          this.#deleteMilestone(ind);
        }
      });
      note.appendChild(btn);

      const text = document.createTextNode(
        `${m.daysUntilDeadline} days left until ${m.name}`
      );
      note.appendChild(text);

      overview.appendChild(note);
    });
  }

  /*
  Voeg code toe aan de functie #getMilestonesFromStorage om de milestones op te halen uit de storage en in de array milestones te stoppen.
  Zorg ervoor dat hier de milestones die in het verleden liggen uitgefilterd worden.
  */
  #getMilestonesFromStorage() {
    const milestones = JSON.parse(localStorage.getItem("milestones")) || [];
    this.#milestones = milestones
      .map((m) => new Milestone(m.name, m.date))
      .filter((m) => new Date(m.date) > new Date());
  }

  /*
  Voeg code toe aan de functie #setMilestonesInStorage om de milestones in de storage te stoppen. Sorteer eerst de milestones op aflopende datum.
  */
  #setMilestonesInStorage() {
    this.#milestones.sort((a, b) => new Date(a.date) - new Date(b.date));
    localStorage.setItem("milestones", JSON.stringify(this.#milestones));
  }
}
