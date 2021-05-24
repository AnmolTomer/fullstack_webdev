/**
 * The let statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let
 */

var color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let color = "blue"; // let is inside local scope of headingColor() function and it only exists inside the function, ignoring what's happening outside
  document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;