// Write function below
const factorial = number => {
    let factorialResult = 1;
    for(let i=number; i > 0; i--){
      factorialResult *= i;
    }
    return factorialResult;
  }

console.log(factorial(6));
  