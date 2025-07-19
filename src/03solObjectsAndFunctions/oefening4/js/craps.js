"use strict";

const dice1 = {
  eyes: 1,
  roll() {
    this.eyes = Math.floor(Math.random() * 6 + 1);
  },
};

const dice2 = {};
({ eyes: dice2.eyes, roll: dice2.roll } = dice1);

const craps = {
  bet: 0, //inzet
  point: 0, //punten eerste worp
  gameover: false,
  earned: 0, //gewonnen
  dices: [dice1, dice2],
  rollDice: function () {
    for (const dice of this.dices) dice.roll();
  },
  getSum: function () {
    let sum = 0;
    for (const dice of this.dices) {
      sum += dice.eyes;
    }
    return sum;
  },
  play: function () {
    this.rollDice();
    const sum = this.getSum();
    if (this.point === 0) {
      if (sum === 7 || sum === 11) {
        this.gameover = true;
        this.earned = this.bet * 2;
      } else this.point = sum;
    } else {
      if (sum === this.point) {
        this.gameover = true;
        this.earned = this.bet;
      } else {
        if (sum === 7 || sum === 11) {
          this.gameover = true;
          this.earned = 0;
        }
      }
    }
  },
};

function play() {
  craps.play();

  let message = `You played ${craps.getSum()}.`;

  if (craps.gameover) {
    document.getElementById("play").disabled = true;
    if (craps.earned === 0) message += " You lost your bet.";
    else message += ` You won ${craps.earned}.`;
  } else message += ` Keep on playing. Your point is ${craps.point}.`;
  window.alert(message);
}
export function initialiseerCraps() {
  document.getElementById("play").onclick = play;
  craps.bet = parseInt(prompt("What is your bet?"));
  alert("Press play to start the game");
}
