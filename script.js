let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let message = "";
let messageEl = document.getElementById("message-id");
let titleEl = document.getElementById("title-id");

function startGame() {
    titleEl.style.visibility = "hidden";
    if (sum < 21) {
        message = "Want to add an extra card?";
    } else if (sum === 21) {
        message = "That's a Blackjack!!! \n ♠ "
    } else {
        message = "You are out of luck. Try again? "
    }

    messageEl.innerText = message;

}