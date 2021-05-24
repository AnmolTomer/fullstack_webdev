// 1- Find an element and add two different classes to it. Remove only one of those 2 classes and replace the other class.

console.log("Finding page-header__heading by class")
console.log(document.getElementsByClassName("page-header__heading"))
console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-")
console.log("Finding element h2.page-header__heading using querySelector:")
console.log(document.querySelector("h2.page-header__heading"))
console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-")
let classList = document.querySelector("h2.page-header__heading").classList

console.log("Adding class_1 and class_2 to h2.page-header__heading:")

document.querySelector("h2.page-header__heading").classList.add("class_1", "class_2")
console.log("All classes: " + classList)
console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-")
console.log("Removing class_2 from h2.page-header__heading")
document.querySelector("h2.page-header__heading").classList.remove("class_2")

console.log("Remaining classes: " + classList)
console.log("-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-")

document.querySelector("h2.page-header__heading").classList.replace("class_1", "class_1_new_replaced")

console.log("Updated classes: " + classList)
// -------------------------------------------

// 2 - Add a new attribute to an element, request the value of the attribute, change the value of the attribute.
console.log("------------------------------------------------------------------")
console.log("Add a new attribute to an element: shaolin_bag")
document.querySelector("h1.backpack__name").setAttribute("shaolin_bag", "This is a shaolin bag.")

let shaolinBagVal = document.querySelector("h1.backpack__name").getAttribute("shaolin_bag")

console.log("Request Value of shaolin_bag gives: " + shaolinBagVal)

// Change the value of shaolin_bag

document.querySelector("h1.backpack__name").setAttribute("shaolin_bag", "This is updated shaolin_bag attribute.")
let updatedShaolinBag = document.querySelector("h1.backpack__name").getAttribute("shaolin_bag")
console.log("New value of shaolin_bag is: " + updatedShaolinBag)
console.log("------------------------------------------------------------------")
// -------------------------------------------
// 3- Add inline CSS to an element by specifying the style property and setting its value.

console.log("Adding color to header of color: ", document.querySelector("header").style.color = "rebeccapurple")
console.log("Addomg backgroundColor to header of color: ", document.querySelector("header").style.backgroundColor = "pink")
console.log("Adding paddingTop to h2.page-header__heading of: ", document.querySelector("h2.page-header__heading").style.paddingTop = "30px")

console.log("------------------------------------------------------------------")
// -------------------------------------------
// - Query the style property of an element in the console to get a list of all the style properties available. 

console.log("Querying h2.page-header__heading to get all styles: ")
console.log(document.querySelector("h2.page-header__heading").style)