/**
 * The arrow function
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

// Function with name addPack that takes in currentPack param
const addPack = (currentPack) => {
  const newArticle = document.createElement("article")

  newArticle.innerHTML = `
  <h1>${currentPack.name}</h1>
  <ul>
    <li>Color: ${currentPack.color},</li>    
    <li>Volume: ${currentPack.volume}</li>    
    <li>PocketNum: ${currentPack.pocketNum}</li>    
  </ul>
  `
  return newArticle;
}

const main = document.querySelector("main");
main.append(addPack(greenPack));