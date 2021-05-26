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
