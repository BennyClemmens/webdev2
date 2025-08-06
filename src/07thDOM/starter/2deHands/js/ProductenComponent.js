import ProductenRepository from "./ProductenRepository.js";

export default class ProductenComponent {
  #productenRepository;
  constructor() {
    this.#productenRepository = new ProductenRepository();
    this.#initialiseerHtml();
  }

  // deze methode intialiseert de pagina
  #initialiseerHtml() {
    this.#productenToHtml(this.#productenRepository.producten);
    this.#categorieenToHtml(this.#productenRepository.geefAlleCategorieen());

    // voeg een event handler toe aan de keuzelijst categorie
    const selectElement = document.getElementById("categorie");
    selectElement.onchange = () => {
      const categorie = selectElement.value;
      const producten =
        this.#productenRepository.geefProductenUitCategorie(categorie);
      this.#productenToHtml(producten);
      const divProductDetails = document.getElementById("productDetails");
      divProductDetails.classList.add("verbergen");
      //divProductDetails.innerHTML = ""; // maak de div leeg
    };
  }

  // voegt de gegeven categorieën toe aan de selectlist #categorie
  #categorieenToHtml(categorieen) {
    const selectElement = document.getElementById("categorie");
    categorieen.forEach((categorie) => {
      const optionElement = document.createElement("option");
      optionElement.value = categorie;
      optionElement.textContent = categorie;
      selectElement.appendChild(optionElement);
    });
  }

  // toont het aantal producten in div#aantalProducten
  // en de producten in div#overzichtProducten
  #productenToHtml(producten) {
    const divAantalProducten = document.getElementById("aantalProducten");
    divAantalProducten.innerHTML = `<h4>Aantal producten: ${producten.length}</h4>`;

    const divOverzichtProducten = document.getElementById("overzichtProducten");
    divOverzichtProducten.innerHTML = ""; // maak de div leeg

    producten.forEach((product) => {
      const divElement = document.createElement("div");
      //divElement.className = "product";
      divElement.id = product.id; // divElement.setAttribute("id", product.id);
      divElement.onclick = () => {
        // divOverzichtProducten.childNodes.forEach((child) => {
        //   child.classList.remove("tekstVet");
        // });
        this.#zetProductVetjes(divElement);
        this.#productDetailsToHtml(product);
      };

      // const h3Element = document.createElement("h3");
      // h3Element.textContent = product.titel;

      const imgElement = document.createElement("img");
      imgElement.src = `images/${product.id}/thumbs/thumb_${product.afbeeldingen[0]}.jpg`;
      imgElement.alt = product.titel;

      const pElement = document.createElement("p");
      pElement.textContent = product.titel;

      // divElement.appendChild(h3Element);
      divElement.appendChild(imgElement);
      divElement.appendChild(pElement);

      divOverzichtProducten.appendChild(divElement);
    });
  }

  // zet in het productoverzicht, het gekozen product vetjes
  #zetProductVetjes(divElement) {
    document
      .querySelector("#overzichtProducten .tekstVet")
      ?.classList.remove("tekstVet");
    divElement.classList.add("tekstVet");
  }

  // toont de details van het gegeven product in de div #productDetails
  #productDetailsToHtml(product) {
    // maak het element #productDetails zichtbaar en leeg
    const divProductDetails = document.getElementById("productDetails");
    divProductDetails.classList.remove("verbergen");
    divProductDetails.innerHTML = "";

    // creëer de 'descendants' voor div#productDetails en voeg ze toe

    const h2Element = document.createElement("h2");
    h2Element.textContent = product.titel;

    const pElement = document.createElement("p");
    pElement.textContent = product.omschrijving;

    const h4Element = document.createElement("h4");
    h4Element.textContent = "Prijs: €" + product.prijs;

    const divElement = document.createElement("div");
    divElement.id = "afbeeldingen";

    // voeg de grote afbeelding toe aan divElement
    const imgGroteAfbeelding = document.createElement("img");
    imgGroteAfbeelding.id = "groteAfbeelding";
    imgGroteAfbeelding.src = `images/${product.id}/${product.afbeeldingen[0]}.jpg`;
    imgGroteAfbeelding.alt = product.titel;
    divElement.appendChild(imgGroteAfbeelding);

    // voeg de 'thumbnails' toe aan het divElement
    const asideElement = document.createElement("aside");
    asideElement.id = "thumbnails";
    product.afbeeldingen.forEach((afbeelding) => {
      const imgElement = document.createElement("img");
      imgElement.src = `images/${product.id}/thumbs/thumb_${afbeelding}.jpg`;
      imgElement.onclick = () => {
        // wijzig de grote afbeelding als er geklikt
        // wordt op één van de 'thumbnails'
        document.getElementById(
          "groteAfbeelding"
        ).src = `images/${product.id}/${afbeelding}.jpg`;
      };
      asideElement.appendChild(imgElement);
    });
    divElement.appendChild(asideElement);

    divProductDetails.appendChild(h2Element);
    divProductDetails.appendChild(pElement);
    divProductDetails.appendChild(h4Element);
    divProductDetails.appendChild(divElement);
  }
}
