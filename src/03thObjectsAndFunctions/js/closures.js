"use strict";

// const makeFunc = function () {
//   const message = 'Sir Bob is still around ;-)';
//   const displayName = function () {
//     console.log(message);
//   };
//   return displayName;
// };
// const aDisplayFunction = makeFunc();
// aDisplayFunction();

// // function factory
const makeFunc = function (title) {
  const message = `${title} Bob is still around ;-)`;
  const displayName = function () {
    console.log(message);
  };
  return displayName;
};
const misterDisplayFunction = makeFunc("Mister");
const sirDisplayFunction = makeFunc("Sir");
misterDisplayFunction();
sirDisplayFunction();

// // event handling

// example1
const makeBtnclickHandler = function (btnId) {
  return function () {
    alert(`You clicked button ${btnId}`);
  };
};

// const initButtons = function () {
//   for (let i = 1; i <= 3; i++) {
//     document.getElementById('btn' + i).onclick = makeBtnclickHandler(i);
//   }
// };

// // example2 - met een anonymous function als event handler
// const initButtons = function () {
//   for (let i = 1; i <= 3; i++) {
//     document.getElementById('btn' + i).onclick = function () {
//       alert(`You clicked button ${i}.`);
//     };
//   }
// };

// example3 - zonder closures met event.target
const initButtons = function () {
  for (let i = 1; i <= 3; i++) {
    document.getElementById("btn" + i).onclick = function (event) {
      alert(`You clicked ${event.target.id}`);
    };
  }
};

//window.document.location.host = "benny";
console.log(window);

window.onload = initButtons;
