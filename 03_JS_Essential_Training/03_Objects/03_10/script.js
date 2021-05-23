/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */

import Backpack from "./Backpack.js"

const SkyBags = new Backpack("Skybags", 30, "grey", 12, 25, 25, false);

console.log("The backpack object: ", SkyBags);
console.log("The pockets in bag are: ", SkyBags.pocketNum);