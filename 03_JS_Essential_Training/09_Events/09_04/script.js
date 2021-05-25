/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

const gridContainer = document.querySelector(".grid")

gridContainer.addEventListener("mouseenter", () => {
    gridContainer.style.outline = "6px solid red";
})

gridContainer.addEventListener("mouseleave", () => {
    gridContainer.style.outline = ""
})

/**
 * Function to generate random hex color
 */
const randColor = () => {
    let hexColor = Math.floor(Math.random() * 16777215).toString(16)
    return hexColor;
}


// Get all cells

const gridCells = document.querySelectorAll(".cell");

// For each cell, add eventListeners aplenty
gridCells.forEach((cell) => {

    // Set outline when cell is hovered
    cell.addEventListener("mouseenter", (e) => {
        console.log(e)
        cell.style.outline = "2px solid red"
    });

    // Remove outline when cell exited
    cell.addEventListener("mouseleave", (e) => {
        cell.style.outline = "";
    });

    // Set/Remove random background on click
    cell.addEventListener("click", () => {
        if (cell.style.backgroundColor) {
            cell.style.backgroundColor = "";
        } else {
            cell.style.backgroundColor = `#${randColor()}`;
        }
    })
})

/**
 * Set page background using the d key on keyboard
 */

const body = document.body;

body.addEventListener("keydown", (e) => {
    // event.code to get the current key pressed
    console.log(e.code);

    if (e.code === "KeyD") {
        body.style.backgroundColor === "" ? (body.style.backgroundColor = "hsl(201,14%,13%)") : (body.style.backgroundColor = "")
    }
})