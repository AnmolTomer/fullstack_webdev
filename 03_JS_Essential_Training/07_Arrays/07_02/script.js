/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

// Length of array:
console.log("Length of array: ", collection.length)

// Access specific element in array
let idx = 2;
console.log("Element at index " + idx + ": " + collection[idx])

// Updating value

collection[idx] = "John Wick"
console.log(collection)

// New item at the end of the array

collection[collection.length] = "New item at end"

console.log("Updated list: ", collection)

collection[8] = "In the end, skipping 5-7"
console.log("Element at 8th index = ", collection[8])

console.log("Element at skipped indices 5 - 7 gives: ", collection[6])
console.log("Updated list: ", collection)