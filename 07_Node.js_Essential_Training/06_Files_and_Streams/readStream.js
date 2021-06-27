const fs = require('fs')

const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8")

// console.log("Type something...")

// Store in fileTxt the streams of data
let fileTxt = ""

// Read Stream of data from readStream var
readStream.on("data",data => {
    console.log(`I read ${data.length - 1} characters of text.`);
    fileTxt += data
})

// readStream.once()

readStream.once("data",data => {
    console.log(data)
})

// end event on streams
readStream.on("end",() => {
    console.log("Finished Reading.")
    console.log(`In total we read: ${fileTxt.length-1} characters.`)
})