/**
 * Scope and the var statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var
 */

var color = "purple";

// Populate backgroundColor and innerHTML property to color
document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue"

function headingColor() {
    color = "blue";
    document.querySelector(".title").style.color = color;
}


// function sets the color var to blue and finds the title and sets its color to blue. 
// Here function won't cause any issues, but if we put it after skyblue then both the rightBox as well as title becomes blue.

/* function headingColor() {
    color = "blue";
    document.querySelector(".title").style.color = color;
} */

// headingColor(); // Both right and title becomes blue only when function call occurs, if you put function call after right then it works fine.
document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;
headingColor();