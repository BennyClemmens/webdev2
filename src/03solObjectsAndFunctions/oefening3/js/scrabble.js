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

export function initialiseerScrabble() {
  const btn = document.getElementById("berekenPunten");
  const woord = document.getElementById("woord");

  btn.onclick = () => {
    alert(
      `Het woord  ${woord.value} is ${berekenPunten(woord.value)} punten waard.`
    );
  };
}

function berekenPunten(woord) {
  let punten = 0;
  woord = woord.toLowerCase();
  for (const letter of woord) {
    punten += letterwaarden[letter];
  }
  return punten;
}
