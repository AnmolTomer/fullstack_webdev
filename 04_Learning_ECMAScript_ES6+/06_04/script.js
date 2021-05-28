// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

const delay = (seconds) => {
    return new Promise((resolves) => {
        setTimeout(resolves, seconds * 1000)
    })
}

const countToFive = async () => { // we can't have await withot async, need to have async to use await
    console.log("Zero")
    await delay(1) // await is similar to yield from generator function, here we wait for delay function to execute then we go on to do what comes next
    console.log("one second")

    await delay(2)
    console.log("two seconds")

    await delay(3)
    console.log("three seconds")
}

countToFive()