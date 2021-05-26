// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

const spacePeople = () => {
    return new Promise((resolves, rejects) => {
        // link to api - data source
        const api = "http://api.open-notify.org/astros.json"
        // build a request
        const request = new XMLHttpRequest();
        // send GET request to ask data from the API
        request.open("GET", api);
        // if status is 200 means data received properly and we parse it
        request.onload = () => {
            if (request.status === 200) {
                resolves(JSON.parse(request.response));
            } else {
                // if status is something non 200, return the statusText
                rejects(Error(request.statusText));
            }
        }
        // Say on error rejects with err data
        request.onerror = (err) => rejects(err)
        request.send(); // send the request
    });

};


// The above can be used as boiler plate for any kind of request

// call spacePeople() and then console log the data to our console.

spacePeople().then(
    (spaceData) => {
        console.log(spaceData)
    },
    (err) => console.error(new Error("Can't load people.", err))
)

// TODO: Understand parsing of response and promise.