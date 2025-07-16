"use strict";

const input = Number(prompt("Enter a number"));

if (isNaN(input)) console.log("Not a number");
else if (input % 3 === 0 && input % 5 === 0) console.log("FizzBuzz");
else if (input % 3 === 0) console.log("Fizz");
else if (input % 5 === 0) console.log("Buzz");
else console.log(input);

// alternatieve oplossing - plaats uit commentaar
/* const input = Number(prompt("Enter a number"));

if (isNaN(input)) console.log("Not a number");
else {
  let res = "";
  if (input % 3 === 0) res += "Fizz";
  if (input % 5 === 0) res += "Buzz";

  console.log(res !== "" ? res : input);
}
 */
