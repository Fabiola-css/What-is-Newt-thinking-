async function getFact() {
  const API_URL =
    "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);

    let randomFact = json.text;
    showRandomFact(randomFact);
    console.log(randomFact);

    localStorage.setItem("quote", JSON.stringify(randomFact));

    const savedFact = JSON.parse(localStorage.getItem("quote"));
    console.log(savedFact);
  } catch (error) {
    console.error(error.message);
  }
}
getFact();

function showRandomFact(randomFact) {
  let random = document.querySelector("#text");
  random.textContent = randomFact;
}

function gameArea() {
  document.querySelector(".quote-container").removeAttribute("hidden");
  document.querySelector("#changeFact").removeAttribute("hidden");
  document.querySelector("#startGame").setAttribute("hidden", "");
  const musicPlayer = document.getElementById("audiocat");
  musicPlayer.play();
}

let startButton = document.querySelector("#startGame");
startButton.addEventListener("click", gameArea);

let nextButton = document.querySelector("#changeFact");
nextButton.addEventListener("click", getFact);


