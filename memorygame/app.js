const cards = document.querySelectorAll(".memory-card");
const won = document.getElementById("won");
const play = document.getElementById("playAgain");
const button = document.getElementsByClassName("btn-handle");
const body = document.getElementsByTagName("body")[0];


var win = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkCards();
}

function checkCards() {
  let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;

  isMatch ? cardsMatch() : cardsDontMatch();
}

function cardsMatch() {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);

  win += 2;
 
  if (win === 12) {
    won.style.visibility = "visible";
  }

  resetBoard();
}

function cardsDontMatch() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);

}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function playAgain() {
  location.reload();
}

play.addEventListener("click", playAgain);

(function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})(); 

cards.forEach((card) => card.addEventListener("click", flipCard));
