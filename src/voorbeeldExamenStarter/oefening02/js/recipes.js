/* oefening02
----------
  In deze oefening moet je op basis van de array this.#recipes (zie onderstaande programmacode)
  de webpagina dynamisch aanpassen, zodat als we bijvoorbeeld nog een zesde recept willen toevoegen 
  aan de webpagina het volstaat om een element met een object (recipe) toe te voegen aan de array this.#recipes.
  
  Het bestand oefening02.gif bevat een animatie van de te bekomen webpagina.
  
  Sorteer (descending) de recepten op recipeID vooraleer ze weer te geven op je pagina.
  Voeg alle recipes toe aan het main-element.
  Zorg er voor dat indien je met de muiscursor over een recept (article-element) beweegt, 
  de afbeelding van het recept wijzigt van Zwart/Wit (BW) naar Kleur.
  Bij het verlaten met de muiscursor van het recept moet de afbeelding weer Zwart/Wit worden.
  Voor de HTML-code (dynamisch aangemaakt) zie de screenshots onderaan de pagina (start de pagina op met de Live Server).
  TIPS
  De afbeeldingen staan in de map images.
  Maak gebruik van de mouseover- en mouseout-events.
  Wijzig niets aan style.css en index.html.
*/

class RecipesApp {
  #recipes;
  constructor() {
    this.#recipes = [
      { recipeId: 1034, recipe: "Fideua", poster: "fideua", rating: 4 },
      {
        recipeId: 236,
        recipe:
          "Varkenspicanha met tomatensla, geroosterde aardappelen en chimichurri",
        poster: "varkenspicana",
        rating: 2,
      },
      {
        recipeId: 245,
        recipe:
          "Chili sin carne met zoete aardappel en quesadilla van witte kool met brebis de Brakel",
        poster: "chilesincarne",
        rating: 4,
      },
      {
        recipeId: 333,
        recipe: "Gevulde pastaschelpen met zalm, prei en curry",
        poster: "pastaschelpen",
        rating: 1,
      },
      {
        recipeId: 102,
        recipe: "Boules de Berlin met aardbeien en slagroom",
        poster: "boulesdeberlin",
        rating: 4,
      },
    ];
  }

  showRecipes() {
    //OPLOSSING
  }
}

const init = function () {
  const recipesApp = new RecipesApp();
  recipesApp.showRecipes();
};

window.onload = init;
