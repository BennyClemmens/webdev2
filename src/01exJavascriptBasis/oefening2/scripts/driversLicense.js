"use strict";

let speedLimit = 70;
let kmPerPoint = 5;

const speed = Number(prompt("Enter your speed in km/h:"));

let output;
if (speed <= speedLimit) {
  output = "OK";
} else {
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    output = "License suspended";
  } else {
    output = `Points: ${points}`;
  }
}
console.log(output);
