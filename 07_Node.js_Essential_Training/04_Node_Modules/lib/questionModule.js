// Destructure events to use EventEmitter

const {EventEmitter} = require('events')

// Idea is to have a variable that can hold our questions say array

const readline = require('readline');

// Initialize the interface readline with std in and out for I/O
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// collectAnswers function exported using module.exports: It takes in questions array and done as callback

module.exports = (questions,done) => {
    const answers = [] // answers array to store user response
    const [q1] = questions // array destructuring, stores questions[0] in var q1
    // Instance of emitter
    const emitter = new EventEmitter();

    // questionAnswered function that has answer as its parameter.
    const questionAnswered = answer => {
        // Before pushing answer call emitter.emit()
        emitter.emit("answer",answer);
        answers.push(answer) // push the answer to answers array defined above
        if(answers.length < questions.length){ // ask the next question, if 1 question answered then answer.length = 1, so we can ask second question i.e. index 1
            rl.question(questions[answers.length],questionAnswered)
        }else{
            emitter.emit("complete",answers)
            done(answers)
        }
    }
    rl.question(q1, questionAnswered)

    return emitter;
}
