"use strict";

const input = parseInt(prompt("Enter a number"));

let output = "";
if (isNaN(input)) {
  output = "is not a number";
} else {
  if (input % 3 === 0) {
    output = "Fizz";
  }
  if (input % 5 === 0) {
    output += "Buzz";
  }
}

console.log(output || input);
