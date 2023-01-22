function guessANumber() {
    const rl = require('readline');
  const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  let computerGuess = Math.floor(Math.random() * 100);

  let recusiveAsyncReadLine = function () {
    readline.question('Guess the number(0-100):', (number) => {
      guess = Number(number);

      if (guess <= 100 && guess >= 0) {
        if (guess == computerGuess) {
          console.log("You guess it!");
          return readline.close();
        } else if (guess < computerGuess) {
          console.log("Too Low!");
          recusiveAsyncReadLine();
        } else if (guess > computerGuess) {
          console.log("Too High!");
          recusiveAsyncReadLine();
        }
      } else {
        console.log("Invalid input! Try again...");
        recusiveAsyncReadLine();
      }
    });
  };
  recusiveAsyncReadLine();
}
guessANumber();
