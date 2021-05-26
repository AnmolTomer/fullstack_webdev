let course = new Map();

// Map has set method so we can set values
course.set("react", {
    description: "ui"
})

course.set("jest", {
    description: "testing"
})

console.log(course)
// console.log(course.react) // Doesn't work for map we have to do .get("")
console.log(course.get("react"))
console.log(course.get("jest"))

let details = new Map([
    [new Date(), "today"],
    [2, {
        javascript: ["js", "node", "react"]
    }],
    ["items", [1, 2]]
])

// .size

console.log("Size of map is:", details.size)

// iterate through a map using forEach
details.forEach((item) => console.log(item))