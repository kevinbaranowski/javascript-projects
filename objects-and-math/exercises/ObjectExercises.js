let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: move
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: move
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: move
}

let beagle = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: move
}

let tardigrade = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 5,
   move: move
}

function move() {
   let steps = Math.floor(Math.random()*11);
   return steps
}
console.log(move())

let crew = [superChimpOne, salamander, superChimpTwo, beagle, tardigrade]

function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`
}
console.log(crewReports(tardigrade));

function fitnessTest(animalsArr) {
   let results = [];
   for (let i = 0; i < animalsArr.length; i++) {
      let result = '';
      let turns = 0;
      let steps = 0;
      while (steps < 20) {
         steps += animalsArr[i].move()
         turns++
      }
      result += `${animalsArr[i].name} took ${turns} turns to take 20 steps`
      results.push(result)
   }
   return results
}

function printResults(fitnessTestResults) {
   for (let i = 0; i < fitnessTestResults.length; i++) {
      console.log(fitnessTestResults[i])
   }
}

printResults(fitnessTest(crew))
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!