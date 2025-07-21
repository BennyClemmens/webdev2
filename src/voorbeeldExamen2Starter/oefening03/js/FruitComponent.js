/*
 oefening03 [25 punten]
 ======================
 De webpagina toont de voedingswaarde van fruit. Na selectie van een energiewaarde wordt alle fruit weergegeven waarvan de energiewaarde kleiner of gelijk is aan de geselecteerd waarde.

 In deze oefening dien je hiervoor de data uit een JSON-file fruit.json (zie data folder) asynchroon op te halen. De data bevat o.a. de voedingswaarde van fruit.

 Zorg ervoor dat je het resultaat uit fruit.png (zie folder extra) bekomt door vraag a, b en c op te lossen. 
 Na het oplossen van vraag a (zie klasse FruitComponent) wordt een array van Fruit objecten getoond in de console (zie fruitConsole.png). In de console staat ook nog een foutmelding "uncaught typeError". Deze verdwijnt pas na oplossen van vraag c.
 Na het oplossen van vraag b (zie klasse FruitRepository) worden de verschillende energiewaarden getoond in de select list en wordt alle fruit weergegeven (zie fruitSelectList.png)
 Na het oplossen van vraag c (zie klasse FruitRepository) wordt het fruit waarvan de energiewaarde kleiner of gelijk is aan de geselecteerde energiewaarde weergegeven (zie fruit.png)
 */

class FruitComponent {
  #fruitRepository;

  constructor() {
    this.#fruitRepository = new FruitRepository();
    this.initialiseerHTML();
  }

  /*   Vraag a)
  Haal de data op uit de json-file data/fruit.json. Maak gebruik van async/await syntax. 
  Voeg de data adhv de methode voegFruitToe toe aan de FruitRepository. 
  Merk op carbohydrates = koolhydraten, protein = eiwitten, fat = vet en calories = energie
  Voorzie foutafhandeling.
  Roep deze methode aan in de methode initialiseerHTML */
  haalDataOp() {}

  initialiseerHTML() {
    console.log(this.#fruitRepository.fruit);
    this.vulSelectLijstEnergiewaarden();
    this.fruitNaarHtml();
  }

  vulSelectLijstEnergiewaarden() {
    const lijst = document.getElementById('energiewaarden');
    this.#fruitRepository.energiewaarden.forEach((e) =>
      lijst.insertAdjacentHTML(
        'beforeend',
        `<option value="${e}">${e}</option>`
      )
    );
    lijst.onchange = () => this.fruitNaarHtml(parseInt(lijst.value));
  }

  fruitNaarHtml(energie) {
    const divFruit = document.getElementById('fruit');
    divFruit.innerHTML = '';
    this.#fruitRepository.geefFruitMetEnergiewaarde(energie).forEach((f) => {
      divFruit.insertAdjacentHTML(
        'beforeend',
        `
            <div class="card">
                 <div class="card-body">
                    <h3 class="card-title">${f.naam}</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Energie(kcal): ${f.energie}</li>
                    <li class="list-group-item">Eiwit: ${f.eiwit}</li>
                    <li class="list-group-item">Vet: ${f.vet}</li>
                    <li class="list-group-item">Koolhydraten: ${f.koolhydraten}</li>
                </ul>
            </div>`
      );
    });
  }
}
