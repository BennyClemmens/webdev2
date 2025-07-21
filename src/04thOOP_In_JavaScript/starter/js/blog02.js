class BlogEntry {
  #date = new Date();
  #entryBody;

  constructor(body) {
    this.#body = body;
  }

  get body() {
    return this.#entryBody;
  }

  set #body(value) {
    this.#entryBody = value || "This entry is work in progress";
  }

  get date() {
    return this.#date;
  }

  get outDated() {
    return new Date().getFullYear() - this.date.getFullYear() >= 5;
  }
}

// Voorbeelden gebruik BlogEntry
let aBlogEntry = new BlogEntry();
console.log(aBlogEntry.body);
let bBlogEntry = new BlogEntry("Still dancing!");
console.log(bBlogEntry.body);

// ===================================================================
// Kopieer hieronder de klasse Blog uit blog01.js en pas de klasse aan.
// - maak de property entries private.
// - voorzie een publieke getter en setter voor de property creator.
// - implementeer volgende domeinregel in de setter:
//   DR_CREATOR: "Indien geen creator wordt opgegeven dan wordt de
//                creator ingesteld op 'Anonymous'"
// - roep vanuit de constructor de gemaakte setter aan.
// - maak een getter genaamd nrOfEntries die het aantal entries
//   in een blog retourneert.
// ===================================================================

class Blog {
  #creator; // maak de property entries private
  #entries = [];

  get creator() {
    // voorzie een publieke getter voor de property creator.
    return this.#creator;
  }

  set creator(value) {
    // voorzie een publieke setter voor de property creator.
    this.#creator = value || "Anonymous"; //DR_CREATOR
  }

  constructor(creator) {
    this.creator = creator; // roep vanuit de constructor de gemaakte setter aan
  }

  get nrOfEntries() {
    return this.#entries.length;
  }
}

// Test je code:
const myBlog = new Blog();
const bashirsBlog = new Blog("Abdi Bashir");
console.log(myBlog.creator); // Anonymous
console.log(myBlog.nrOfEntries); // 0
console.log(bashirsBlog.creator); // Abdi Bashir
console.log(bashirsBlog.nrOfEntries); // 0

const MyAvatar = {
  _name: "Benny",
  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },
};

MyAvatar.name = "Benny the Brave";
console.log(MyAvatar.name); // Benny the Brave
