//*let soundElementCat = document.getElementById("catsound");
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

    //const favQuote = localStorage.getItem("quote");

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

let button = document.querySelector("#changeFact");
button.addEventListener("click", getFact);


/*let Btn = document.getElementById("#changeFact");
let audio = document.getElementById("#startSound");

Btn.addEventListener(`"click", function()`);{
  startSound.play()

}*/
