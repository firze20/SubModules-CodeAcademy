// Write your function here:
const truthyOrFalsy = (anyThing) => {
  if(anyThing)
  {
    return true;
  }
  else{
    return false;
  }
}

const truthyOrFalsy2 = (randomObj) => {
  randomObj ? console.log(true) : console.log(false);
}


// Uncomment the line below when you're ready to try out your function
console.log(truthyOrFalsy(0)); // Should print false
console.log(truthyOrFalsy2(1));
// We encourage you to add more function calls of your own to test your code!
