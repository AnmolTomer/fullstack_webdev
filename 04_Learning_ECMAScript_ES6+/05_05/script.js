// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

// director generator function will do a countdown for us.
function* director() {
    yield "Three";
    yield "Two";
    yield "One";
    yield "Action";
}

let countdown = director();


console.log(countdown.next().value)
console.log(countdown.next().value)
console.log(countdown.next().value)
console.log(countdown.next())
console.log(countdown.next())


// on calling the .next() we get the value and done as boolean true or false, when there are no more yield statements then done will be true.