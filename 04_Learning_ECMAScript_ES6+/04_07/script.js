// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`For/of over a ${inp}: `)
}

let Attendance = {
    // Initiate with an empty list
    _list: [],
    // adds a name into _list list.
    set addName(name) {
        this._list.push(name)
    },
    // returns the values in _list separated by comma and space
    get list() {
        return this._list.join(", ")
    }
}

Attendance.addName = "Donald Draper"
console.log(Attendance.list)

Attendance.addName = "Sally Draper"
console.log(Attendance.list)
Attendance.addName = "Joan Harris"
Attendance.addName = "Peggy Olson"
console.log(Attendance.list)
Attendance.addName = "Roger Sterling"
Attendance.addName = "Bertram Cooper"

console.log(Attendance.list)

drawLine()

console.log("Getter and setter in classes")

class Hike {
    constructor(distance, pace) {
        this.distance = distance;
        this.pace = pace;
    }

    get lengthInHours() {
        return `${this.calcLength()} hours.`
    }

    calcLength() {
        return Math.round((this.distance / this.pace), 2);
    }
}

const vacationHiking = new Hike(20, 3);

console.log(`At the speed of ${vacationHiking.pace} km/h and distance of ${vacationHiking.distance}, time to complete hiking: ${vacationHiking.lengthInHours}`)