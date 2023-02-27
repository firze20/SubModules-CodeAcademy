// Write your code here:

const dogFactory = (name, breed, weight) => {
    return {
            _name: name,
            _breed: breed,
            _weight: weight,
            get name() {
                return this._name;
            },
            set name(name) {
                    if(typeof name === 'string'){
                        this._name = name;
                    }
                    else {
                        console.log(`Error Please name the dog with a proper name`);
                    }
            },
            get breed() {
                return this._breed;
            },
            set breed(breed) {
                    if(typeof breed === 'string'){
                        this._breed = breed;
                    }
                    else {
                        console.log(`Error Please name a proper breed`);
                    }
            },
            get weight() {
                    return this._weight;
            },
            set weight(weight) {
                if(typeof weight === 'number'){
                    this._weight = weight;
                }
                else {
                    console.log(`Error Please insert a proper weight`);
                }
            },
            bark() {
                return `ruff! ruff!`;
            },
            eatTooManyTreats() {
                this.weight+=1;
            }
        };
};

const dogJoe = dogFactory('Joe', 'Pug', 27);

dogJoe.name = 'Joemama';
dogJoe.weight = 100;

console.log(dogJoe);

dogJoe.eatTooManyTreats();

console.log(dogJoe)

console.log(dogJoe.bark());


