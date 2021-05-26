// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`For/of over a ${inp}: `)
}

// Vehicle class is a blueprint that can be used again and again for objects. Anytime we want to create a vehicle we can use this constructor.
class Vehicle {
    // Constructor of class
    constructor(driverName, teamName, countryName, tournament = "F1 season") {
        this.driverName = driverName;
        this.teamName = teamName;
        this.countryName = countryName;
        this.tournament = tournament;
    }
    // Custom method
    describeYourself() {
        console.log(`Hi, I am ${this.driverName} from ${this.countryName} and I am driving for ${this.teamName} in 21/22 ${this.tournament}.`)
    }
}


// Create a new instance

let ham = new Vehicle("Lewis Hamilton", "Mercedes-AMG Petronas F1 Team", "United Kingdom");
let sai = new Vehicle("Carlos Sainz", "Scuderia Ferrari Formula 1", "Spain")
let max = new Vehicle("Max Verstappen", "Red Bull Racing Honda", "Belgium")

// Call methods
ham.describeYourself()
drawLine()
sai.describeYourself()
drawLine()
max.describeYourself()
drawLine()

console.log("Inheritance")
// We create a one superclass the vehicle and then we can extend it for reuse.

class indyCar extends Vehicle {
    constructor() {
        // super goes to the parent class i.e. Vehicle and it will plug in indyCar for the descriptor and details of Romain
        super("Romain Grosjean", "Dale Coyne Racing", "France", "Indy Car Series 2021-22");
    }
}

let romain = new indyCar;

romain.describeYourself()