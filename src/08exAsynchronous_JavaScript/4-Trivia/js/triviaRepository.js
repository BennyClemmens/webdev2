import Trivia from "./trivia.js";

export default class TriviaRepository {
  #trivias = [];
  #answers = [];

  get trivias() {
    return this.#trivias;
  }

  get numberOfTrivias() {
    return this.#trivias.length;
  }

  get numberOfAnswers() {
    return this.#answers.length;
  }

  // geeft de volgende trivia terug (werkt op basis van
  // het aantal reeds gegeven antwoorden).
  get trivia() {
    // if (this.#trivias.length === 0) return null;
    return this.#trivias[this.numberOfAnswers];
  }

  get correctAnswers() {
    return this.#answers
      .filter((answer) => Boolean(answer))
      .reduce((count) => count + 1, 0);
  }

  addTrivias(dataObjects) {
    this.#trivias.push(
      ...dataObjects.map(
        (results) =>
          new Trivia(
            results.category,
            results.difficulty,
            results.question,
            results.incorrect_answers.concat(results.correct_answer), //.toSorted(),
            results.correct_answer
          )
      )
    );
  }

  checkAnswer(answer) {
    const isCorrect = this.trivia.isCorrectAnswer(answer);
    this.#answers.push(isCorrect);
    return isCorrect;
  }

  checkEndGame() {
    return this.numberOfAnswers === this.numberOfTrivias;
  }
}
