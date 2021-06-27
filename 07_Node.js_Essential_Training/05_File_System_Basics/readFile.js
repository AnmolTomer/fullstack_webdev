const fs = require('fs');


// Sync way
const text = fs.readFileSync("./assets/Readme.md","UTF-8")

console.log(text)

console.log("---------------Async way using readFile:--------------------\n")

const readAsync = fs.readFile("./assets/Readme.md","utf-8",(err,text) => {
    if(err){
        console.log(`An error has occured: ${err.message}`)
        process.exit()
    }
    else{
        console.log(text)
    }
})

// Read binary file of image in jpg format.
console.log("---------------readFile for image:--------------------\n")

const readImg = fs.readFile("./assets/alex.jpg",(err,img) => {
    if(err){
        console.log(`An error has occured: ${err.message}`)
        process.exit()
    }
    else{
        console.log(img)
    }
})