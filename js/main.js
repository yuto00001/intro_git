"use strict";

const show = document.getElementById("show");
const main = document.getElementById("main");

show.addEventListener("click", () => {
  if (main.className === "menu-open") {
    main.className = "";
  } else {
    main.className = "menu-open";
  }
});
