const fs = require('fs')

// Check if directory already exists, returns true or false
if(fs.existsSync("./assets/storage-files")){
    console.log("Directory already exists.")
} else {
    fs.mkdir("./assets/storage-files",err => {
        if (err) {
            console.log(`An error has occured: ${err.message}`);
            process.exit();
      }
      console.log("Diretory Created 📂✅")
    }
)}