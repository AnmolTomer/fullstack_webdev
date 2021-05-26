# 04. Learning ECMAScript ES6+

## 00. Introduction

- JS is the go to for building web applications. As web changes, we have seen JS evolve as well. That doesn't mean we have to get rid of our old knowledge and start over again, but on the contrary it means that new features are being added all the time to make our jobs as developers easier and more efficient.

- In this course we will get into ECMAScript, what it is, how to use it and we will go over a ton of features to help us work more efficiently with objects, arrays, functions and classes as we build our own apps.

- **NOTE:** Before beginning this course there are a few of the topics which you should be aware of, essentially the pre-requisites. A little bit of knowledge of HTML, some knowledge of CSS, some information about JavaScript (Strings, Numbers, Arrays, Objects, Functions). A code editor, a browser is all that's needed.

---

# 01. What is ECMAScript ?

## 01_01 What is ECMAScript?

- JS was created by Brendon Eich in 1995 at Netscape and then it was adopted by Microsoft as JScript. With different versions of a language for different browsers, soon there was a need felt to standardize the language. Here comes the ECMA, (European Computer Manufacturers Association) is governing body that provides the ECMAScript specifications for JavaScript browser implementations.

- The people who are on the ECMAScript committee work at companies that make browsers, companies that use a lot of JS or are JS community members. Soon after its foundation, ECMAScript 1 (ES1) spec was released in 1997. ES2 and ES3 came out in 1998 and 1999. ES4 never really came out. ES5 came out in 2009, this is the one that gave us array methods, for each, map and filter. The last huge release was ES6 which came out in 2015, since then naming conventions changed.

- After the release of ES6, features comes out by year ES2020, ES2021 etc. It's all just JS at its core. New ES spec doesn't change what's already in JS, most of the times it adds new, efficient features.

## 01_02 Staying Up to date with the new releases

- ECMAScript committee's recent proposals, scope and other work can be seen on the [website](https://ecma-international.org) or [github repo](https://github.com/tc39)

- Repo contains all the different proposals that are part of the ECMAScript process. You can see what stage they are in, see the code, how a certain feature is built. You can contribute, and look at all the different proposals and their stages as well.

## 01_03 Understanding Browser Support

- When the ECMAScript committee approves a new feature, companies that make web browsers have new guidelines for how to use JS. That doesn't mean that magically all the features appear in the browsers. You can check which feature is supported on which browser on this [table](https://kangax.github.io/compat-table/es6/)

---

# 02. ECMAScript Variables and Data Structures

## 02_01 Using the let keyword || 02_02 Const keyword

- In earlier versions of JS there we could create variable only using the var keyword. We have script tag where we write JS code in index.html.

- let allows us to enforce block scoping in javascript.

- Ref: [02_01](02_01/script.js)

- In addition to let, there's another way to create a variable with JavaScript and that's to create a constant. We can use the const keyword just like we use the var keyword to create a variable that cannot be reset.

- When you try to change value of const variable then console gives `Uncaught TypeError, Assignment to a constant variable.`

## 02_03 Writing Template Strings/Literals

- Template Literals allows us to tap into the functionality of template languages, i.e. to format our JS code with variable and HTML. Ref: [02_03](./02_03/script.js)

## 02_04 Searching Strings

- There are few built-in utilities in JS that help us in completing common tasks like searching strings.

- Ref: [02_04](02_04/script.js)

## 02_05 Using symbols

- At the core of all the JS are primitives. Primitives in JS are types like numbers, strings, arrays, objects and more.

- Symbols are a new primitive type in JS introduced in ES6. Symbols are primarily used as unique IDs. Symbols do not conflict with object string keys.

- Ref: [02_05](02_05/script.js)

## 02_06 Writing Maps

- Map object holds key value pairs. What's the difference between a map and an object ? In a map, any value, both objects and primitive values may be used either as a key or a value.

- In maps we have to do `object.get(keyName)` to get the values. In maps keys can be of any type. `mapName.size` to see the number of entries in a map.

- To have something other than a string as a key. Unlike objects maps iterate its elements in their insertion order, so unlike objects that can come back in any order the key value pairs can come back in any order. Map objects returns the values back to us in the order they were added.

- Maps are a useful and fairly new data type in javascript and can be used for all sorts of interesting things.

- Ref: [02_06](02_06/script.js)

## 02_07 Working with Sets

- Sets are collection of values that can be of any type, but the rule with sets is that each value must be unique. The API of sets is a little similar to Map but a little bit different as well.

- When we create a new set, we are going to use the constructor and then we can make use of some functions of the Sets prototype.

- We can't use `map` to iterate over sets, `forEach` needs to be used.

- Ref: [02_07/script.js](02_07/script.js)

---

# 03. Arrays and Array Methods

## 03_01 Using the array spread operator

- Spread operator turns the elements of an array into arguments of a function call or into elements of an array literal.

- We create 3 arrays viz cats, dogs and animals. Now if we add cats and dogs as comma separated item in animals array it would lead to two nested arrays in animals arrays. Here is where `spread` operator `...` comes into play. We can put in `...` in front of cats and dogs and this would give us a single array of animals as well as takes all the elements from cats and dogs array and it will spread them into animals array without nesting them.

- Ref: [03_01](03_01/script.js)

## 03_02 Destructuring arrays

- Destructuring assignment gives us an easy way to extract data from arrays and objects and assign them to variables. Let's look at how destructuring works with array.s

- We have an array of cities, and if we want to grab single one of them we could use their index to call them. But a new way to handle this type of access is to handle it with destructuring.

- If we want to access the first and second element and keeping rest of the array same we could do so in the following manner:

```js
// Old method of creating arrays and accessing them by index
let cities = ["DC", "LA", "CA", "NY", "FL"];
console.log(cities[0]); // O/p: DC
// --------------------------------------
// Using destructuring
let [first, second, ...rest] = ["DC", "LA", "CA", "NY", "FL"];
console.log(first); // O/p: DC
console.log(second); // O/p: LA
console.log(rest); // O/p: ["CA", "NY", "FL"]
// To see the fifth item directly, put commas in the places you don't want a name to assign to
let [, , , , fifth] = ["DC", "LA", "CA", "NY", "FL"];
console.log(fifth);
```

## 03_03 Searching arrays with the .includes function

- `.includes()` could be used to help us search in arrays.

```js
// Old method of creating arrays and accessing them by index
let cities = ["DC", "LA", "CA", "NY", "FL"];
console.log(cities.includes("DC")); // True
console.log(cities.includes("Tel-Aviv")); // False
```

---

# 04. ECMAScript Objects

## 04_01 Enhancing Object Literals

- We build a function that is going to return an object. The function takes in a name, sound and returns name and sound.

```js
function skier(name, sound) {
  return {
    name: name,
    sound: sound,
    powederYell: function () {
      let yell = this.sound.toUpperCase();
      console.log(`${yell}! ${yell}!`);
    },
  };
}

skier("John", "arghh").powederYell();
```

- The above code is good to print `powderYell()` but a newer object syntax called object literal enhancement can make this even better. `name:name` and `sound:sound` could be replaced with just `name` and `sound` and everything would still work as before.

- This can be used to make code more clean and less repetitive.

- Ref: [04_01](04_01/script.js)

## 04_02 Creating Objects with Spread Operator

- Here we see how to use the spread operator `...` with the objects. We create an object called daytime and we put in keys for breakfast, lunch. Then we create a variable for `nighttime` and another object for `backpackingMeals` which contains daytime and nighttime.

- On doing `console.log(backpackingMeals)` we get nested items from daytime as it contains breakfast and lunch. So we can instead store the daytime using spread operator in `backpackingMeals` and we will get only the items and no nesting. That way all the three meals, 2 in daytime and 1 in nighttime meals all will be at the same level.

- Ref: [04_02/script.js](04_02/script.js)

## 04_03 Destructuring Objects

- A handy feature that we will see used widely in JavaScript applications is destructuring.

- In `script.js` we take a sandwich object which has title, price, description and some ingredients. Now if we wanted to `console.log()` some of the values from the sandwich we could say let's log the whole sandwich first, and we can also do sandwich.title and similarly dot notation for other properties.

- Ref: [04_03/script.js](04_03/script.js)

## 04_04 Iterating with the for/of loop

- `For / of` is a new iteration syntax that we can use to replace `for in` and `forEach`. We can use this to loop over iterable objects, like arrays, strings, maps and sets.

- In script.js we iterate over a string using `for of`, over an array and more.

- Ref: [04_04/script.js](04_04/script.js)

## 04_05 Classes in JS && 04_06 Inheritance in JS Classes

- Classes have been used for a long time in OOP based languages to encourage reusability.

- E.g. if we have a class called chair, it would have some characteristics, and we would create instances (objects) of that chair class in our projects. As of ES6 we have a way to create and use classes with JS. The syntax is easy as well.

- Ref: [04_05/script.js](04_05/script.js)

## 04_07 Getting and setting class values

- In objects and in classes JS has a `get()` and `set()` method. A getter or a get method gets the value of a specific property. If you are wondering what is the property of this object then you can do `objectName.property.get()` to get its value. Similarly to set the value of an object you can do `objectName.property.set() = "value"`

- getters and setters can be used in classes as well as regular objects.

---

5.  ECMAScript Functions

## 05_01 Using the string.repeat() function

- We have looked at array and string methods like startsWith, endsWith and includes(). Here we look at `.repeat()` method. The repeat metho builds and returns a new string which contains a certain number of copies of a particular given string.

- Ref: [05_01/script.js](05_01/script.js)

## 05_02 & 05_03 Setting default function parameters & Arrow functions

- Ref: [05_02/script.js](05_02/script.js)

## 05_04 Understanding this in arrow functions

- We have seen how arrow functions make our code more readable. In addition to this arrow functions helps us to deal with the scope of this in our JS code. Let's take an example of the old way and then we will update this to the new syntax.

- We create a person object, with array of hobbies. Add printHobbies method. When we use the conventional method defined using function keyword we are not able to do `this.property` and at times developers substitute around this by setting `this = _this` to scope this keyword to be able to plugin the properties in string literal.

- A better approach instead of doing this = \_this can be using an arrow function.

- Ref: [05_04/script.js](05_04/script.js)

## 05_05 Generators

- Generators are a new type of function that allow us to pause functions in the middle of execution to be resumed later. You know you are dealing with a generator when you see an asterisk `*` immediately followed by function keyword.

- We can hit pause by using the yield keyword and this can be used numerous times within the same function. We have four yield statements inside the director generator function below in the example. on calling the `.next().value` we get the value and on doing `.next()` we get value and done as boolean true or false, when there are no more yield statements then done will be true.

- Remember `yield` keyword will be used anytime we want to his pause inside the execution of a function.

- Ref: [05_05/script.js](05_05/script.js)

```js
// director generator function will do a countdown for us.
function* director() {
  yield "Three";
  yield "Two";
  yield "One";
  yield "Action";
}
let countdown = director();
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next().value);
console.log(countdown.next());
console.log(countdown.next());
```

![](https://i.imgur.com/hQYOYvS.png)

---

# 6. Asynchronous JavaScript

<!-- TODO: Circle back later on to entire section. -->

## 06_01 Building Promises

- Promises help us deal with async behaviour in JavaScript. When something is asynchronous it just means that some sort of waiting is going on. There's a delay between when we ask for something, and when we receive it.

- Prime example of this is fetching data. We ask for some data from an external API, we wait for a couple of seconds and then it comes back to us. So to create our first promise, we will create a delay function. So the delay function in script.js takes a certain number of seconds and then it is going to `return a new promise`.

- New promise will take in a callback function, takes resolve as param, resolve means that if everything goes as expected, it will resolve, then we use setTimeout to wait for a certain number of seconds. setTimeout function takes in resolve, which stands in for the callback function to fire after the timeout.

- `delay` function uses the timeout function and then as soon as the timeout is over we log two seconds to console.

- Anything that we pass in to the `.then()` function is resolve, it's the function that's going to be called. But what happens if resolve doesn't go through? Data isn't loaded or some other error? Promises by nature are either pass or fail, no in between.

- Promises help us make async code more manageable and more reusable.

- Ref: [06_01/script.js](06_01/script.js)

## 06_02 Loading Remote Data with Promises

- We often use promises to load data. Here we create a function that returns a promise. Function is called `spacePeople` as this function fetches data from an API that returns names of astronauts who are currently in space.

- What you see in 06_02 is going to be simplified tremendously by using `fetch()` we see that in 06_03.

- Ref: [06_02/script.js](06_02/script.js)

## 06_03 Returning promises with fetch

- We saw in [06_02/script.js](06_02/script.js) to get data from an API, but that looked like a lot of work right. Now we look at fetch, fetch is a function that works natively in browser. There are also packages that work with Node like node-fetch and isomorphic-fetch to do something similar.

- Fetch just takes in the URL of our API and prints it to console.

- Ref: [06_03/script.js](06_03/script.js)

##
