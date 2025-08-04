// TODO:
// 1. Maak een Sticky-klasse met het volgende:
// - id (private)
// - note (getter + setter)
// - color (getter + setter)
// 2. constructor die zelf de key bepaald (zie v1) en de andere nodige waarden zet.
// 3. methode toJSON om het object om te zetten naar een object literal.

class Sticky {
  #id;
  #note;
  #color;

  constructor(note, color, id) {
    this.#id = id || "sticky_" + Math.random().toString(36).substring(2);
    this.note = note;
    this.color = color;
  }

  get id() {
    return this.#id;
  }

  get note() {
    return this.#note;
  }

  set note(value) {
    this.#note = value;
  }

  get color() {
    return this.#color;
  }

  set color(value) {
    this.#color = value;
  }

  toJSON() {
    return {
      id: this.#id,
      note: this.#note,
      color: this.#color,
    };
  }
}

class StickiesComponent {
  #storage;
  constructor(storage) {
    this.#storage = storage;
    this.#initializeEventHandlers();
  }

  get storage() {
    return this.#storage;
  }

  #toHTML() {
    const allStickies = Object.entries(this.#storage).reduce(
      (result, [key, value]) => {
        // converteert JSON string naar object literal
        const storObj = JSON.parse(value);
        const { id, note, color } = storObj;

        // TODO:
        // 1. Converteert object literal naar object van class Sticky en gebruik deze.
        // hier natuurlijk een beetje een overkill aangezien we niet meer dan printen doen, ...
        const sticky = new Sticky(note, color, id);

        return (result += `key:${key}, value:${value}, id:${sticky.id}, note:${sticky.note}, color:${sticky.color}\n`);
      },
      ""
    );
    alert(allStickies);
  }
  #clear() {
    this.#storage.clear();
  }
  #addSticky(note, color) {
    // TODO:
    // 1. Maak een nieuw Sticky-object aan.
    // 2. Seraliseer het Sticky-object naar JSON en sla het op in localStorage. Gebruik het Id van de Sticky als sleutel.
    const newSticky = new Sticky(note, color);
    const stringifiedSticky = JSON.stringify(newSticky); // roept de toJSON methode aan
    this.#storage.setItem(newSticky.id, stringifiedSticky);
  }

  #initializeEventHandlers() {
    const addButton = document.getElementById("add");
    const clearButton = document.getElementById("clear");
    const noteText = document.getElementById("notetext");
    const noteColor = document.getElementById("notecolor");

    if (!this.#storage) {
      alert("browser ondersteunt geen storage");
      addButton.disabled = true;
      clearButton.disabled = true;
      return;
    }

    addButton.onclick = () => {
      this.#addSticky(noteText.value, noteColor.value);
      noteText.value = "";
      this.#toHTML();
    };
    clearButton.onclick = () => {
      this.#clear();
    };
  }
}

function init() {
  new StickiesComponent(localStorage);
}

window.onload = init;
