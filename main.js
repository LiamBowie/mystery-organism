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

const pAequorFactory = (specimenNum, dna) => {
  return { 
    specimenNum,
    dna,

    mutate() { 
      let baseIndex = Math.floor(Math.random() * 15);
      let mutation;
      let mutated = false;
      do {
        mutation = returnRandBase();

        if (dna[baseIndex] != mutation) { 
          dna[baseIndex] = mutation;
          mutated = true;
        }

      } while (!mutated);
    },

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

    willLikelySurvive() { 
      let survivalBases = 0;

      this.dna.forEach(base => {
        if(base === 'C' || base === 'G') { 
          survivalBases++;
        }
      });

      likeliness = survivalBases / 15 * 100;

      if(likeliness > 60) { 
        return true;
      }
      else { 
        return false;
      }
    }

  }
}

// Testing 
organism1 = pAequorFactory(1, mockUpStrand());
console.log(organism1.willLikelySurvive());

