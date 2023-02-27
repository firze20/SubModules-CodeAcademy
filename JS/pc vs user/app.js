let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//returns random number between 0 to 9 *working

const generateTarget = () => {
  return Math.floor(Math.random() * 9);
}

// compare guesses function *working
const compareGuesses = (userGuess, computerGuess, tobeGuessed) => {
  //compare both user and computer guess, the closest to the secretnumber wins
  return Math.abs(computerGuess - tobeGuessed) > Math.abs(userGuess - tobeGuessed) || Math.abs(computerGuess - tobeGuessed) === Math.abs(userGuess - tobeGuessed) ? true : false;

} 
// updating the score *working
const updateScore = whoWins => {
  switch(whoWins){
    case 'human':
      humanScore +=1;
      break;
    case 'computer':
      computerScore +=1;
      break;
    default:
      return 'Who won? computer or human?';
      break;

  }

}

//increments the current round *working
const advanceRound = () => currentRoundNumber += 1;

let secretTarget = generateTarget();

console.log(compareGuesses(2, 10, secretTarget));