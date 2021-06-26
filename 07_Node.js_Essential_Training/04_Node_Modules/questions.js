// Idea is to have a variable that can hold our questions say array

const readline = require('readline');

// Initialize the interface readline with std in and out for I/O
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Array of questions
const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Node JS? "
]

// collectAnswers function that takes in questions array and done as callback
const collectAnswers = (questions,done) => {
    const answers = [] // answers array to store user response
    const [q1] = questions // array destructuring, stores questions[0] in var q1

    // questionAnswered function that has answer as its parameter.
    const questionAnswered = answer => {
        answers.push(answer) // push the answer to answers array defined above
        if(answers.length < questions.length){ // ask the next question, if 1 question answered then answer.length = 1, so we can ask second question i.e. index 1
            rl.question(questions[answers.length],questionAnswered)
        }else{
            done(answers)
        }
    }
    rl.question(q1, questionAnswered)
}

collectAnswers(questions, answers => {
    console.log("Thank You for your answers. ")
    console.log(answers)
    process.exit()
})