function launchOutput(number) {
    if (number % 2 === 0 && number % 3 === 0 && number % 5 === 0) {     
        return "LaunchCode Rocks!"   
    } else if (number % 2 === 0 && number % 5 === 0) {
        return "Launch Rocks! (CRASH!!!!)"   
    } else if (number % 2 === 0 && number % 3 === 0) {
        return "LaunchCode!"   
    } else if (number % 3 === 0 && number % 5 === 0) {
        return "Code Rocks!"   
    } else if (number % 5 === 0) {
        return "Rocks!"   
    } else if (number % 3 === 0) {
        return "Code!"   
    } else if (number % 2 === 0) {
        return "Launch!"   
    } else { 
        return "Rutabagas! That doesn't work."
    }
}
console.log(launchOutput(7))

let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: '100%',
  programsOffered: [
    'Full-time Web Dev',
    'Part-time Web Dev',
    "Women's+"
  ],
  launchOutput: launchOutput
}

module.exports = launchcode;

