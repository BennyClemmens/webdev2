export default class JokeComponent {
  #url;
  constructor() {
    this.#url = 'https://v2.jokeapi.dev/joke/Programming,Pun,Spooky?type=twopart';
    document.getElementById('joke').onclick = () => {
      this.#getData();
    };
  }

  //fetch the joke
  #getData() {
   
  }

  #toHtml({ category, setup, delivery }) {
    document.getElementById('category').innerText = `Category = ${category}`;
    document.getElementById('setup').innerText = `Q: ${setup}`;
    document.getElementById('delivery').innerText = `A: ${delivery}`;
  }
}
