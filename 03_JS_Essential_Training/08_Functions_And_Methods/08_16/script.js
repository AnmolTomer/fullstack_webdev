/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
import backpackObjectArray from "./components/data.js";

console.log(backpackObjectArray)

// Map through the array and make a newArray

const content = backpackObjectArray.map((backpack) => {
  // "backpack" now holds a single backpack object

  // Create new article

  let backpackArticle = document.createElement("article");
  backpackArticle.classList.add("backpack")

  // Set articleID to the backpack.id property
  backpackArticle.setAttribute("id", backpack.id)

  // Set the innerHTML of backpackArticle using the backpack object
  backpackArticle.innerHTML = `
  <figure class="backpack__image">
    <img src=${backpack.image} alt="" loading="lazy" />
  </figure>
  <h1 class = "backpack__name">${backpack.name}</h1>
  <ul class="backpack__features">
    <li class="feature backpack__volume">Volume: <span>${backpack.volume}</span></li>
    <li class="feature backpack__color">Color: <span>${backpack.color}</span></li>
    <li class="feature backpack__age">Age: <span>${backpack.backpackAge()} days old</span></li>
    <li class="feature backpack__pockets">Number of Pockets: <span>${backpack.pocketNum}</span></li>
    <li class="feature backpack__strap">Left Strap Length: <span>${backpack.strapLength.left}</span></li>
    <li class="feature backpack__strap">Right Strap Length: <span>${backpack.strapLength.right}</span></li>
    <li class="feature backpack__lid">Lid Status: <span>${backpack.lidOpen ? "open" : "closed" }</span></li>
  `;
  // return backpackArticle to content Array
  return backpackArticle;
})

// Get main

const main = document.querySelector(".maincontent")

// Loop through thte content array to append each backpack article

content.forEach((backpack) => {
  main.append(backpack)
})