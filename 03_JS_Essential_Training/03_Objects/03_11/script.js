/**
 * Create an object constructor function for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 */

// Backpack(inpParam1,inpParam2,inpParam3,.....,inpParamN)
function Backpack(
    // constructor params
    name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen) {
    // value assignment based on input params
    this.name = name;
    this.volume = volume;
    this.color = color;
    this.pocketNum = pocketNum;
    this.strapLength = {
        left: strapLengthL,
        right: strapLengthR,
    };
    this.lidOpen = lidOpen;
    // Define method inside constructor function unlike classes where methods are written outside the constructor
    // Method 1
    this.toggleLid = function (lidStatus) {
        this.lidOpen = lidStatus;
    };
    // Method 2
    this.newStrapLength = function (lengthLeft, lengthRight) {
        this.strapLength.left = lengthLeft;
        this.strapLength.right = lengthRight;
    };
}

// Pass the values to the function Backpack and store it in americanTourister
const americanTourister = new Backpack(
    "American Tourister", 30, "grey", 15, 26, 26, false
);

console.log(americanTourister)