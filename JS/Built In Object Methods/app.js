const robot = {
  model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};
// What is missing in the following method call? retrieves an array of the object robot
const robotKeys = Object.keys(robot);
console.log(robotKeys);
// Declare robotEntries below this line:
//retrieves the array and his own props
const robotEntries = Object.entries(robot);
console.log(robotEntries);
// Declare newRobot below this line:
//Joins 2 objects props into 1 
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);
console.log(newRobot);