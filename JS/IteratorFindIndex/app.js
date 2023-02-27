const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

//finding the index of an array using findindex
const foundAnimal = animals.findIndex(animal => {
    return animal  === 'elephant';
});

console.log(foundAnimal);

//finding the index of an array that starts with letter "s"
const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's';
});

console.log(startsWithS);