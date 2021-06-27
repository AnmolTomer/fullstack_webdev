// load fs module

const fs = require('fs')

// Read contents of a dir into a var
console.log("Started Reading Files")

const files = fs.readdirSync("./assets")

console.log("Stopped Reading Files")
console.log(files)

console.log("Using Readdir:")

fs.readdir("./assets",(err,fileNames) => {
    // Check for error
    if(err){
        throw err
    }
    console.log('readdir complete.')
    console.log(fileNames)
})