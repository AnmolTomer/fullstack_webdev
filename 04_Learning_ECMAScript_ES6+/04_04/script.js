// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`For/of over a ${inp}: `)
}

// -----------------------------------
appliedOver("String")
for (let letter of "JavaScript") {
    console.log(letter)
}
drawLine()

// for of over an array
appliedOver("Array")
let topics = ["JavaScript", "Node", "React"]

for (let topic of topics) {
    console.log(topic)
}
drawLine()


// Create a new map and use the set function to define a key and route where to find more info on it.
let topicsMap = new Map();

topicsMap.set("HTML", "/topic/html")
topicsMap.set("Node", "/topic/node")
topicsMap.set("React", "/topic/react")
// Get keys()
appliedOver("mapName.keys():")

for (let topic of topicsMap.keys()) {
    console.log(topic)
}

drawLine()
// Get values()
appliedOver("mapName.values():")

for (let topic of topicsMap.values()) {
    console.log(topic)
}
drawLine()
appliedOver("mapName.entries():")

for (let topic of topicsMap.entries()) {
    console.log(topic)
}


drawLine()

appliedOver("mapName in a template literal fashion using index")

// Get key and value using index
for (let topic of topicsMap) {
    console.log(`To get info about ${topic[0]} go to path: ${topic[1]}`)
}