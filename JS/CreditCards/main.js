// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:
function validateCred(array) {
    if(array.length === 16){
        const half = Math.ceil(array.length / 2);
        //Splitting the array in 2 parts, easier to filter Oddnumbers 
        const firstHalf = array.slice(0, half);
        const secondHalf = array.slice(-half);
        let firstSum = 0;
        let secondSum = 0;
        //Sum of odd places (right to left)
        for(let i=secondHalf.length-1; i > 0; i=i-2){
            secondSum+=secondHalf[i];
        }
        for(let j=firstHalf.length-1; j > 0; j=j-2){
            firstSum+=firstHalf[j];
        }
        // Sum of Odd Numbers
        const sumOddPlaces = firstSum + secondSum;
        //Now we will check the Even Numbers and store them in this array
        let arrayDoubles = [];
        for(let k=array.length; k >= 0; k=k-2){
            arrayDoubles.push(array[k]);
        }
        //removing the undefined
        arrayDoubles.shift();
        let sumOfEven = 0;
        //Double each digit of the Even number array, if the sum equals to 2 digits, example (9x2 = 18, we have to split 1 8 = 1+8 = 9) else we just add up
        for(num in arrayDoubles){
            const double = arrayDoubles[num] * 2;
            if(double.toString().length > 1){
                const doubleToString = double.toString();
                const firstDigitString = doubleToString[0];
                const secondDigitString = doubleToString[1];
                sumOfEven+= parseInt(firstDigitString) + parseInt(secondDigitString);
            }
            else {
                sumOfEven+=double;
            }
        }
        //sum Even with Odd numbers
        const sumValidation = sumOfEven + sumOddPlaces;
        //if modulo of the division by 10 doesn't equal 0, then we know the card is unvalid
        if(sumValidation % 10 === 0){
            return true;
        }
        else{
            return false;
        }

    }
    else {
        return false;
    }
}

function findInvalidCards(nestedArray) {
  //Filter Invalid Credit Cards   
  const result = nestedArray.filter(card => validateCred(card) === false);
  return result;
}

function idInvalidCardCompanies(nestedArray) {
    let cardCompanies = [];
    //Reading Invalid Cards Only
    const results = findInvalidCards(nestedArray);
    for(card in results){
        //Filtering the first element of each card 
        switch(results[card][0]){
            case 3:
                cardCompanies.push('Amex (American Express)');
                break;
            case 4:
                cardCompanies.push('Visa');
                break;
            case 5:
                cardCompanies.push('Mastercard');
                break;
            case 6:
                cardCompanies.push('Discover');
                break;
            default:
                console.log('Company Not Found!')
        }
    }
    //Returning the array with removed duplicates
    return cardCompanies.filter((item, index) => cardCompanies.indexOf(item) === index);
}

console.log(idInvalidCardCompanies(batch));
