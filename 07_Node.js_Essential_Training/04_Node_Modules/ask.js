const readline = require("readline");

// Create interface to work with readline

const rl = readline.createInterface({
    input: process.stdin, // tell readline which stream to use for input and output
    output: process.stdout
})

// First arg is the question for question() functions, second arg is a callback when question is answered, answer is supplied as an argument to callback function.
rl.question('How do you like Node? ',answer =>{
    console.log(`Your answer: ${answer}\n\n`)
    process.exit()
})
