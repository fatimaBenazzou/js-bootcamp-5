// 1. DOM ELEMENT SELECTION
//    - Select the following elements from the HTML using their IDs
//        • Element with id "feedback"     → will show hints (too high/low or correct)
const feedback = document.getElementById("feedback");
//        • Element with id "attempts"     → will display remaining attempts
const attempts = document.getElementById("attempts");
//        • Element with id "game_status"  → will show win/loss messages
const game_status = document.getElementById("game_status");
//        • Input field with id "guess"    → where the user types their number
const guess = document.getElementById("guess");
//        • Button with id "my_btn"        → submit button for the guess
const guessButton = document.getElementById("my_btn");

// 2. INITIALIZE GAME STATE
//    - Generate a random mystery number between 1 and 100 (inclusive) and store it in a variable.
let mystery_number = Math.floor(Math.random() * 100) + 1;
//    - Set the starting number of attempts to 5.
let attemps_remaining = 5;
//    - Create a boolean variable to track whether the game is over (initially false).
let game_over = false;

// 3. DEFINE THE PLAY FUNCTION
//    This function will run every time the player submits a guess.
function play() {
  //    a. If the game is already over, exit the function immediately (do nothing).
  if (game_over) return;

  //    b. Get the value from the guess input field and convert it to an integer.
  const user_guess = parseInt(guess.value);

  //    c. Validate the input:
  //        - If it's not a number, OR it's less than 1, OR greater than 100,
  //          show an alert asking for a valid number between 1 and 100, then exit.
  if (isNaN(user_guess) || user_guess < 1 || user_guess > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  //    d. Decrease the number of remaining attempts by 1.
  attemps_remaining--;

  //    e. Compare the user's guess to the mystery number:
  //        • If equal:
  if (user_guess === mystery_number) {
    //            - Update the feedback text to "🎉 Correct!" and set its color to green.
    feedback.textContent = "🎉 Correct!";
    feedback.style.color = "#28a745";
    //            - Update the game status with a congratulations message.
    game_status.textContent =
      "Congratulations ! You guessed the mystery number !";
    //            - Add a CSS class "win" to the game status element.
    game_status.classList.add("win");
    // game_status.className = "win";
  }
  //        • If too low:
  else if (user_guess < mystery_number) {
    //            - Set feedback to "Too low! Try again." with a blue color.
    feedback.textContent = "Too low! Try again.";
    feedback.style.color = "#0066cc";
    attempts.textContent = `Attemps Remaining: ${attemps_remaining}`;
  }
  //        • If too high:
  //            - Set feedback to "Too high! Try again." with a red color.
  else {
    feedback.textContent = "Too high! Try again.";
    feedback.style.color = "#cc0000";
    attempts.textContent = `Attemps Remaining: ${attemps_remaining}`;
  }
  //    f. In both "too low" and "too high" cases, update the attempts display to show the new count.
  //    g. After processing the guess, check:
  //        - If the player has used all attempts AND didn’t guess correctly:
  //            • Update game status with a message revealing the mystery number.
  //            • Add a CSS class "loss" to the game status element.
  if (attemps_remaining === 0 && user_guess !== mystery_number) {
    game_status.textContent = `You failed LOSER ! the mystery number was ${mystery_number}. GAME OVER !`;
    game_status.classList.add("loss");
    // game_status.className = "loss";
  }
  //    h. If the player has either won OR run out of attempts:
  //        • Set the game_over flag to true.
  //        • Disable the input field and the guess button so no more guesses can be made.
  if (user_guess === mystery_number || attemps_remaining === 0) {
    game_over = true;
    guess.disabled = true;
    guessButton.disabled = true;
  }
  //    i. Finally, clear the input field and focus it again for better UX.
  guess.value = "";
  guess.focus();
}

// 4. ALLOW SUBMISSION VIA THE ENTER KEY
//    - Add an event listener to the guess input field for the "keypress" event.
//    - Inside the listener, check if the pressed key is "Enter" AND the game is not over.
//    - If both conditions are true, call the play() function.
guess.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !game_over) play();
});
// 5. INITIALIZE THE GAME WHEN THE PAGE LOADS
//    - Add an event listener for the "load" event on the window.
//    - When the page finishes loading, automatically focus the guess input field
//      so the user can start typing right away.
window.addEventListener("load", () => {
  guess.focus();
});
