const cp = require('child_process')

// Opens in browser
// cp.exec("open https://www.github.com")

// Opens terminal in MAC
// cp.exec("open -a Terminal .")

// Grab data if the command we run returns some data

// For windows, replace dir with ls for linux
cp.exec("dir",(err,data,stderr)=> {
    if(err){
        console.log(`Error occured: ${err.message}`)
        }
    if(stderr){
        console.log(stderr.message)
    }
    console.log(data)
})