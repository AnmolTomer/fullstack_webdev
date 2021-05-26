// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

const add = (x = 0, y = 0) => {
    console.log(x + y)
}

add(1, 2)

const haveFun = (activityName = "", time = "8") => {
    if (activityName === "" || time === "") {
        console.log("You need to either enter activity name or time in hours or both as parameters")
    } else console.log(`Today I will go ${activityName} for ${time} hours.`)
}

drawLine()

appliedOver("Both params passed")
haveFun("Hiking", 4)

drawLine()

appliedOver("One param passed")
haveFun("Hiking")

drawLine()
appliedOver("No param passed")
haveFun()

drawLine()

console.log("Using arrow with .map() in an array: ")

let list = ["Apple", "Banana", "Cherry", "Strawberry"]

list.map((item) => console.log(item))