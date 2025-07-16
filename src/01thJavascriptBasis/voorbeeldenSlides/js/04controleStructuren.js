"use strict";
//selectie
let scoops = 4;
if (scoops == 3) {
  console.log("Ice cream is running low!");
} else if (scoops > 9) {
  console.log("Eat faster, the ice cream is going to melt!");
} else if (scoops == 2) {
  console.log("Going once!");
} else if (scoops == 1) {
  console.log("Going twice!");
} else if (scoops == 0) {
  console.log("Gone!");
} else {
  console.log("Still lots of ice cream left, come and get it.");
}

const d = new Date();
switch (d.getDay()) {
  case 5:
    console.log("Finally Friday");
    break;
  case 6:
    console.log("Super Saturday");
    break;
  case 0:
    console.log("Sleepy Sunday");
    break;
  default:
    console.log("I'm really looking forward to this weekend!");
}
//iteraties
scoops = 10;

while (scoops > 0) {
  console.log("More ice cream!");
  scoops--;
}
console.log("Life without ice cream isn't the same");

do {
  console.log("More ice cream!");
  scoops++;
} while (scoops < 10);
console.log(":)");

for (let berries = 5; berries > 0; berries--) {
  console.log("Eating a berry");
}
console.log("No more berries left");

//break : jumping out
let k = 0;
while (true) {
  k++;
  if (k > 5) break;
  console.log(`Waarde voor k : ${k}`);
}

//skipping with continue
let l = -3;
while (l < 3) {
  l++;
  if (l < 0) continue;
  console.log(`Waarde voor l : ${l}`);
}
