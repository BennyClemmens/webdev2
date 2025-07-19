"use strict";

// Array built-in methods
let pizzas = ["Chicken & Bacon", "Mushroom", "Pepperoni"];
console.log(pizzas);
pizzas = pizzas.concat(["Spicy Beef", "Chicken & Mushroom"]);
console.log(pizzas);
console.log(pizzas.join());
console.log(pizzas.slice(2, 4));
console.log(pizzas.splice(2, 1, "Chicken & Pepper", "Veggie Deluxe"));
console.log(pizzas);
console.log(pizzas.sort());

// reverse vs toReversed
pizzas = ["Chicken & Bacon", "Mushroom", "Pepperoni"];
pizzas.reverse();
console.log(pizzas);
pizzas = ["Chicken & Bacon", "Mushroom", "Pepperoni"];
const reversedPizzas = pizzas.toReversed();
console.log(pizzas);
console.log(reversedPizzas);

// splice vs toSpliced
pizzas = [
  "Margherita",
  "Mushroom",
  "Spinach & Rocket",
  "Pineapple & Sweetcorn",
];
console.log(pizzas);
pizzas.splice(1, 2, "Hawai");
console.log(pizzas);
pizzas = [
  "Margherita",
  "Mushroom",
  "Spinach & Rocket",
  "Pineapple & Sweetcorn",
];
const splicedPizzas = pizzas.toSpliced(1, 2, "Hawai");
console.log(pizzas);
console.log(splicedPizzas);
