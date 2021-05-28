// Helper functions
// for of over a string
const drawLine = () => console.log("------------------------------------")

const appliedOver = (inp) => {
    console.log(`${inp}: `)
}

const githubRequest = async (login) => {
    // await till results come
    let response = await fetch(`https://api.github.com/users/${login}`)
    // With fetch we need to convert the Response to json, so that we can parse.
    let json = await response.json();
    let summary = `${json.name},${json.company}`
    console.log(`Here is the info on dev with user handle ${login}
    1. Name: ${json.name}
    2. Company: ${json.company}
    3. Location: ${json.location}
    4. Is looking for a job? ${json.hireable === true ? "Yes" : "No"}
    5. Bio: ${json.bio}
    6. Twitter Username: ${json.twitter_username}
    7. Followers: ${json.followers}
    `)
}

githubRequest("anmoltomer")