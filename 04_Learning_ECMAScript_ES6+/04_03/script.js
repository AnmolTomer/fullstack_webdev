// Normal Way
const sandwich = {
    title: "Wendy's",
    price: 7,
    description: "Scully's favourite",
    ingredients: ["bread", "cheddar cheese", "corned beef", "dressing", "mayonese", "mustard sauce", "more cheese"]
}

console.log("Name:", sandwich.title)
console.log("Price: $", sandwich.price)

// Using destructuring

const {
    title,
    description,
    price
} = {
    title: "Pizza Hut",
    price: 7,
    description: "No one outpizza's the hut",
    ingredients: ["cheese burst", "cheddar cheese", "corned beef", "dressing", "soft base", "more cheese"]
}
console.log("------------------")
console.log("Name:", title)
console.log("Description: ", description)
console.log("Price $: ", price)

console.log("------------------")

const vacation = {
    destination: "Chile",
    activity: "Sky Diving",
    cost: "Can't afford even if I told."
}

function marketing({
    destination,
    activity
}) {
    return `Come to ${destination} and do some ${activity}.`
}

// We pass in vacation object to the marketing function, marketing function parses the variables or the keys that we are interested in and then returns their values as template strings.
console.log(marketing(vacation))