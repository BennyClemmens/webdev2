'use strict';
/**
 * ===== Vraag 1 =====
 * 1.1 Maak gebruik van object en array destructuring om via 1 statement
 * twee variabelen, price en midFlavour te declareren en te initializeren.
 * De variabelen worden als volgt geinitialiseerd:
 *   - price bevat de waarde van de porperty price van myDrink
 *   - midFlavour bevat de tweede flavour uit de property flavours van myDrink
 *
 * 1.2 Voeg, zonder de declaratie van myDrink te wijzigen, een property
 * stars toe aan myDrink. De waarde die je toekent aan de property
 * wordt via een prompt aan de gebruiker gevraagd. Je mag er van uit gaan dat de gebruiker
 * een getal tussen 1 en 10 opgeeft, je hoeft dit niet te controleren.
 *
 * 1.3 Maak gebruik van, enkel en alleen, string interpolation (back-ticks) om het juiste
 * bericht in de alert te tonen.
 *   - indien de property stars < 5 dan verschijnt 'That is a bad review for my drink'
 *   - indien de property stars >= 5 dan verschijnt 'That is a good review for my drink'
 **/

const myDrink = {
  price: 42,
  flavours: ['vanilla', 'smokey', 'toasted']
};

/* 1.1 Modeloplossing */
const {
  price,
  flavours: [, midFlavour]
} = myDrink;

/* 1.2 Modeloplossing */
myDrink.stars = prompt('How many stars do you give (1-10)?');

/* 1.3 Modeloplossing */
alert(`That is a ${myDrink.stars < 5 ? 'bad' : 'good'} review for my drink...`);

/* Voorbeeld uitvoer */
console.log(
  `Crazy world, ${price} Euro for a drink with a ${midFlavour} taste...`
);
