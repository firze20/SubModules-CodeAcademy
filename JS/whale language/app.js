const input = 'turpentine and turtles';
//Array of vowels (Whale Language)
const vowels = ['a', 'e', 'i', 'o', 'u'];
//array to later store the vowels from my input
let resultArray = [];
//Loop inside input array
for(let i = 0; i < input.length; i++){
  //console.log(input[i]);
  //Loop inside vowels array
  for(let j = 0; j < vowels.length; j++){
    //compare the input array with the vowels array to check for vowels
    if(input[i] === vowels[j]){
      //if it's e or u it will be duplicated = ee, uu its stored on the resultArray, other vowels won't be duplicated but they will be stored in resultArray aswell 
      input[i] === 'e' || input[i] === 'u' ? resultArray.push(input[i], input[i]) : resultArray.push(input[i]);
    }
  }
}
//remove commas and print the whole array as a string
console.log(resultArray.join(''));