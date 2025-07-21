import {
  vertaal as vertaalString,
  vertaalIJ as vertaalIJString,
} from "./vertaalString.js";
import {
  vertaal as vertaalArray,
  vertaalIJ as vertaalIJArray,
} from "./vertaalArray.js";

const zin = prompt("Geef een zin in: ");
//const zin = "Als de kat van huis is, dansen de muizen";
alert(`De zin in P taal: ${vertaalString(zin)}`);

/* Oplossing voor extra oefening met IJ */
alert(`De zin in P taal met ij: ${vertaalIJString(zin)}`);

/* Oplossing gebruik makend van Arrays */
alert(`De zin in P taal: ${vertaalArray(zin)}`);

/* Oplossing voor extra oefening met IJ */
alert(`De zin in P taal met ij: ${vertaalIJArray(zin)}`);
