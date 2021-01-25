// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const genDiv = document.querySelector(".genDiv"),
  genSlider = genDiv.querySelector("input");

const guessDiv = document.querySelector(".guessDiv"),
  guessH2 = document.createElement("h2"),
  guessInput = document.createElement("input"),
  playBtn = document.createElement("button");

const resultDiv = document.querySelector(".resultDiv"),
  detailH3 = document.createElement("h3"),
  resultH1 = document.createElement("h2");

function updateResult(user, random) {
  //console.log("   updateResult!");
  detailH3.innerText = `You chose ${user}, the machine chose ${random}`;

  if (user === random) {
    resultH1.innerText = "You won!";
  } else {
    resultH1.innerText = "You lost!";
  }
}

function createResultBlock(user, random) {
  //console.log("   createResultBlock!");
  resultDiv.appendChild(detailH3);
  resultDiv.appendChild(resultH1);

  resultDiv.classList.add("displayBlock");

  updateResult(user, random);
}

function genRandom() {
  const rangeVal = parseInt(genSlider.value, 10) + 1;
  const num = Math.floor(Math.random() * rangeVal);
  return num;
}

function guessInputHandler(event) {
  const userNum = parseInt(event.target.previousSibling.value, 10);

  if (userNum > parseInt(genSlider.value, 10)) {
    alert("you have to choose between the range!");
    return;
  }

  const randomNum = genRandom();
  //console.log("randomNum", randomNum);
  if (resultDiv.classList.contains("displayBlock")) {
    updateResult(userNum, randomNum);
  } else {
    createResultBlock(userNum, randomNum);
  }
}

function createGuessBlock() {
  guessH2.innerText = "Guess the Number!";
  playBtn.innerText = "Play";

  guessDiv.appendChild(guessH2);
  guessDiv.appendChild(guessInput);
  guessDiv.appendChild(playBtn);

  guessDiv.classList.add("displayBlock");
}

function guessTheNum() {
  //console.log("guessTheNum Start!");
  if (!guessDiv.classList.contains("displayBlock")) {
    createGuessBlock();
  }

  playBtn.addEventListener("click", guessInputHandler);
}

function sliderHandler() {
  //console.log(`range changed! ${genSlider.value}`);
  const NumSelected = genDiv.querySelector("span");
  NumSelected.innerText = genSlider.value;
  //console.log(typeof genSlider.value);
  genSlider.addEventListener("change", guessTheNum);
}

function init() {
  setInterval(sliderHandler, 500);
}

init();
