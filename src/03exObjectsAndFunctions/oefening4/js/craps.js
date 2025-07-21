const dice1 = {
  eyes: 1,
  roll: function () {
    this.eyes = Math.floor(Math.random() * 6) + 1;
  },
};

const dice2 = {
  eyes: 1,
  roll: function () {
    this.eyes = Math.floor(Math.random() * 6) + 1;
  },
};

const craps = {
  bet: 0,
  point: 0,
  earned: 0,
  gameover: false,
  dices: [dice1, dice2],
  rollDice: function () {
    this.dices.forEach((dice) => dice.roll()); // perhaps too soon to use arrow functions
  },
  //rollDice: function () {
  //  for (const dice of this.dices) dice.roll();
  //},
  getSum: function () {
    let sum = 0;
    for (const dice of this.dices) {
      sum += dice.eyes;
    }
    return sum;
  },
  //getSum: function () {
  //  return this.dices.reduce((sum, dice) => sum + dice.eyes, 0); // for sure too soon to use arrow functions
  //},
  play: function () {
    this.rollDice();
    const rolled = this.getSum();
    if (!this.point) {
      if (rolled === 7 || rolled === 11) {
        [this.earned, this.gameover] = [this.bet * 2, true];
      } else {
        this.point = rolled;
      }
    } else {
      if (rolled === this.point) {
        [this.earned, this.gameover] = [this.bet, true];
      } else if (rolled === 7 || rolled === 11) {
        [this.earned, this.gameover] = [0, true];
      }
    }
  },
};

function play() {
  craps.play();
  const total = craps.getSum();
  let message = `You rolled ${total}\n`;

  if (craps.gameover) {
    document.getElementById("play").disabled = true;
    if (craps.earned === 0) {
      message += `You lost your bet.`;
    } else {
      message += `You won ${craps.earned}.`;
    }
  } else {
    message += `Keep on playing. Your point is ${craps.point}.`;
    //document.getElementById("play").disabled = false;
  }
  window.alert(message);
}

export function initialiseerCraps() {
  const playButton = document.getElementById("play");
  playButton.addEventListener("click", play);
  do {
    craps.bet = parseInt(prompt("What is your bet?"));
  } while (isNaN(craps.bet) || craps.bet <= 0);
  alert("Press play to start the game");
}
