/**
 * Working with functions
 * @link https://developer.mozilla.org/en-US/docs/Glossary/Function
 */

// Object Creation

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3
}

// currentPack param going through the entire function 
const addPack = function (currentPack) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
  <h1>${currentPack.name}</h1>
  <ul>
    <li>Volume: ${currentPack.volume}</li>
    <li>Color: ${currentPack.color}</li>
    <li>Number of Pockets: ${currentPack.pocketNum}</li>
  </ul>
  `;
  return newArticle;
};

const body = document.querySelector("body");
body.append(addPack(greenPack))