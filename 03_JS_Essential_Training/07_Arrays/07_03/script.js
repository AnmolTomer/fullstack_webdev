/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];

console.log(collection);

// Output values as string - comma,separated,list,of,all,elements

console.log(collection.join())

// join() with separator

console.log("join() with separator: ", collection.join(", "))

// Add one or more items at the end of the array

collection.push("Marvel", "DC", "Tony")

console.log("Array after push(): ", collection)

// Unshift because shift methods takes the first element off the array and moves everything else to left, to add element in front you have to unshift i.e. move existing elements to right.
collection.unshift("Bucky", "Falcon", "Billy Butcher")

console.log("Array after unshift(): ", collection)

// Apply function to each element in the array 

// E.g. 1

/* collection.forEach(function (item) {
    item = `<li>${item}</li>`
    console.log(item)
});
 */

// E.g. 2 Find first item that matches our parameter of length >= 7

let longItems = collection.find(function (item) {
    if (item.length >= 7)
        return item;
})

console.log("longItems: ", longItems);

// Array stays the same in forEach


console.log(collection)