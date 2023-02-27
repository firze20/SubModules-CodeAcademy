// Write your code here:
const findMyKeys = objects => {
    const keys = objects.find(element => element === 'keys');
    if(keys){
        return objects.indexOf(keys);
    }
    else {
        return -1;
    }
}


// Feel free to comment out the code below to test your function

const randomStuff = ['credit card', 'screwdriver', 'receipt', 'gum', 'keys', 'used gum', 'plastic spoon'];

console.log(findMyKeys(randomStuff))
// Should print 4
