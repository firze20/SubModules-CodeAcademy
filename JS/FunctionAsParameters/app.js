const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
    for(let i = 1; i <= 1000000; i++) {
      if ( (2 + 2) != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };
  
  const addTwo = num => num + 2;
  
  const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
  };
  
  // Write your code below
  const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);
  
  // recebe 2 parametros, funct = a callback a uma função, val vai ser o valor a passar para essa callback
  const checkConsistentOutput = (funct, val) => {
    //guardamos o output dessa callback que chamamos com o parametro val
    let firstTry = funct(val);
    //guardamos o output dessa callback que chamamos com o parametro val
    let secondTry = funct(val);
    //comparamos os 2 valores 
    if (firstTry === secondTry) {
      return firstTry;
    }
    else {
      return 'This function returned inconsistent results';
    }
  };
  
  console.log(checkConsistentOutput(addTwo, 2));
