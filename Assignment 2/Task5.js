var secret = 6;

var numUser = prompt("Guess the secret number: " );

if (numUser == secret) {

    alert ("Bingo! Correct Answer");
}
if (numUser == secret - 1 || numUser == secret + 1) {

    alert ("Close enough to the correct answer.")
}