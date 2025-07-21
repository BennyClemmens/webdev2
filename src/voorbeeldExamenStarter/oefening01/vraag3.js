"use strict";
/**
 * ===== Vraag 3 =====
 * Details 3.1 tem 3.4: zie hieronder in opgave
 **/

const actor1 = {
  name: "Halle Berry",
  movies: ["Kings", "Cloud Atlas", "Kidnap", "Movie 43"],
};

const actor2 = {
  name: "Shah Rukh Khan",
  movies: ["Tutak Tutak Tutiya", "Jab Tak Hai Jaan"],
};

const actor3 = {
  name: "Lupita Nyong'o",
  movies: ["Black Panther", "The Jungle book", "Black is King"],
};

const extraMovies = ["The 355", "Us", "Queen of Katwe"];

function printMovies(actor) {
  console.log(`${actor.name} starred in: ${actor.movies.join(", ")}`);
}

// 3.1 Wijzig de movies van actor1 zodat enkel nog movies die niet starten met de letter 'K' overblijven
// Schrijf hiervoor 1 statement
/* 3.1 Oplossing */

// 3.2 Voeg vooraan aan de movies van actor2 de movie "Chamatkar" toe
// Schrijf hiervoor 1 statement
/* 3.2 Oplossing */

// 3.3 Verwijder de tweede movie uit de movies van actor3 en
// vervang deze door de movies die je vindt in de variabele extraMovies.
// Schrijf hiervoor 1 statement
/* 3.3 Oplossing */

// 3.4 Schrijf een functie applyCallbackToActors.
// De functie moet je kunnen aanroepen met (zie ook voorbeeld uitvoer)
//   - als eerste argument een callback function
//   - als volgende argumenten een willekeurig aantal actor objecten
// In de functie applyCallbackToActors wordt voor elk actor-object de callback
// aangeroepen, bij deze aanroep wordt het actor-object als argument doorgegeven
/* 3.4 Oplossing */

/* Voorbeeld uitvoer */
applyCallbackToActors(printMovies, actor1, actor2, actor3);
// Halle Berry starred in: Cloud Atlas, Movie 43
// Shah Rukh Khan starred in: Chamatkar, Tutak Tutak Tutiya, Jab Tak Hai Jaan
// Lupita Nyong'o starred in: Black Panther, The 355, Us, Queen of Katwe, Black is King
applyCallbackToActors(printMovies, actor2);
// Shah Rukh Khan starred in: Chamatkar, Tutak Tutak Tutiya, Jab Tak Hai Jaan
