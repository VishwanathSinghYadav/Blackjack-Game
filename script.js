let firstCard = 3;
let secondCard = 10;
let sum = firstCard + secondCard;
message = "";
let startEl = document.getElementById("startGame()");

function startGame() {

    if (sum < 21) {
        message = "Want to add an extra card?";
    } else if (sum === 21) {
        message = "That's a Blackjack!!! ♠ "
    } else {
        message = "You are out of luck. Try again? "
    }

    console.log(message);
}