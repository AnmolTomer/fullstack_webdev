/**
 * Practice: Pass values between functions
 *
 * - Create a basic function declaration.
 * - Make a change to an element in the DOM. (querySelector, adding a class) etc.
 * - Call the function declaration
 * - Create a basic function expression
 */


// Function declaration

function funDeclaration(a, b) {
    let c = a + b;
    // Make change to DOM
    document.querySelector("h1").style.backgroundColor = "rebeccapurple"
    // Add class
    document.querySelector("h1").classList.add("added_from_funDeclaration")
    console.log("Classes in h1: ", document.querySelector("h1").classList)
    console.log(`Returned from funDeclaration(${a},${b}): `, c);
}

funDeclaration(500, 166)

// Function expression

const funExp = function (a, b) {
    let c = a + b;
    // Make change to DOM
    document.querySelector("h2").style.backgroundColor = "pink"
    // Add class
    document.querySelector("h2").classList.add("added_from_funExp")
    console.log("Classes in h2: ", document.querySelector("h2").classList)
    console.log(`Returned from funExp(${a},${b}): `, c);
}

funExp(100, 233)

// Arrow function with func exp

const arrowFun = (a, b) => {
    let c = a + b;
    // Make change to DOM
    document.querySelector("h3").style.backgroundColor = "lightgreen"
    // Add class
    document.querySelector("h3").classList.add("added_from_arrowFun")
    console.log("Classes in h3: ", document.querySelector("h3").classList)
    console.log(`Returned from arrowFun(${a},${b}): `, c);
}

arrowFun(800, 199)