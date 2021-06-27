// require fs module
const fs = require('fs')

// Write text to a file

// Create text using template string so that whitespace is kept intact
const md = `
# New File Heading

> Write text using fs.writeFileSync

* fs.readdir()
* fs.readFile()
* fs.writeFile()

`

// To write md var into a new file we use fs.writeFile("<filePath/name.md>",textToSend, callbackFunction)
fs.writeFile("./assets/notes.md",md.trim(),(err) => {
    if(err){
        console.log(`An error has occured: ${err.message}`)
        process.exit()
    }
    console.log("File Saved 💾✅")
})