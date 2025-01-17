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

    localStorage.setItem("quote", JSON.stringify(randomFact));

    const savedFact = JSON.parse(localStorage.getItem("quote"));
    console.log(savedFact);
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
}

function changeNewtPicture() {
  let catImage = document.querySelector("#catImage");
  const changePicture = pictureCarousel.shift();
  pictureCarousel.push(changePicture);
  catImage.src = changePicture;
}

export { getRandomFact, randomQuoteDisplay, changeNewtPicture };
