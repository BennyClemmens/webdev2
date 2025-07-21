export function berekenPositieMaxScore(eendjes) {
  let score = 0,
    positie = 0;

  for (let i = 0; i <= eendjes.length - 4; i++) {
    let nieuweScore = 0;
    for (let j = i; j < i + 4; j++) nieuweScore += eendjes[j];
    if (nieuweScore > score) {
      [positie, score] = [i, nieuweScore];
    }
  }

  return positie;
}
