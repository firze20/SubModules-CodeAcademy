let userName = '';

//ternary expression if ? else :
userName ? console.log('Hello, Jane!') : console.log('Hello!');

let userQuestion = 'What is love?';

console.log(userQuestion + 'asked by ' +userName);

let randomNumber;

//generate a random number between 0 and 7 and store the value
randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch(randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Do not count on it';
    break;
  case 4:
    eightBall = 'My sources say no';
    break;
  case 5:
    eightBall = 'Outlook not so good';
    break;
  case 6:
    eightBall = 'Signs point to yes';
    break;
  default:
    eightBall = "It's kawabanga!"
    break;
}

console.log(eightBall);

