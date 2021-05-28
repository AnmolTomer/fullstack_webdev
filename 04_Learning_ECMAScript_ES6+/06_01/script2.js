const delay = (seconds) => {
    return new Promise((resolve, reject) => {
        if (typeof seconds !== "number") {
            reject(`${seconds} is not a number.`);
        }

        setTimeout(resolve, seconds * 1000)
    })
}

delay(2).then(() => console.log("2 secs over.")).catch(err => console.log(err))

delay(4).then(() => console.log("4 secs over.")).catch(err => console.log(err))