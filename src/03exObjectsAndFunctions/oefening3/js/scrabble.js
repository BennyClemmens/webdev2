const letterwaarden = {
  a: 1,
  b: 3,
  c: 5,
  d: 2,
  e: 1,
  f: 4,
  g: 3,
  h: 4,
  i: 1,
  j: 4,
  k: 3,
  l: 3,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 2,
  s: 2,
  t: 2,
  u: 4,
  v: 4,
  w: 5,
  x: 8,
  y: 8,
  z: 4,
};

const berekenPunten = function (woord) {
  //let woord = document.getElementById("woord").value;
  let punten = 0;
  let letters = woord.split("");
  letters.forEach(function (letter) {
    punten += letterwaarden[letter];
  });
  return punten;
};

export const initialiseerScrabble = function () {
  const woord = document.getElementById("woord");
  const btn = document.getElementById("berekenPunten");
  btn.addEventListener("click", () =>
    alert(
      `Het woord "${woord.value}" heeft ${berekenPunten(woord.value)} punten.`
    )
  );
};
