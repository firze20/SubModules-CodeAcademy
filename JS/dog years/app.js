// my age
const myAge = 26;
//first 2 years of a dog equal to 10.5
let earlyYears = 2;
// multiply first 2 years of a dog = 10.5 for yeach year 
earlyYears*= 10.5;
//subtracting my age by 2
let laterYears = myAge - 2;
//my Age* 4 = my age in dog years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);
//combine early years + my dog years
const myAgeInDogYears = earlyYears + laterYears;
//String Method, storing my name on var myName
const myName = 'Fábio'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);