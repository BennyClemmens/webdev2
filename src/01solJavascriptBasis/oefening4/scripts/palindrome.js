'use strict';

const input = prompt("Enter a palindrome").toLowerCase();
const length = input.length;
let isPalindrome = true;

for (let i = 0; i < length / 2; i++) {
  if (input[i] !== input[length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

console.log(`${input} is${isPalindrome ? "" : " not"} a palindrome`);
