// Write your code here:
const reverseArray = array => {
    const returnedArray = [];
    for(let i = array.length; i >= 0; i--){
        returnedArray.push(array[i]);
    }
    //because the first element is undefined
    returnedArray.shift();
    return returnedArray
}

// When you're ready to test your code, uncomment the below and run:

const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) 
// Should print ['This', 'will', 'all', 'make', 'sense.'];