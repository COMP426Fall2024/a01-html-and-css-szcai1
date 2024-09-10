"use strict";

const img = document.getElementById("charizard");
console.log("hi");
const changeImage = function () {
  console.log(img.id);
  console.log(img.src === null);
  if (img.id === "charizard") {
    if (img.src.endswith("./images/006.png"))
      img.src = "./images/shiny-charizard.png";
    else img.src = "./images/006.png";
  }
};
