"use strict";

const speedLimit = 70;
const kmPerPoint = 5;
let message = "";
const speed = Number(prompt("Enter your speed"));
if (isNaN(speed)) message = "Not a number";
else if (speed <= speedLimit) message = "OK";
else {
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  //console.log(points)
  if (points < 12) message = `points: ${points}`;
  else message = "drivers license suspendend";
  // alternatief voor laatste if...else...
  // message = points < 12 ? `points: ${points}` : "drivers license suspendend";
}
console.log(message);
