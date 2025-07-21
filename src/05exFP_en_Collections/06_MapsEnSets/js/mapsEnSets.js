'use strict';
// ==================
// a. Gesorteerde map
// ==================
const tekst =
  'De wet van Zipf is oorspronkelijk de door George Kingsley Zipf geconstateerde en naar hem genoemde wetmatigheid in de taalkunde dat in natuurlijke taal de frequentie van voorkomen van een woord ruwweg dalend exponentieel is met de rang van het woord in de frequentietabel en wel zo dat het meest frequente woord ongeveer twee keer zo vaak voorkomt als het op een na frequentste woord dat weer twee keer zo vaak als het derde frequentste enzovoort';

// =======================
// b. Coderen en Decoderen
// =======================
const alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const teCoderen = 'ERRARE HUMANUM EST.';
const teDecoderen = 'SHUIHFW! BRX DUH GRLQJ JUHDW, NHHS LW XS!';
const code = 3;

const codeer = undefined;

const decodeer = undefined;

console.log(
  `"${teCoderen}" is gecodeerd "${codeer(teCoderen, code, alfabet)}"\n`
);
console.log(
  `"${teDecoderen}" is gedecodeerd "${decodeer(teDecoderen, code, alfabet)}"`
);

// ===========
// c. Camelize
// ===========
const camelize = undefined;

console.log(camelize('background-color')); // backgroundColor
console.log(camelize('list-style-image')); // listStyleImage
console.log(camelize('-webkit-transition')); // WebkitTransition

// ========
// d. Buren
// ========
const woorden = [
  'KOLDER',
  'HOLDER',
  'HELDER',
  'HERDER',
  'VERDER',
  'VERVER',
  'VERSER',
  'VELSER'
];

const zijnBuren = undefined;

const allemaalBuren = undefined;
console.log(
  `KOLDER en HOLDER zijn ${zijnBuren('KOLDER', 'HOLDER') ? '' : 'geen '}buren`
);
console.log(
  `KOLDER en HALDER zijn ${zijnBuren('KOLDER', 'HALDER') ? '' : 'geen '}buren`
);
console.log(
  `${allemaalBuren ? 'Alle' : 'Niet alle'} woorden in de array zijn buren.`
);

// =====
// Morse
// =====
let morse = new Map();
morse.set('A', '.-');
morse.set('B', '-...');
morse.set('C', '-.-.');
morse.set('D', '-..');
morse.set('E', '.');
morse.set('F', '..-.');
morse.set('G', '--.');
morse.set('H', '....');
morse.set('I', '..');
morse.set('J', '.---');
morse.set('K', '-.-');
morse.set('L', '.-..');
morse.set('M', '--');
morse.set('N', '-.');
morse.set('O', '---');
morse.set('P', '.--.');
morse.set('Q', '--.-');
morse.set('R', '.-.');
morse.set('S', '...');
morse.set('T', '-');
morse.set('U', '..-');
morse.set('V', '...-');
morse.set('W', '.--');
morse.set('X', '-..-');
morse.set('Y', '-.--');
morse.set('Z', '--..');
morse.set('0', '-----');
morse.set('1', '.----');
morse.set('2', '..---');
morse.set('3', '...--');
morse.set('4', '....-');
morse.set('5', '.....');
morse.set('6', '-....');
morse.set('7', '--...');
morse.set('8', '---..');
morse.set('9', '----.');
morse.set('.', '.-.-.-');
morse.set(',', '--..--');
morse.set('?', '..--..');
morse.set('-', '-....-');
morse.set('/', '-..-.');
morse.set(':', '---...');
morse.set("'", '.----.');
morse.set('-', '-....-');
morse.set(')', '-.--.-');
morse.set(';', '-.-.-');
morse.set('(', '-.--.');
morse.set('=', '-...-');
morse.set('@', '.--.-.');

const converteer = undefined;

console.log(converteer('SOS Javascript', morse));

// ========
// Josephus
// ========
const josephus = undefined;

const aantalPersonen = 30;
const stapGrootte = 9;
console.log(
  `In een cirkel met ${aantalPersonen} personen en stapgrootte ${stapGrootte} sta je best op plaats ${josephus(
    aantalPersonen,
    stapGrootte
  )}`
);
