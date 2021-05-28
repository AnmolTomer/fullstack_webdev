// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

const delay = (seconds) => new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
        reject( // define reject function if condition i.e. var seconds !== "number" data type
            new Error("Seconds must be a number") // Shown in error statement.
        )
    }
    // setTimeout takes the function resolve that it will run after the given duration
    setTimeout(resolve, seconds * 1000)
})


console.log("Zero seconds")

appliedOver("Numbers passed in seconds:")
delay(2).then(() => console.log("2 secs"))
delay(5).then(() => console.log("5 secs"))

// appliedOver("String passed in seconds:")
// delay("five").then(() => console.log("5 secs"))

// DONE: Understand resolve and promises. ✅
// Reference Used: https://www.youtube.com/watch?v=2IPw-mWe10U