// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  let circumference = 2 * Math.PI * radius
  return Math.round(circumference)
}

// Code your missionDuration function here:
function missionDuration(numOrbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let time = orbitCircumference(orbitRadius) / orbitSpeed;
  let roundedTime = Math.round(time * 100) / 100
  let totalTrip = roundedTime * numOrbits
  let totalDistance = orbitCircumference(orbitRadius) * numOrbits
  console.log(`The mission will travel ${totalDistance} km around the planet, and it will take ${totalTrip} hours to complete.`)
  return totalTrip
}
//console.log(missionDuration(5))

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(array){
  let randSelect= Math.floor(Math.random()*array.length);
  randSelect=array[randSelect];
  return randSelect;
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate, orbitalRadius, orbitSpeed) {
  let spacewalkLength = missionDuration(3, orbitalRadius, orbitSpeed);
  let oxygenConsumed = Math.round(candidate.o2Used(3) * 1000) / 1000;
  return  `${candidate.name} will perform the spacewalk, which will last ${spacewalkLength} hours and require ${oxygenConsumed} kg of oxygen.`
}


// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 let candidates = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF]

 console.log(oxygenExpended(selectRandomEntry(candidates), 2500, 30000))
 