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

// Creates a Pila aequor organism object 
const pAequorFactory = (specimenNum, dna) => {
  return { 
    specimenNum,
    dna,

    // Alters a random base from the organisms DNA to another value
    mutate() { 
      let baseIndex = Math.floor(Math.random() * 15);
      let mutation = returnRandBase();
      
      while (this.dna[baseIndex] === mutation) {
        mutation = returnRandBase();
      }
      dna[baseIndex] = mutation;
    },

    // Compares two organisms and logs the percentage of DNA that they have in common 
    compareDNA(pAequor) { 
      let inCommon = 0;

      for(let i = 0; i < this.dna.length; i++) { 
        if (this.dna[i] === pAequor.dna[i]) { 
          inCommon++;
        }
      }

      let percentage = inCommon / 15 * 100;
      console.log(`Specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage} DNA in common`);
    },

    // Returns true if the organism is likely to survive based on the number of 'C' and 'G' bases in its DNA
    willLikelySurvive() { 
      let survivalBases = 0;

      this.dna.forEach(base => {
        if(base === 'C' || base === 'G') { 
          survivalBases++;
        }
      });

      likeliness = survivalBases / 15 * 100;

      if(likeliness >= 60) { 
        return true;
      }
      else { 
        return false;
      }
    },

    // Returns a new array that contains the complement of the strand. A and T bases bind together and C and G bind. 
    complementStrand() { 
      complement = [];

      this.dna.forEach(base => { 
        switch(base){
          case 'A':
            complement.push('T');
            break;
          case 'T':
            complement.push('A');
            break;
          case 'C':
            complement.push('G');
            break;
          case 'G':
            complement.push('C');
            break; 
        }
      });
      // Testing string
      // console.log(`number: ${this.specimenNum} dna: ${this.dna}\nnumber: ${this.specimenNum} com: ${complement}`)

      return complement;
    }

  }
}

// Create and store 30 Pila aequor organisms that are likely to survive
let organisms = [] 
let counter = 1;

while (organisms.length < 30) { 
  let organism = pAequorFactory(counter, mockUpStrand());

  if(organism.willLikelySurvive()){ 
    organisms.push(organism);
    counter++;
  }
}

// View the stored organisms in the console.
console.log(organisms);