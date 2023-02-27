// Write your function here:

const howOld = (numAge, numYear) => {

    const currentYear = 2021;
    const yearPersonBorn = currentYear - numAge;
    //const ageGap = (currentYear - numYear) - numAge;
    if(numYear > currentYear)
    {
      const ageFuture = (numYear - currentYear) + numAge;
      return `You will be ${ageFuture} in the year ${numYear}.`; 
    }
  
    else if(numYear < currentYear && numYear < yearPersonBorn)
    {
      const agePast = yearPersonBorn - numYear;
      return `The year ${numYear} was ${agePast} years before you were born`;
  
    }
  
      else if(numYear < currentYear && numYear > yearPersonBorn)
  
      {
  
        const agePast = numYear - yearPersonBorn;
        return `You were ${agePast} in the year ${numYear}`;
  
      }
  
      else{
        return '402 not found';
      }
  
    }
  // Once your function is written, write function calls to test your code!
  console.log(howOld(27, 2007));