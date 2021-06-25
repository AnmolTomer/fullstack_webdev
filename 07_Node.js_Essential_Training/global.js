// Create a variable path and load the path module into this path variable

const path = require('path');

// Use basename() function to get the filename only from global __filename variable.

console.log(`Filename: ${path.basename(__filename)}`)