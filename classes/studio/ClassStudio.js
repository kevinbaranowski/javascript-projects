//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.
class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore)
    }
    testAvg() {
        let sum = 0;
        for (let i = 0; i < this.scores.length; i++) {
            sum += this.scores[i];
        }
        let avg = sum / this.scores.length;
        return Math.round(avg * 10)/10
    }
    status() {
        let avg = this.testAvg();
        if (avg < 70) {
            return 'Rejected'
        } else if (avg >= 70 && avg <= 79) {
            return 'Probationary'
        } else if (avg >=80 && avg <= 89) {
            return 'Reserve'
        } else {
            return 'Accepted'
        }
    }
}

let bear = new CrewCandidate('Bubba Bear', 135, [88, 85, 90]);
let maltese = new CrewCandidate('Merry Maltese', 1.5, [93, 88, 97]);
let gator = new CrewCandidate('Glad Gator', 225, [75, 78, 62]);
console.log(bear);
console.log(maltese);
console.log(gator);
bear.addScore(83);
console.log(bear.scores);
console.log(maltese.testAvg())
console.log(`${bear.name} earned an average test score of ${bear.testAvg()}% and has a status of ${bear.status()}.`)
console.log(`${maltese.name} earned an average test score of ${maltese.testAvg()}% and has a status of ${maltese.status()}.`)
console.log(`${gator.name} earned an average test score of ${gator.testAvg()}% and has a status of ${gator.status()}.`)
let count = 0;
while (gator.testAvg() <= 80) {
    gator.addScore(85);
    count++
}
console.log(gator);
console.log(count);
console.log(`${gator.name} earned an average test score of ${gator.testAvg()}% and has a status of ${gator.status()}.`)
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.



//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.