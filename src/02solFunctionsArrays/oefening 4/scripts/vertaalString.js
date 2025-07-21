export function vertaal(zin) {
  let pzin = "",
    lettersTeHerhalen = "";

  for (const letter of zin) {
    if ("aeiouAEIOU".indexOf(letter) > -1) {
      lettersTeHerhalen += letter;
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = "";
      }
    }
    pzin += letter;
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaal(pzin, lettersTeHerhalen);
  }
  return pzin;
}

function herhaal(zin, lettersTeHerhalen) {
  return (zin += "p" + lettersTeHerhalen);
}

export function vertaalIJ(zin) {
  let pzin = "",
    lettersTeHerhalen = "",
    letter;

  for (let i = 0; i < zin.length; i++) {
    letter = zin.charAt(i);
    if ("aeiouAEIOU".indexOf(letter) > -1) {
      const volgendeLetter = zin.charAt(i + 1);
      if (
        letter.toLowerCase() === "i" &&
        volgendeLetter.toLowerCase() === "j"
      ) {
        letter += volgendeLetter;
        i++;
      }
      lettersTeHerhalen += letter;
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = "";
      }
    }
    pzin += letter;
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaal(pzin, lettersTeHerhalen);
  }
  return pzin;
}
