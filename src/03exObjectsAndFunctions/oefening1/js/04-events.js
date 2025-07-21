"use strict";
// Zorg dat op de index pagina, telkens je met de muis over het
// <h1> element hovert, de eerste letter van de titel verdwijnt.
// Na een aantal keer is de titel dan volledig verdwenen van het scherm.

// Creëer een variabele h1, met daarin een object-representatie van het H1-element
// Tip Maak gebruik van getElementById()

// Via de property innerHTML (zie ook later in Hoofdstuk 7) van het h1-object kan je nu
// de binnenste HTML-code (hier enkel tekst) van het H1-element opvragen en ook instellen.

// Zorg dat het instellen van de event handler
// gebeurt wanneer het window load event wordt getriggered.
// Maak gebruik van een init functie expressie (const)

const disapear = function (event) {
  console.log(`Mouse over event triggered on: ${event.target.id}`);
  event.target.textContent = event.target.textContent.substring(1); //ipv innerHTML => xss possible!
};

const init = function () {
  const h1 = document.getElementById("h1");
  h1.addEventListener("mouseover", disapear);
  // h1.onmouseover = disapear; //alternative way to add event listener
};

window.onload = init;
// Zorg dat de init functie wordt aangeroepen wanneer het window load event wordt getrigger
