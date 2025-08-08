import BerichtenRepository from "./BerichtenRepository.js";

export default class BerichtenComponent {
  #berichtenRepository;
  #url;

  constructor() {
    this.#berichtenRepository = new BerichtenRepository();
    //this.#url = "js/data/example.json";
    this.#url =
      "https://data.stad.gent/api/explore/v2.1/catalog/datasets/recente-nieuwsberichten-van-stadgent/records?order_by=publicatiedatum DESC&limit=5";
    //format=json";

    this.#getData();
  }

  #getData() {
    fetch(this.#url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok (${response.status})`);
        }
        return response.json();
      })
      .then((jsonResponse) => {
        console.log(jsonResponse);
        jsonResponse.results.forEach(
          ({ publicatiedatum, titel, nieuwsbericht }) => {
            this.#berichtenRepository.addBericht(
              publicatiedatum,
              titel,
              nieuwsbericht
            );
            // console.log(
            //   `Bericht toegevoegd: ${publicatiedatum} - ${titel} - ${nieuwsbericht}`
            // );
          }
        );
        this.#berichtenToHTML(this.#berichtenRepository.berichten);
      })
      .catch((error) =>
        console.error("There was a problem with the fetch operation:", error)
      );
  }

  // getData() {
  //   this.#getData();
  // }

  #berichtenToHTML(berichten) {
    document.getElementById("nieuwsberichten").innerHTML = "";
    //console.log(berichten);
    berichten.forEach((bericht) => {
      document
        .getElementById("nieuwsberichten")
        .insertAdjacentHTML("beforeend", bericht.toHTMLString());
    });
  }
}
