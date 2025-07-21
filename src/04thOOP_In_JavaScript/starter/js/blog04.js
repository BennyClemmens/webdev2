class BlogEntry {
  static #wordsInShortBody = 5;
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

  contains(searchText) {
    return searchText
      ? this.body.toUpperCase().includes(searchText.toUpperCase())
      : false;
  }

  static get wordsInShortBody() {
    return BlogEntry.#wordsInShortBody;
  }

  get shortBody() {
    return (
      this.body.split(" ").slice(0, BlogEntry.wordsInShortBody).join(" ") +
      "..."
    );
  }

  contains(searchText) {
    return searchText
      ? this.body.toUpperCase().includes(searchText.toUpperCase())
      : false;
  }

  static createDummy() {
    return new this("Nothing much to say today...");
  }
}

// Voorbeelden gebruik BlogEntry
const aBlogEntry = new BlogEntry(
  "This is the story of my back-to-back Olympic gold medal."
);
console.log(BlogEntry.wordsInShortBody);
console.log(aBlogEntry.shortBody);
console.log(BlogEntry.createDummy().body);

// ========================================================================
// Kopieer hieronder de klasse Blog uit blog03.js en pas de klasse aan.
// - voorzie een publieke static property maxEntries met de waarde 3.
// - pas de methode addEntry aan:
//   zorg dat er na het toevoegen van een entry niet meer dan maxEntries entries
//   in de array entries zitten;
//   indien nodig verwijder je hiervoor de oudste entry (achteraan array entries)
// - voeg een getter freeSpace toe:
//   deze getter retourneert het percentage, afgerond tot op het dichste geheel getal,
//   aan vrije plaats voor entries in de blog.
// ========================================================================

class Blog {
  static maxEntries = 3; // voorzie een publieke static property maxEntries met de waarde 3
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

  get freeSpace() {
    // retourneert het percentage, afgerond tot op het dichste geheel getal,
    return Math.round(
      ((Blog.maxEntries - this.nrOfEntries) / Blog.maxEntries) * 100
    );
  }

  contains(searchText) {
    //return this.#entries.some((entry) => entry.contains(searchText)); // some nog niet gezien ...
    for (const entry of this.#entries) {
      if (entry.contains(searchText)) return true;
    }
    return false;
  }

  addEntry(body) {
    this.#entries.unshift(new BlogEntry(body)); // voeg de nieuwe entry vooraan toe
    if (this.nrOfEntries > Blog.maxEntries) {
      this.#entries.pop(); // verwijder de oudste entry (achteraan array entries)
    }
  }

  getEntry(index) {
    return this.#entries[index];
  }
}

// Test je code:
console.log(`A blog cannot have more than ${Blog.maxEntries} entries!`); // A blog cannot have more than 3 entries!
const blog = new Blog("Nafi Thiam");
console.log(`Free space in my blog = ${blog.freeSpace}%`); // Free space in my blog = 100%
blog.addEntry("So excited I received the World Athlete of the Year award!");
console.log(blog.getEntry(0)?.body); // So excited I received the World Athlete of the Year award!
console.log(`Free space in my blog = ${blog.freeSpace}%`); // Free space in my blog = 67%
blog.addEntry("This is the story of my back-to-back Olympic gold medal.");
blog.addEntry(
  "How I trained to become the first Belgian World Athletics Championships gold medalist."
);
console.log(blog.nrOfEntries); // 3
console.log(`Free space in my blog = ${blog.freeSpace}%`); // Free space in my blog = 0%
console.log(blog.contains("year")); // true
blog.addEntry(`Shame that a blog can only hold ${Blog.maxEntries} entries :-(`);
console.log(blog.nrOfEntries); // 3
console.log(blog.contains("year")); // false
console.log(blog.getEntry(0)?.body); // Shame that a blog can only hold 3 entries :-(
