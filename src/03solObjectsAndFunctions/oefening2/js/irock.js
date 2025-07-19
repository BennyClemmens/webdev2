"use strict";

const myPetRock = {
  userName: "",
  image: "images/rock.png",
  resetImage: function () {
    this.image = "images/rock.png";
  },
};

export function greetUser() {
  document.getElementById("rockImg").onclick = touchRock;
  window.alert("Hello, I am your pet rock.");
}

function showPetRock() {
  document.getElementById("rockImg").src = myPetRock.image;
}

function touchRock() {
  if (myPetRock.userName) {
    window.alert(`I like the attention, ${myPetRock.userName}. Thank you...`);
  } else {
    const userName = window.prompt(
      "What is your name?",
      "Enter your name here."
    );
    if (userName) {
      myPetRock.userName = userName;
      window.alert(`It is good to meet you, ${myPetRock.userName}!`);
    }
  }
  myPetRock.image = "images/rock_happy.png";
  showPetRock();
  myPetRock.resetImage();
  setTimeout(showPetRock, 2 * 1000);
}
