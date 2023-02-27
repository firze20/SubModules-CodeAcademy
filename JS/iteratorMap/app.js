const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

//using Map to return a new array that has the first letter of each element in animals array
const secretMessage = animals.map(firstletter => { 
    return firstletter[0];
});

//unifies them '' no space printing the secretMessage
console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

//creates a new array called smallNumbers, maps from the array above "bigNumbers" and divides each element by 100
const smallNumbers = bigNumbers.map(dividedNum => {
    return dividedNum / 100;
  });


console.log(smallNumbers);