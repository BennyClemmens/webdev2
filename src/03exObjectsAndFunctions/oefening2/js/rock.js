export const myPetRock = {
  username: "",
  image: "images/rock.png",
  resetImage: function () {
    this.image = "images/rock.png";
  },
};

export const greetUser = function () {
  const rockImg = document.getElementById("rockImg");
  rockImg.addEventListener("click", touchRock);
  alert("Hello, I'm your pet rock!");
};

const askUsername = function () {
  do {
    myPetRock.username = prompt("What is your name?");
  } while (!myPetRock.username);
};

const showRock = function (img) {
  //img.src = "./images/rock_happy.png"; // images werkt ook, ../images & /images NIET!
  img.src = myPetRock.image;
};

export const touchRock = function (event) {
  let message;
  if (!myPetRock.username) {
    askUsername();
    message = `It's good to meet you, ${myPetRock.username}!`;
  } else {
    message = `I like the attention, ${myPetRock.username}. Thank you!`;
  }
  alert(message);
  myPetRock.image = "images/rock_happy.png";
  showRock(event.target);
  myPetRock.resetImage();
  setTimeout(showRock(event.target), 2 * 1000);
};
