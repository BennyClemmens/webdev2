import Film from "./Film.js";

export default class FilmRepository {
  #films = [];

  get films() {
    return this.#films;
  }

  addFilms(arrFilms) {
    // DONE
    this.#films = arrFilms.map(
      (json) =>
        new Film(json.imdbID, json.Title, json.Type, json.Poster, json.Year)
    );
    console.log(this.#films);
  }

  addDetail(id, objDetail) {
    this.getFilmById(id).setDetail(
      objDetail.Runtime,
      objDetail.Genre,
      objDetail.Director,
      objDetail.Actors,
      objDetail.Plot,
      objDetail.Language
    );
    // TODO
  }
  getFilmById(id) {
    return this.#films.find((film) => film.id === id);
  }
}
