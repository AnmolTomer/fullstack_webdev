let a = 5;
let b = 5; // Will give equal
// let b = "5"; // Will also give equal due to Semiotic Equivalence as they look same.

console.log(`let a: ${a} (${typeof a})`)
console.log(`let a: ${b} (${typeof b})`);

// Writing a test for semiotic and absolute equivalence of 2 variables
if (a == b) {
    if (a === b) {
        console.log(`Match! a and b are absolute equivalent.`)
    } else {
        console.log("a and b are semiotically equivalent.")
    }
} else {
    console.error(`No match: a and b are NOT the same value.`)
}

document.querySelector("main.boxes div.left").style.backgroundColor = "rebeccapurple"
document.querySelector("main.boxes div.right").style.backgroundColor = "lightpink"

document.querySelector("main.boxes div.left code.color-value").innerText = "rebeccaPurple"
document.querySelector("main.boxes div.right code.color-value").innerText = "lightPink"

document.querySelector("h1.title").style.backgroundColor = "lightgreen"

// On running the above with == we get the following that a and b are not same
/*

let a: 5 (number)
let b: 4 (number) 
script.js:10 No match: let a and let b are NOT the same value.
*/

// Other comparison tools are standard > , < , >= , <= , != is not equal to (semiotically) and !==  is absolutely not equal to.