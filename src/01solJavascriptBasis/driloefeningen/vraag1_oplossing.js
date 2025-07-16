/**
 * Vraag 1
 * In de programmacode hieronder zijn sommige 'best practices' niet toegepast.
 * Pas de programmacode aan zodat de geziene 'best practices' worden toegepast.
 */

// var WelcomeMessage = 'Hallo';
// name = prompt('Hoe heet je?');
// console.log(WelcomeMessage + ' ' + name);

/* Oplossing */
// gebruik strict mode
'use strict';
// Gebruik 'const' en 'let' in plaats van 'var'.
// Class names laten we beginnen met een hoofdletter,
// maar namen van variabelen beginnen we met een kleine letter.
const welcomeMessage = 'Hallo';
// // Declareer een variabele altijd expliciet met const of let
// // en sluit een const statement af met een puntkomma;
const yourName = prompt('Hoe heet je?');
// Gebruik template literals om de leesbaarheid te verhogen.
console.log(`${welcomeMessage} ${yourName}`);
