var div;
var box = document.getElementById("box");

var topic = "JavaScript";
console.log(topic);
// ---------------------------------------
if (topic) {
    //   If you use var Outside also ECMAScript returned next to global because var hoists the value to global scope and doesn't stays within local scope
    // var topic = "ECMAScript";
    let topic = "ECMAScript";
    console.log("Block: ", topic);
}
console.log("global: ", topic);
// ---------------------------------------
//   for (var i = 0; i < 5; i++) { // Var will give issues, switch to let.

for (let i = 0; i < 6; i++) {
    // Create a <div></div> using JS
    div = document.createElement("div");
    div.onclick = () => {
        alert("This is box # " + i);
    };
    box.appendChild(div);
}