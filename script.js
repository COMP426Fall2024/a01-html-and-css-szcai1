"use strict";

const img = document.querySelector(".pokemon-img");
const changeImage = function () {
  if (img.id === "charizard-img") {
    if (img.src.includes("006.png")) {
      img.src = "./images/shiny-charizard.png";
    } else {
      img.src = "./images/006.png";
    }
  } else if (img.id === "blastoise-img") {
    if (img.src.includes("009.png")) {
      img.src = "./images/shiny-blastoise.png";
    } else {
      img.src = "./images/009.png";
    }
  } else {
    if (img.src.includes("003.png")) {
      img.src = "./images/shiny-venusaur.png";
    } else {
      img.src = "./images/003.png";
    }
  }
};
