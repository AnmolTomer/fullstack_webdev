const fs = require('fs');
const colorData = require("./assets/colors.json")

// Loop over colorList array in colorData
colorData.colorList.forEach(c => {
    fs.appendFile("./assets/storage-files/colors.md",`${c.color}: ${c.hex}\n`, (err)=>{
        if(err){
            console.log(`An error has occured: ${err.message}`);
            process.exit();
        }
    })
})