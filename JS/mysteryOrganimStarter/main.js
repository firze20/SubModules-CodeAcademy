// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, array) => {
  return {
      specimenNum: number,
      dna: array,
      mutate() {
        //Generates a random Index within the argument array
        const randomDNABase = Math.floor(Math.random() * this.dna.length);
        const selectedBase = this.dna[randomDNABase];
        let randomBase = returnRandBase();
        if(selectedBase != randomBase){
          this.dna[randomDNABase] = randomBase;
        }
        else {
          do{
            this.dna[randomDNABase] = returnRandBase();
          }
          while(this.dna[randomDNABase] === randomBase)
        }
        return this.dna;
      },
      compareDNA(object) {
        if(object.specimenNum === this.specimenNum){
          return `Error, can't compare 2 specimens with same Num value, change the value of atleast 1!`
        }
        else {
          let sameDNA = 0;
          for(dnaIndex in object.dna){
            const objectValue = object.dna[dnaIndex];
            if(this.dna[dnaIndex] === objectValue){
              sameDNA+=1;
            }
          }
          //Percentage
          let percentage = (sameDNA * 100) / this.dna.length;
          return `specimen #1 and specimen #2 have ${Math.floor(percentage)}% DNA in common.`
        }
      },
      willLikelySurvive(){
        const cDNA = this.dna.filter(c => c.includes('C'));
        const gDNA = this.dna.filter(g => g.includes('G'));
        const percentageC = Math.floor((cDNA.length * 100) / this.dna.length);
        const percentageG = Math.floor((gDNA.length * 100) / this.dna.length);
        if(percentageC >= 60 || percentageG >= 60){
          return true;
        }
        else{
          return false;
        }
      }
  }
}

//Creating 30 dna samples with Factory Object
dnaArrays = [];
for(let i = 0; i <= 30; i++){
  generatedDNA = mockUpStrand();
  dnaArrays.push(pAequorFactory(generatedDNA, i));
}

console.log(dnaArrays);

//console.log(newArray);



//console.log(myObject.compareDNA(secondoObject));



