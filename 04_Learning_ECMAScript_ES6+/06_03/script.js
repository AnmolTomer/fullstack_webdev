// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

const apiAddr = "http://api.open-notify.org/astros.json"

// fetch returns the entire Response object and object has json function that parses the body as JSON
let getAstronauts = () => fetch(apiAddr).then(
    (res) => res.json())

let spaceNames = () => getAstronauts()
    .then(json => json.people)
    .then(people => people
        .map(p => p.name))
    .then(names => names.join(", "))

spaceNames().then(console.log)

// TODO: Understand this what's going on and how .then() works properly.