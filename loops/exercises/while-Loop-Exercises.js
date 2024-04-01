const input = require('readline-sync');
//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let fuelLevel = 0;
let astronautsOnBoard = 0;
let shuttleAltitudeKm = 0;




/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
  while (fuelLevel <= 5000 || fuelLevel >= 30000) {
    let response = input.question("Please enter the starting fuel level. The value must be between 5000 and 30000. ");
    fuelLevel = Number(response);
    if (fuelLevel > 5000 && fuelLevel < 30000) {
      console.log('Validation successful. Valid starting fuel level was entered.');
      break;
    } else {
      console.log('Validation unsuccessful. Please try again.')
    }
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
  while (astronautsOnBoard > 7 || astronautsOnBoard < 1) {
    let response = input.question('Please enter the number of astronauts on board. The ship can accomodate no more than 7 astronauts. ');
    astronautsOnBoard = Number(response);
    if (astronautsOnBoard > 0 && astronautsOnBoard <= 7) {
      console.log('Validation successful. Valid number of astronauts entered.');
      break;
    } else {
      console.log('Validation unsuccessful. Please try again.')
    }
  }
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel >= (astronautsOnBoard * 100)) {
  fuelLevel = fuelLevel - (astronautsOnBoard * 100);
  shuttleAltitudeKm = shuttleAltitudeKm + 50;
}

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained an altitute of ${shuttleAltitudeKm} km.`)
if (shuttleAltitudeKm >= 2000) {
  console.log('Orbit achieved!')
} else {
  console.log('Failed to reach orbit.')
}