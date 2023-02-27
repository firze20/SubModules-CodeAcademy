const newNumbers = [1, 3, 5, 7];

//reduce takes 2 arguments, we are passing a function as first argument that has 2 arguments (acumular and currentvalue)
// the second argument we could leave it empty but we passed 10, this means the currentValue variable starts at 10
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log(`The value of accumulator:${accumulator}`);
    console.log(`The value of currentValue:${currentValue}`);
    return accumulator + currentValue;
}, 10);

console.log(newSum);