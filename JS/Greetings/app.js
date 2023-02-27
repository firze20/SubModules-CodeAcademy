// Write your code here:
const shoutGreetings = array => {
    let greetings = [];
    for(let i=0; i < array.length; i++){
      greetings.push(array[i].toUpperCase()+'!');
    }
    return greetings;
  }
  
  // Feel free to uncomment out the code below to test your function!
  
  const greetings = ['hello', 'hi', 'heya', 'oi', 'hey', 'yo'];
  
  console.log(shoutGreetings(greetings))
  // Should print [ 'HELLO!', 'HI!', 'HEYA!', 'OI!', 'HEY!', 'YO!' ]
  