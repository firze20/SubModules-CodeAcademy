//Function Expression that only accepts Rock Paper Scissors
const getUserChoice = userInput => {
    //Transform the input to LowerCase
    userInput = userInput.toLowerCase();
    //check if its either RPS, else prints error
    userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb' ? userInput : console.log('Error!');
    return userInput;
  }
  
  //Calling the function getUserChoice for testing 
  //getUserChoice('ROCK');
  
  // This function generates a random number between 0-2 and returns either a rock, paper or scissors based on that number
  getComputerChoice = () => {
    let numRPS = Math.floor(Math.random() *3);
    switch(numRPS){
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
      default:
        return 'error';
    }
  }
  
  //Function to determinate who is the winner based on 2 params userChoise and computerChoice
  determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice)
    {
      return 'Game was a tie!';
    }
    if(userChoice === 'rock')
    {
      if(computerChoice === 'scissors')
      {
        return 'You Won';
      }
      else{
        return 'You Lost'
      }
    }
    if(userChoice === 'paper')
    {
      if(computerChoice === 'rock')
      {
        return 'You Won!'
      }
      else{
        return 'You Lost!'
      }
    }
    if(userChoice === 'scissors')
    {
      if(computerChoice === 'paper'){
        return 'You Won!'
      }
      else {
        return 'You Lost';
      }
    }
    if(userChoice === 'bomb')
    {
        return 'You blasted! you won!'
    }
  
  }
  
  //Testing if everything is working
  //console.log(determineWinner('paper','rock'));

  //Funciton that will call getUserChoice (our weapon choice) then get the computer choice! (getComputerChoice)
  playGame = () => {
      let userChoice = getUserChoice('PAPER');
      let computerChoice = getComputerChoice();
      console.log(userChoice);
      console.log(computerChoice);
      //Calling determinewinner to know who won! passing 2 parameters
      console.log(determineWinner(userChoice, computerChoice));

  }

//Calling playGame Function 
playGame();