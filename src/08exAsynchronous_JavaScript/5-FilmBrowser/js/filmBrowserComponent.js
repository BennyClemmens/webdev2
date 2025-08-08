import FilmRepository from "./FilmRepository.js";

export default class FilmBrowserComponent {
  static API_KEY = "57927523";
  #filmRepository;
  #url;
  constructor() {
    this.#filmRepository = new FilmRepository();
    this.#url = "http://www.omdbapi.com/";
    // this.#url =
    //   "http://www.omdbapi.com/?s=star&apikey=" + FilmBrowserComponent.API_KEY;
    console.log(this.#url);

    document.getElementById("searchBtn").onclick = () => {
      // TODO
      this.#searchFilms(
        document.getElementById("searchText").value.trim().toLowerCase()
      );
    };
  }

  /*
    "Search": [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "imdbID": "tt0076759",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_SX300.jpg"
    }, */

  async #searchFilms(searchText) {
    if (searchText !== "") {
      // TODO:
      // films opvragen
      const url = `${this.#url}?&s=${searchText}&apikey=${
        FilmBrowserComponent.API_KEY
      }`;
      console.log(url);
      try {
        const respons = await fetch(url);
        if (!respons.ok) {
          throw new Error(`Http Error: ${respons.status}`);
        }
        const json = await respons.json();
        if (json.Response === "True") {
          this.#filmRepository.addFilms(json.Search);
          this.#showFilms();
        } else {
          throw new Error(`No films found.`);
        }
      } catch (error) {
        this.#showMessage(error);
      }
    } else {
      this.#showMessage("Gelieve een zoekterm in te geven.");
    }
  }

  async #getFilm(id) {
    // TODO
    // details van één film opvragen
    //log(`Get film with id: ${id}`);
    const url = `${this.#url}?i=${id}&plot=full&apikey=${
      FilmBrowserComponent.API_KEY
    }`;
    console.log(url);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Http Error: ${response.status}`);
      }
      const json = await response.json();
      if (json.Response === "True") {
        console.log(json);
        this.#filmRepository.addDetail(id, json);
        this.#showDetailFilm(this.#filmRepository.getFilmById(id));
      } else {
        throw new Error(`Film not found.`);
      }
    } catch (error) {
      this.#showMessage(error);
    }
  }

  #showFilms() {
    document.getElementById("films").innerHTML = "";
    this.#filmRepository.films.forEach((film) => {
      document.getElementById("films").insertAdjacentHTML(
        "beforeend",
        `     
        <div class="col s12 m6">
          <div class="card small horizontal">
            <div class="card-image">
              <img id="${film.id}" src="${film.poster}">
              </div>
            <div class="card-stacked">  
              <div class="card-content">
                <span class="card-title">${film.title}</span>             
                <ul>
                  <li>Type: ${film.type}</li>
                  <li>Year: ${film.year}</li>
                </ul>
             </div> 
            </div>       
          </div>
        </div>
      `
      );
      document.getElementById(film.id).onclick = () => {
        // TODO
        this.#getFilm(film.id);
      };
    });
  }

  #showDetailFilm(film) {
    let details = "";
    Object.entries(film.detail).forEach(([key, value]) => {
      details += `<li><label>${key}:</label> ${value}</li>`;
    });
    document.getElementById("films").innerHTML = "";
    document.getElementById("films").insertAdjacentHTML(
      "beforeend",
      `     
        <div class="col s12">
          <div class="card horizontal">
            <div class="card-image">
              <img id="listFilms" src="${film.poster}">
            </div>
            <div class="card-stacked">  
              <div class="card-content">
                <span class="card-title">${film.title}</span>             
                <ul>
                  <li><label>type:</label> ${film.type}</li>
                  <li><label>year:</label> ${film.year}</li>
                  ${details}
                </ul>
              </div>
            </div>       
          </div>
        </div>
      `
    );
    document.getElementById("listFilms").onclick = () => {
      // TODO
      this.#showFilms();
    };
  }

  #showMessage(message) {
    document.getElementById("films").innerHTML = "";
    document.getElementById("films").insertAdjacentHTML(
      "beforeend",
      `
      <div class="col s12">
        <p>${message}</p>
      </div>
      `
    );
  }
}
