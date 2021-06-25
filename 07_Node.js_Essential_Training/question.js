/* process.stdout.write("Hello ")
process.stdout.write("World \n\n\n")
 */
// process.stdout gives us a little bit more control over the string, whereas console.log adds a new line everytime we use it.


// Questions to be asked from user
const questions = [
    "What is your name?",
    "What would you rather be doing?",
    "What is your preffered programming language?"
]

// function which takes argument i, if no arg passed then we take i as 0 default
const ask = (i = 0) =>{
    process.stdout.write(`\n\n\n${questions[i]}`);
    process.stdout.write(`\n> `)
}

ask()

const answers = []

// Listen for answer using stdin, we use on() function to listen for events, the event name we are listening for is a data event, i.e. when you type something on keyboard and press enter. Second argument of the on function is the handler or the function that we will use to handle the data. We collect data as the first argument that's sent to the callback and do something with it.

// We have used process.stdin object to listen for data events. We have also created our first asynchronous application. Because this application is listening for input data, the application will be open and running. Everytime we type in something, we will see it in terminal.
process.stdin.on('data',data => {
    answers.push(data.toString().trim())
    // Invoke exit() event using process
    if(answers.length < questions.length){
        ask(answers.length); // If we have answered first, then length will be 1, so we will ask the second question i.e. index 1.
    }else{
        /* process.stdout.write(`Your name is: ${answers[0]},
        you would rather be ${answers[1]} right now
        and your favourite programming language is ${answers[2]}.
        `) */
        process.exit();
    }
})


// When process exits this handler will fire and the output will be printed.
process.on('exit', () =>{
    const [name,activity,lang] = answers
    console.log(`

    Thank You for your answers.


    Go ${activity} ${name} you can write ${lang} code later!!`)


})
