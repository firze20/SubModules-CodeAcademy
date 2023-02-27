// Write your code here:
const isTheDinnerVegan = dinnerFood => {
    for(let i=0; i < dinnerFood.length; i++){
        if(dinnerFood[i].source != 'plant'){
            return false
        }
        else {
            return true;
        }
    }
}
// Feel free to comment out the code below to test your function

const dinner = [{name: 'hamburger', source: 'meat'}, {name: 'cheese', source: 'dairy'}, {name: 'ketchup', source:'plant'}, {name: 'bun', source: 'plant'}, {name: 'dessert twinkies', source:'unknown'}];

console.log(isTheDinnerVegan(dinner))
// Should print false

console.log(dinner[0].source);