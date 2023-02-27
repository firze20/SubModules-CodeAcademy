getSleepHours = (day) => {
    switch(day){
      case 'monday':
        return 8
        break;
      case 'tuesday':
        return 7
      case 'wednesday':
        return 8
        break;
      case 'thrusday':
        return 5
        break;
      case 'friday':
        return 5
        break;
      case 'saturday':
        return 9
        break;
      case 'sunday':
        return 9
        break;
      default:
        return 'Pls select a valid day of the week';
        break;
    }
  }
  
  //testing the switch case function
  //console.log(getSleepHours('friday'));


  //SUM of every night sleep
  getActualSleepHours = () => {
   return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thrusday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}


//testing my function
//console.log(getActualSleepHours());

//get Ideal hours week sleep function
getIdealSleepHours = idealSleepHours  => idealSleepHours * 7;

//testing my idealsleep hour function
//console.log(getIdealSleepHours());

//function that calculates
calculateSleepDept = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(8);
    if(actualSleepHours === idealSleepHours){
        return idealSleepHours - actualSleepHours + 'perfect amount of sleep';
    }
    else if(actualSleepHours > idealSleepHours)
        return idealSleepHours - actualSleepHours + 'you sleep too much, careful';
    else{
        return idealSleepHours - actualSleepHours + 'you should go to bed early';
    }
}


//testing caculateSleepDept
console.log(calculateSleepDept());
