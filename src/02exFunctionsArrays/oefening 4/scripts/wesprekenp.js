import { vertaal, vertaalij } from "./vertaal.js";

//const zin = prompt("Geef een zin in: ");
const zin =
  "Als de kat van huis is, dansen de muizen, dat maakt de persoon die ijsjes eet blij.";
//const zin = "ik ben blij voor jou.";

console.log(`De zin in P taal, versie met arrays:\n ${vertaal(zin)}`);

console.log(`De zin in P taal met ij:\n ${vertaalij(zin)}`);
