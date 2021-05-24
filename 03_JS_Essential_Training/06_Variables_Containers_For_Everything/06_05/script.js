/**
 * The const statement
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
 */

let color = "purple";
// If we uncomment line below and comment the one above then we would get a scenario where title is black, box on left is purple and one on right is green, beacuase color is const and when we try to change color to skyblue js stops execution seeing assignment to a const var. Only initialization is allowed to const var.
// const color = "purple";

document.querySelector(".left").style.backgroundColor = color;
document.querySelector(".left .color-value").innerHTML = color;

color = "skyblue";

function headingColor() {
  let color = "blue";
  document.querySelector(".title").style.color = color;
}

headingColor();

document.querySelector(".right").style.backgroundColor = color;
document.querySelector(".right .color-value").innerHTML = color;