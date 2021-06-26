// Import the module
const collectAnswers = require('./lib/questionModule')

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Node JS? "
]


const answerEvents = collectAnswers(questions)

// Whenever there is a question answered, add it to console.
answerEvents.on("answer",answer => console.log(`questions answered: ${answer}`))

answerEvents.on("complete",answers => {
    console.log("Thank You for your answers. ")
    console.log(answers)
})

answerEvents.on("complete",() =>  process.exit())