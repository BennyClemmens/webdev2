import * as helpers from "../modules/helpers.js";

function init() {
  document.getElementById("btn3").addEventListener("click", () => {
    helpers.clearMessages();
  });
  document.getElementById("btn1").addEventListener("click", () => {
    cookieStore.get("cookie2").then((cookie) => {
      if (cookie) {
        helpers.addMessage(`cookie2: ${cookie.value}`);
      } else {
        helpers.addMessage("cookie2 not found");
      }
    });
  });
  document.getElementById("btn2").addEventListener("click", () => {
    cookieStore.getAll().then((cookies) => {
      cookies.forEach((element) => {
        helpers.addMessage(`cookie: ${element.name} = ${element.value}`);
      });
    });
  });

  const day = 24 * 60 * 60 * 1000;
  // const promise = cookieStore.set({
  //   name: "cookie1",
  //   value: "cookie1-value",
  //   expires: Date.now() + day,
  // });

  helpers.addMessage("1");

  // promise.then(() => {
  //   helpers.addMessage("cookie1 created");
  // });

  const promiseArray = [
    cookieStore
      .set({
        name: "cookie1",
        value: "cookie1-value",
        expires: Date.now() + day,
      })
      // .then((response) => response.text()),
      .then((response) => "één ok"),
    cookieStore
      .set({
        name: "cookie2",
        value: "cookie2-value",
        expires: Date.now() + day,
      })
      //.then((response) => response.text()),
      .then((response) => "twee ok"),
  ];

  Promise.all(promiseArray).then((array) => {
    //helpers.addMessage("cookies created");
    helpers.addMessage(array.join(", "));
  });

  helpers.addMessage("2");
}

window.onload = init;
