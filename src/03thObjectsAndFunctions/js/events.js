"use strict";

const myAvatar = {
  name: "Bob",
  points: 20,
  gender: "male",
  hair: { color: "black", cut: "punk" },
  sayHi: function () {
    const title = this.gender === "male" ? "Sir" : "Miss";
    return `Hi, I am ${title} ${this.name}`;
  },
};

const sayHiClicked = function (event) {
  //alert(myAvatar.sayHi());
  console.log(myAvatar.sayHi());
  //alert(`event.target: ${event.target} & id: ${event.target.id}`);
  console.log(`event.target: ${event.target} & id: ${event.target.id}`);
};

// const init = function () {
//   const sayHiButton = document.getElementById('sayHi');
//   sayHiButton.onclick = sayHiClicked;
// };

const beClever = function (event) {
  //alert(`I know you clicked on button that says ${event.target.value}`);
  console.log(`I know you clicked on button that says ${event.target.value}`);
};

const init = function () {
  const sayHiButton = document.getElementById("sayHi");
  sayHiButton.addEventListener("click", sayHiClicked);
  sayHiButton.addEventListener("click", beClever);
};

window.onload = init;
