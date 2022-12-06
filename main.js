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
    }

  }
}

// Testing 
organism = pAequorFactory(1, mockUpStrand());
console.log(organism.dna);
organism.mutate();
console.log(organism.dna);
