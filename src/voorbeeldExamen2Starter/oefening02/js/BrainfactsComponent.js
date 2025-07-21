/* 
oefening02 [15 punten]
======================

Bouw de webpagina dynamisch op met de gegevens uit de array 'brainfacts'.

Module 'brainfacts.js': exporteer de array 'brainfacts' 
'index.html': voeg een script element toe zodat de module 'index.js'
ingeladen wordt als de index pagina geopend wordt.
module 'index.js': importeer de array brainfacts en de klass BrainfactsCompontent en start de applicatie door een BrainfactsComponent aan te maken wanneer het load-event wordt afgevuurd

Het bestand 'oefening02.gif' verduidelijkt hoe de webpagina er 
uiteindelijk zal uitzien en zal reageren op events. 
Het bestand 'oefening02_HTML.jpg' verduidelijkt de te genereren HTML code.
Beide bestanden vind je in de map 'extra'.

Merk op dat niet alle objectjes in de array 'brainfacts' een 
'image'-property hebben. Voor de objectjes zonder deze property wordt 
een afbeelding met de naam 'brainX.jpg' gekozen (X stelt een cijfer voor). 
Dit gebeurt sequentieel, bij het eerste objectje zonder 'image'-property 
wordt dus afbeelding 'brain1.jpg' getoond, bij het tweede objectje zonder 
'image'-property 'brain2.jpg' enzoverder. De afbeeldingen staan
in de map 'images'.

Merk ook op dat het volgnummer bij een titel geen onderdeel uitmaakt
van de 'titel'-property. 

Bij het klikken op de titel van een brainfact worden de details 
van de brainfact getoond. Er is nooit meer dan 1 detail zichtbaar. 
Denk er dus aan dat je eventueel een reeds zichtbaar detail moet 
verbergen wanneer je een ander detail zichtbaar maakt. 
Als de pagina wordt ingeladen is geen enkel detail zichtaar.

*/

class BrainfactsComponent {
  constructor(brainfacts) {
    this.toHTML(brainfacts);
  }

  toHTML(brainfacts) {}
}

window.onload = () => new BrainComponent(brainfacts);
