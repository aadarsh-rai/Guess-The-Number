let randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
let lives = 5;
let highscore = 0;

const displyMessage = (message) => {
  document.querySelector(".message").textContent = message;
};
const displayDescription = (description) => {
  document.querySelector(".description").textContent = description;
};
const displyMessageColor = (color) => {
  document.querySelector(".message").style.color = color;
};

const displayColorWhenCorrect = (colorWhenCorrect) => {
  document.querySelector(".p-lives").style.color = colorWhenCorrect;
  document.querySelector(".highscore").style.color = colorWhenCorrect;
  document.querySelector(".lives").style.color = colorWhenCorrect;
  document.querySelector(".p-highscore").style.color = colorWhenCorrect;
  document.querySelector(".message").style.color = colorWhenCorrect;
  document.querySelector(".description").style.color = colorWhenCorrect;
  document.querySelector(".heading-1").style.color = colorWhenCorrect;
  document.querySelector(".heading-4").style.color = colorWhenCorrect;
  document.querySelector(".enter-number").style.color = colorWhenCorrect;
};

const displaylives = (lives) => {
  document.querySelector(".lives").textContent = lives;
};

//! Try again button

document.querySelector(".btn-reset").addEventListener("click", () => {
  randomNumber = Number(Math.trunc(Math.random() * 20) + 1);
  lives = 5;
  displayDescription("Guess the Number to make the background Colorful");
  displayColorWhenCorrect("black");
  document.querySelector(".main").style.backgroundColor = "rgb(153, 152, 152)";
  document.querySelector(".guess").textContent = "?";
  displyMessageColor("black");
  displyMessage("Start Guessing");
  displaylives(lives);
});

//! Check the number button

document.querySelector(".check").addEventListener("click", () => {
  const input = Number(document.querySelector(".input").value);

  //? If there is no number input

  if (!input) {
    displyMessage("No value is entered");

    //? If the guess input is correct to the random number
  } else if (input === randomNumber) {
    if (highscore < lives) {
      highscore = lives;
      document.querySelector(".highscore").textContent = highscore;
    }
    displyMessage("Correct Number");
    displyMessageColor("white");
    displayColorWhenCorrect("white");
    displayDescription("Wow! You have make this colorful");

    //? randomNumber will be displayed instead of ? if the guess number is right
    document.querySelector(".guess").textContent = randomNumber;
    document.querySelector(".guess").style.backgroundColor = "white";
    document.querySelector(".main").style.backgroundColor = "#4267B2";

    //? If the guess input is incorrect to the random number
  } else if (input !== randomNumber) {
    if (lives > 1) {
      displyMessage(input > randomNumber ? "High number" : "Low Number");
      displyMessageColor("lightgrey");

      //? If the guess input is incorrect to the random number, it will decreases the lives by 1

      displaylives(--lives);
    } else {
      displaylives(0);
      displyMessage("You lost! Try again");
      displyMessageColor("red");
    }
  }
});
