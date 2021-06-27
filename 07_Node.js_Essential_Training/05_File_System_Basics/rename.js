const fs = require('fs')

// Sync version
fs.renameSync("./assets/colorData.json","./assets/colors.json")

// Move files using rename
fs.rename("./assets/notes.md","./storage-files/notes.md",err =>{
    if(err){
        console.log(`Error: ${err.message}`)
    }else{
        console.log("Moved Successfully. ✅")
    }
})

// Delete
setTimeout(() => {
    fs.unlinkSync("./assets/alex.jpg")
},4000)
