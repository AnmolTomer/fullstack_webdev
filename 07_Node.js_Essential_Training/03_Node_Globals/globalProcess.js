// Process object can be accessed globally and it contains information about the current process as well as tools to allow us to interact with that process.

// If we run node globalProcess <firstName> <lastName> and we have array destructuring, we will get our name as output.

const [, ,firstName, lastName] = process.argv

console.log(`Your name is: ${firstName} ${lastName}`)

console.log(`Process ID: ${process.pid}`)

console.log(`Node version: ${process.versions.node}`)

// To obtain the value from a flag we can use grab("--flagName")
// To grab --location we can use the code below:

const grab = flag =>{
    // Get the indexOf flag from process.argv + 1 and return the value
    let indexAfterFlag = process.argv.indexOf(flag)+1;
    return process.argv[indexAfterFlag]
}

const location = grab("--location")
console.log(`Delivery location: ${location}`)