export default class JokeComponent {
  #url;
  constructor() {
    this.#url =
      "https://v2.jokeapi.dev/joke/Programming,Pun,Spooky?type=twopart";
    document.getElementById("joke").onclick = () => {
      this.#getData();
    };
  }

  //fetch the joke
  async #getData() {
    try {
      const req = await fetch(this.#url);
      if (!req.ok) {
        throw new Error(`HTTP error! status: ${req.status}`);
      }
      const data = await req.json();
      this.#toHtml(data);
    } catch (error) {
      alert(`Error fetching joke:\n${error}`);
    }
  }

  #toHtml({ category, setup, delivery }) {
    document.getElementById("category").innerText = `Category = ${category}`;
    document.getElementById("setup").innerText = `Q: ${setup}`;
    document.getElementById("delivery").innerText = `A: ${delivery}`;
  }
}
