/**
 * Use template literals to output HTML
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 *
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
    "American Tourister",
    30,
    "grey",
    15,
    26,
    26,
    false,
    "December 5, 2018 15:00:00 PST"
);

// `` backticks tells the browser that everything inside here is a template literal i.e. we can mix HTML and strings with js expressions to create templates.

const content = `
    <main>
      <article>
        <h1>${everydayPack.name}</h1>
        <ul>
          <li>Volume: ${everydayPack.volume}</li>
          <li>Color: ${everydayPack.color}</li>
          <li>Age: ${everydayPack.backpackAge()}</li>
          <li>Number of pockets: ${everydayPack.pocketNum}</li>
          <li>Left strap length: ${everydayPack.strapLength.left}</li>
          <li>Right strap length: ${everydayPack.strapLength.right}</li>
          <li>Lid status: ${everydayPack.lidOpen ? "Open" : "Close"}</li>
        </ul>
      </article>
    </main>
`
// Use JS to get the document's body's innerHTML and set it equal to content

document.body.innerHTML = content;

// Next send values into template literal using Placeholder ${}

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());