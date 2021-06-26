// get events module, core module so no path needed

const events = require('events')

// instance of event emitter

const emitter = new events.EventEmitter();

// Handle using this whenever a customEvent event occurs
emitter.on('customEvent', (greeting, from) => {
    console.log(`${from}: ${greeting}`)
})

// Use emitter's emit function to raise custom events emitter.emit("stringNameOfTheEvent", "dataToPassToHandler")

// emitter.emit("customEvent","Hello World","Computer")

// Power of event emitter is that we can raise events in our code wherever we like.

// Another custom event
// emitter.emit("customEvent","That's pretty cool huh!","Alex")

process.stdin.on("data",data => {
    const input = data.toString().trim();
    if(input === "exit")
        {
            // Custom event when user sends exit signal
            emitter.emit("customEvent","Okay, Bye! 👋","Terminal")
            process.exit()
        }
    emitter.emit("customEvent",input,"Terminal")
})