let cats = ["Garfield", "Jungle"]

let dogs = ["Tucker", "Chewy"]

let animals = ["Nemo", "Smoky", "Swimmy", cats, dogs]

console.log("Without spread ... animals gives: ", animals)

let animalsSpread = ["Nemo", "Smoky", "Swimmy", ...cats, ...dogs]

console.log("With spread ... animals gives: ", animalsSpread)