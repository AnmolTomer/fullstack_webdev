const fs = require('fs');

// writeable stream
const writeStream = fs.createWriteStream("./assets/myFile.txt","UTF-8")

// readable stream
const readStream = fs.createReadStream("./assets/lorum-ipsum.md","UTF-8")

// Can be used to write data to a writeable stream using process.stdout.write()

/* writeStream.write("hello")
writeStream.write(" world\n") */


// Readable streams are made to work with writeable streams

// Listen to data events from terminal, when we have data event, use the write stream to write that data event to a file.

/* process.stdin.on("data",data => {
 writeStream.write(data);
}) */

// Get data from readStream and write to writeStream file.

readStream.on("data", data => {
    writeStream.write(data);
})

// Pipe read stream to write stream

// process.stdin.pipe(writeStream)
// readStream.pipe(writeStream)