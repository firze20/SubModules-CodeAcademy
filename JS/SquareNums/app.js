const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num

// Write your code here:
const squareNums = (numbersArray) => {
  const squareNumbers = numbersArray.map(x => x * x);
  return squareNumbers;
}

console.log(squareNums(numbers));