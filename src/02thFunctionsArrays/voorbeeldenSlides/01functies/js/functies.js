"use strict";

//declaratie en aanroepen
function getAvatar(points) {
  let avatar;
  if (points < 100) {
    avatar = "Mouse";
  } else if (points < 1000) {
    avatar = "Cat";
  } else {
    avatar = "Gorilla";
  }
  return avatar;
}
const myAvatar = getAvatar(335);
console.log(`my avatar : ${myAvatar}`);

//parameters
function showMessage(from, text) {
  // parameters: 	from, text 	alert(from + ': ' + text);
  console.log(from + ": " + text);
}

showMessage("Ann", "Hello!"); // Ann: Hello! (*)
showMessage("Ann", "What's up?"); // Ann: What's up? (**)

//default value
function showMessageDefault(from, text = "empty message") {
  console.log(from + ": " + text);
}

showMessageDefault("Ann"); // Ann: empty message

function showMessageOtherDefault(from, text) {
  text = text ?? "empty message";
  console.log(from + ": " + text);
}

showMessageOtherDefault("Ann"); // Ann: empty message

//Hoisting
sayHi("Bob");
function sayHi(name) {
  console.log(`Hi, my name is ${name}`);
}

//x = 10;
let x = 20;
console.log(x);

//Built-in methods
function doAlert() {
  alert("I am an alert box!");
}
function doConfirm() {
  const antwoord = confirm("Press a button");
  if (antwoord === true) console.log("You pressed OK!");
  else console.log("You pressed Cancel!");
}
function doPrompt() {
  const name = prompt("Please enter your name", "Harry Potter");
  if (name !== null && name !== "") {
    console.log(`Hello ${name}! How are you today?`);
  }
}
doAlert();
doConfirm();
doPrompt();
