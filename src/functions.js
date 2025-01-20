import pictureCarousel from "./pictureCarousel.js";

async function getRandomFact() {
  const API_URL =
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    let randomFact = json.text;
    showRandomFact(randomFact);
  } catch (error) {
    console.error(error.message);
  }
}

function showRandomFact(randomFact) {
  let random = document.querySelector("#text");
  random.textContent = randomFact;
}

function randomQuoteDisplay() {
  document.querySelector(".quote-container").removeAttribute("hidden");
  document.querySelector("#changeFact").removeAttribute("hidden");
  document.querySelector("#startGame").setAttribute("hidden", "");
  const musicPlayer = document.getElementById("audiocat");
  musicPlayer.play();
}

function changeNewtPicture() {
  let catImage = document.querySelector("#catImage");
  const changePicture = pictureCarousel.shift();
  pictureCarousel.push(changePicture);
  catImage.src = changePicture;
}

const favoriteButton = document.querySelector(".favorite");
const favoritesList = document.getElementById("favorites-list");
const returnButton = document.getElementById("return-btn");
const mainContent = document.getElementById("main-container");

favoriteButton.addEventListener("click", () => {
  mainContent.classList.add("hidden");
  favoritesList.classList.remove("hidden");
});

returnButton.addEventListener("click", () => {
  mainContent.classList.remove("hidden");
  favoritesList.classList.add("hidden");
});

export { getRandomFact, randomQuoteDisplay, changeNewtPicture };
