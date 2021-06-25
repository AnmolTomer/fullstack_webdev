const waitTime = 5000;// in ms
const waitInterval = 500;
let currentTime = 0; // Variable whose value changes declared with let

const incrementTime = () =>{
    currentTime += waitInterval // Every half second add to currentTime and calculate the percentage.
    const p = Math.floor((currentTime/waitTime)*100);

    // console.log(`Waiting ${currentTime/1000} seconds.`)

    process.stdout.clearLine() // Clear the line
    process.stdout.cursorTo(0) // Move cursor back to 0
    process.stdout.write(`Waiting.... ${p}%\n`) // Write to the line
}

console.log(`Setting a ${waitTime/1000} second delay.`)

const timerFinished = () => {
    clearInterval(interval) // Interval stops and allows app to exit if you clearInterval.
    process.stdout.clearLine()
    process.stdout.cursorTo(0)
    console.log("Done ✅")
}

// setInterval(function,timeToWait)
const interval = setInterval(incrementTime,waitInterval) // Calls the increment time function every half second.

// setTimeout takes in the function to execute when timer is finished, second argument is time to wait for this delay
setTimeout(timerFinished, waitTime)