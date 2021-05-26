// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`.repeat() applied over a ${inp}: `)
}

// .repeat() on string
appliedOver("String")
let yell = "Woo! "

let party = yell.repeat(20)

console.log(party)

drawLine()

// .repeat() on object

appliedOver("object")

let cat = {
    meow(times) {
        console.log("meow ".repeat(times))
    },
    purr(times) {
        console.log("prrr ".repeat(times))
    },
    snore(times) {
        console.log("snore ".repeat(times))
    }
}

cat.meow(4)

cat.purr(3)

cat.snore(6)

drawLine()