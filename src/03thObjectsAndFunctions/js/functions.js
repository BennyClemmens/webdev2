"use strict";

const myAvatar = {
  name: "Bob",
  points: 20,
  gender: "male",
  hair: { color: "black", cut: "punk" },
};

// Functie declaratie
function sayHi(name) {
  return `Hi, my name is ${name}`;
}
alert(sayHi(myAvatar.name));

function sayHi2(name) {
  // John never says Hi...
  if (name !== "John") return `Hi, my name is ${name}`;
}
alert(sayHi2("John"));

alert(sayHi2("NotJohn"));

// Parameter passing
function dyeHair(avatar, color) {
  avatar.hair.color = color;
  color = "pink";
}
const newColor = "Red";
console.log("Before dyeing hair:");
console.log(`newColor = ${newColor}`);
console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);
dyeHair(myAvatar, newColor);
console.log("After dyeing hair:");
console.log(`newColor = ${newColor}`);
console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);

function dyeHair2(avatar, color = "Blue") {
  avatar.hair.color = color;
}
dyeHair2(myAvatar);
console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);

// default value
function f(a, b = 12) {
  console.log(a, b);
}
f(11);

// rest parameter
function g(a, b, ...otherArgs) {
  for (const value of otherArgs) {
    console.log(value);
  }
}
g(1, 2, 3, "Four", 5);

// Functie expressie
const dyeHair3 = function (avatar, color = "green") {
  avatar.hair.color = color;
};
dyeHair3(myAvatar, "yellow");
console.log(`myAvatar.hair.color = ${myAvatar.hair.color}`);

// Functies doorgeven aan andere functies
const isPass = function (mark) {
  return mark >= 10;
};
const giveFeedback = function (mark) {
  return mark < 10 ? "Disastruous" : mark < 12 ? "Mediocre" : "Very good";
};
const convertMark = function (converter, number) {
  return converter(number);
};
console.log(convertMark(isPass, 11));
console.log(convertMark(giveFeedback, 11));

// // Scope van variabelen
let cupOfTea = "Camomille";
const showMyDrink = function () {
  const cupOfCoffee = "Cappuccino";
  cupOfTea = "Peppermint";
  console.log(`I like ${cupOfCoffee} and ${cupOfTea}`);
};
console.log(`I like ${cupOfTea}`);
showMyDrink();
console.log(`I like ${cupOfTea}`);

let globalX = "global X";
let cupOfT = "Camomille";
let outerFunction = function (param1, param2) {
  let outerX = "outer X";
  let cuptOfT = "Fennel";
  let cupOfCoffee = "Cappuccino";
  let innerFunction = function (param1, param3) {
    let innerX = "inner X";
    let cupOfCoffee = "Espresso";
  };
};

// Arrow functies
const isPassx = function (mark) {
  return mark >= 10;
};
console.log(isPassx(10));

// verschil waarde en aanroep
const isPass1 = function pass(mark) {
  return mark >= 10;
};

const isPass2 = (mark) => mark >= 10;

console.log(isPass1);
console.log(`isPass1(16): ${isPass1(16)}`);
console.log(isPass2);
console.log(`isPass2(16): ${isPass2(16)}`);

// // functies toekennen aan variabelen
let isPass4 = (mark) => mark >= 10;
const isBiggerThanNine = isPass4;
console.log(`isPass4: ${isPass4}`);
console.log(`isBiggerThanNine: ${isBiggerThanNine}`);
console.log(isPass4 === isBiggerThanNine);
console.log(`isPass4(20): ${isPass4(20)}`);
console.log(`isBiggerThanNine(20): ${isBiggerThanNine(20)}`);
isPass4 = (mark) => mark >= 50;
console.log(`isPass4: ${isPass4}`);
console.log(`isBiggerThanNine: ${isBiggerThanNine}`);
console.log(isPass4 === isBiggerThanNine);
console.log(`isPass4(20): ${isPass4(20)}`);
console.log(`isBiggerThanNine(20): ${isBiggerThanNine(20)}`);
