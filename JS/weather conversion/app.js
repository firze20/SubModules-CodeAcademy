//  value saved for kelvin 
const kelvin = 293;
let celsius;
// kelvin to celsius stored on the var celsius
celsius = kelvin - 273;
// new variable that stores celsius to fahrenheit 
let fahrenheit = celsius * (9/5) + 32;
// using Math.floor round down the value 
fahrenheit = Math.floor(fahrenheit);
console.log('The temperature is '+fahrenheit+'degress Fahrenheit');
// celsius to newton scale
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log('The conversion of celsius to newton is '+newton);