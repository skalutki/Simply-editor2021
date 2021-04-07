import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log("HELLO 🚀");

const save = document.querySelector(".button-save--js");
const load = document.querySelector(".button-load--js"); 
const enterInput = document.querySelector(".editor--js");
const trash = document.querySelector(".button-trash--js");


save.addEventListener("click", () => {
  localStorage.setItem("entry", enterInput.value);
});

load.addEventListener("click", () => {
  const entry = localStorage.getItem("entry");
 
 
  let result = "";

  if (entry) {
    result = entry;
  }
  enterInput.value = result;
});

trash.addEventListener("click", () => {
  localStorage.removeItem("entry");
  
  location.reload()
});