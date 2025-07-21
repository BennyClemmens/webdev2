const aantalEendjes = 4;

export function berekenIndex(eendjes) {
  let indexMax = 0;
  let max = 0;
  for (let i = 0; i < eendjes.length; i++) {
    const score = geefScore(eendjes, i);
    if (score > max) {
      [max, indexMax] = [score, i];
    }
  }
  return indexMax;
}

export function geefScore(eendjes, index) {
  let totaleScore = 0;
  for (let i = 0; i < aantalEendjes; i++) {
    totaleScore += eendjes[(index + i) % eendjes.length];
  }
  return totaleScore;
}
