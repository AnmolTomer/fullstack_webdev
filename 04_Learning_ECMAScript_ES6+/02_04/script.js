const planet = "Earth"

// startsWith method
console.log(planet.startsWith("Ear") ? "Earth starts with Ear 🌍" : "Earth doesn't starts with Ear.🌍")

// endsWith method

console.log(planet.endsWith("th") ? "Earth ends with th 🌍" : "Earth doesn't ends with th.🌍")

// Search within a string for something .includes()

console.log(planet.includes("art") ? "Earth includes art 🎨" : "Earth doesn't includess art.🌍")

// .search() gives us the index where whatever we have searched for starts

console.log("Art in Earth starts at index: ", planet.search("art"))