const cp = require('child_process')

// run questions module with node.js in a separate process.
const questionApp = cp.spawn("node",["questions.js"])

questionApp.stdin.write("Alex\n")
questionApp.stdin.write("Bordeaux\n")
questionApp.stdin.write("Change the world\n")

questionApp.stdout.on("data",data => {
    console.log(`From the question app: ${data}`)
})

questionApp.on("close",() => {
    console.log(`questionApp process exited.`)
})