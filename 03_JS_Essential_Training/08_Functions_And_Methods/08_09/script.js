/**
 * Practice: Pass values between functions
 *
 * Create two functions:
 * - Main function
 *  - Creates new <article> element
 *  - Populates <article> with content (see const content below)
 *  - Returns <article> element to where function is called
 * - Helper image function
 *  - Creates new <figure> element
 *  - Adds <img> markup pointing to frogpack.image
 *  - Adds <figcaption> element with image description
 *  - Returns <figure> element to where function is called
 */

const frogpack = {
  name: "Frog Backpack",
  volume: 8,
  color: "green",
  pocketNum: 3,
  strapLength: {
    left: 10,
    right: 10,
  },
  lidOpen: false,
  image: "frog.svg",
  description: "A green kids backpack designed to make the lid look like the face of a frog sticking out its tongue.",
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus;
  },
  newStrapLength: function (lengthLeft, lengthRight) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  },
};

// Baseline HTML output
const content = `
    <h1 class="backpack__name">${frogpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        frogpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        frogpack.color
      }</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        frogpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        frogpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        frogpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        frogpack.lidOpen ? "open" : "closed"
      }</span></li>
    </ul>  
`;

// Take the data obj and add url for image into figure element and return it
const addFigure = (dataObj) => {
  let newFigure = document.createElement("figure")
  let newImg = document.createElement("img");
  newImg.setAttribute("src", dataObj.image)
  newImg.setAttribute("alt", "Frog Backpack Image")
  newImg.setAttribute("height", "200px")
  newImg.setAttribute("width", "40%")
  let newDesc = document.createElement("figcaption")
  newDesc.innerText = dataObj.description
  newFigure.append(newImg, newDesc)
  return newFigure;
}

const createArticle = (frogPack) => {
  let newArticle = document.createElement("article");
  newArticle.innerHTML = content
  newArticle.append(addFigure(frogpack));
  return newArticle;
};


document.querySelector("main").append(createArticle(frogpack))