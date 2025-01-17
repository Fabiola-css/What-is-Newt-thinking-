import {
  getRandomFact,
  randomQuoteDisplay,
  changeNewtPicture,
} from "./functions.js";

document.querySelector("#startGame").addEventListener("click", () => {
  randomQuoteDisplay();
  getRandomFact();
  changeNewtPicture();
});

document.querySelector("#changeFact").addEventListener("click", () => {
  getRandomFact();
  changeNewtPicture();
});
