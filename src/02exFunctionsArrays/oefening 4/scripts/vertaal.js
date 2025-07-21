export function vertaal(zin) {
  let pZin = [];
  let lettersTeHerhalen = [];

  function checkHerhaal() {
    if (lettersTeHerhalen.length > 0) {
      pZin = herhaalArray(pZin, lettersTeHerhalen);
      lettersTeHerhalen = [];
    }
  }

  for (const letter of zin) {
    if ("AEIOU".includes(letter.toUpperCase())) {
      lettersTeHerhalen.push(letter);
    } else {
      checkHerhaal();
    }
    pZin.push(letter);
  }

  checkHerhaal();
  return pZin.join("");
}

function herhaalArray(zin, lettersTeHerhalen) {
  return zin.concat("p").concat(...lettersTeHerhalen);
}

export function vertaalij(zin) {
  let pZin = "",
    lettersTeHerhalen = "";

  function checkHerhaal() {
    if (lettersTeHerhalen) {
      pZin = herhaal(pZin, lettersTeHerhalen);
      lettersTeHerhalen = "";
    }
  }

  for (const letter of zin) {
    if (
      "AEIOU".includes(letter.toUpperCase()) ||
      (lettersTeHerhalen &&
        letter.toUpperCase() === "J" &&
        lettersTeHerhalen.slice(-1).toUpperCase() !== "J")
    ) {
      lettersTeHerhalen += letter;
    } else {
      checkHerhaal();
    }
    pZin += letter;
  }
  checkHerhaal();
  return pZin;
}

function herhaal(zin, lettersTeHerhalen) {
  return (zin += "p" + lettersTeHerhalen);
}
