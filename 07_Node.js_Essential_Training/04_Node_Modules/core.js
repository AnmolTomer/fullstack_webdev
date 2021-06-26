const path = require('path')
// const util = require('util')
const {log} = require('util')
const v8 = require('v8')

const dirUploads = path.join(__dirname,'wwww','files','uploads')

console.log(dirUploads) // Shows full path to the dir we are in.

// util module has lots of helpful functions, we will look at util.log()

log(path.basename(__filename))

log(" ^ The name of the current file.")

// We had to require the utilities module compared to console

// getHeapStatistics from v8 module
log(v8.getHeapStatistics())

// If we only want to use the log from util we could only get that in following manner:
// const {log} = require("util") and then you can call log without having to do util.log everywhere