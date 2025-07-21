'use strict';

let eindeSpel = false;
let totaleSchade = 0;

do {
  const schade = slaDeDraak();
  if (schade) {
    console.log(`Je bracht de draak een schade van ${schade} toe!`);
    totaleSchade += schade;
    if (totaleSchade >= 4) {
      console.log('Proficiat, je hebt de draak verslaan!');
      eindeSpel = true;
    }
  } else {
    console.log('Jammer, je miste de draak en bent nu verslaan...');
    eindeSpel = true;
  }
} while (!eindeSpel);

function slaDeDraak() {
  if (Math.floor(Math.random() * 2)) return Math.floor(Math.random() * 5 + 1);
  else return 0;
}
