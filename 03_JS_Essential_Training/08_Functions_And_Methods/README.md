# 08. Functions and Methods

## 08_01 The real-world function

- Sorting objects is tricky as you have to decide what sorting system you want to use and then you have to actually sort elements. Functions in programming work just like functions do in real life. We specify a series of steps, and based on the outcome of each of these steps, we decide what to do next. The difference between how we do this in the real world and how computer does this in a function is through a very specific instruction about each step of the logical chain for the desired results.

## 08_02 Functions and Methods

- We have looked at handling data through objects, variables and arrays. Main use of JavaScript is as a scripting language meaning we use it to write programs. And that's what functions are for. Function is independent, method is function inside an object.

- Function can be created in a couple of different ways, and how we create function has an impact on how it can be used. Classic function is a function declaration as shown below. This is function declaration and here function is hoisted/raised to the global scope, meaning it becomes available everywhere.

- So even if we declare this function inside a local scope, it will still be available everywhere else in the script. This function is also an advanced variable and can be re-declared. Just like var if you create a new function and use the same name, that new function will take precedence further down in the code. So, one can accidentally overwrite a function if you are using function declarations.

- Function declarations are easy to understand just by looking at them, as they quite literally say function followed by name, params etc. Function declarations are parsed in the order they appear in the code. If we have a function `B` that relies on function `A` then you have to make sure that `A` is defined before function B.

```js
// Function declaration

function doSomeMath(a, b) {
  let c = a + b;
  return c;
}
```

- Another way of declaring a function is through a function expression as shown below. In a function variable we set up a variable, in this case a constant, we give that constant a name and then we set the value of that constant equal to an anonymous function. Here functions acts in the same way as function declaration except function doesn't have a name, rather is tied to a const varible and then we call the variable.

- This pattern of using the variable to call the function has become the preferred way of declaring functions in javascript frameworks like react. And the current best practice is to place function expression inside a const. This makes sense because, function expression is sitting inside a variable and it will then have the same scope as that variable type. So if we are using a const then it is locally scoped or block scoped automatically.

- So, if we place the function in a const, it also cannot be re-declared and we are never in danger of accidentally later on overriding the function or destroying the function. Finally, function expressions `are not hoisted/raised to global`. They exist only in the scope they were created, and this is also facilitated by the const being used. So in a way, function expressions are a more advanced version of functions.

```js
// function expression
const doMoreMath = function (a, b) {
  let c = a * b;
  return c;
};
```

- To call and use either a function declaration or expression we simply name it and add parentheses at the end. And then if there are parameters, we pass those parameters along.

- One more type of function worth mentioning is `Immediately Invoked Function Expression (IIFE)`. In an IIFE we wrap an anonymous function or a name function inside parentheses and then we put in place another set of parentheses() outside. What happens with IIFE is that function is immediately invoked and run as soon as the browser encounters it.

- This is bit of an anti-pattern as normally we want to control when our functions run but in some cases it can be handy because you want something to happen as soon as possible.

```js
// IIFE
(function () {
  let a = 4;
  let b = 6;
  let c = doSomeMath(a, b);
  console.log(`The sum of a and b is: ${c}`);
})();
```

---

## 08_03 A Standard Function

- We create a template literal, add object with currentPack param and then createElement of article and then we use `innerHTML` to populate it with list items followed by selecting the body element using querySelector and appending to it our object using `addPack(objectName)`

```js
const greenPack = {
  name: "Frog Pack",
  color: "green",
  volume: 8,
  pocketNum: 3,
};

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
body.append(addPack(greenPack));
```

- Functions can get really complex, really fast but the basic premise remains the same.Function will always have a name, it will always have parameters (nothing counts), there will be curly brackets wrapping around/after the parameters and functions may/may not return the data when called.

- Ref: [08_03](08_03/script.js)

---

## 08_04 The Arrow Function 🏹🏹

- In modern JS it's more and more common to use arrow functions in place of regular function expressions. Arrow functions are a shorter way of writing function expressions, and they also have some special properties, we can take advantage of.

- Ref: [08_04/script.js](08_04/script.js)

- MDN Web Docs Reference [Arrow Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

- Parentheses with parameter followed by an arrow and {logic}.

```js
// Traditional function

function (a){
  return a+100
}

// 1. Valid Arrow function - remove the word "function" and place arrow between the parameters and opening body bracket

(a) => {
  return a+100;
}

// 2. Also a valid arrow function - Remove the body brackets {} and word "return" -- the return is implied

(a) => a + 100;

// 3. Also a valid arrow function - Remove the argument () parentheses

a => a + 100;
```

- `Why do we have 2 methods of writing functions ?` On the surface, the arrow functions are a simpler way of writing anonymous functions. When we work with events, they produce a lot more cleaner code, you will see this when we work with event.

- There are some subtle differences worth knowing about when it comes to anonymous functions, i.e. function declarations can be hoisted meaning we can call the function before it is declared in the JS. This is improper coding practice but it does work. Arrow functions can only be called after they have been declared and by using arrow functions we are imposing a stricter way of writing our code, one that is more robust.

- `You can't use arrow functions when declaring methods in an object.` Inside an object if you have a method, you have to use proper anonymous function declaration. Arrow function won't work in that context.

---

## 08_05 Arrow functions and "this"

- We have seen that `this` keyword refers to the current object itself and can be used inside object. Also this is used in an object constructor.

- Ref: [08_05](08_05/script.js) here we have a method inside our object called `new volume.` New volume contains a function, we console log out the text this volume in the method, then we use this keyword to refer to the volume property of the current object.

- This keyword works fine inside a regular function in a object. If we call function inside a function then issues start to arise. If we want IIFE inside a function then better to use arrow function to avoid declaration being hoisted to global scope.

- Arrow function returns the local scope value as arrow function doesn't have its own `this`. Arrow function doesn't know what `this` keyword means and refers to closest available scope, which in our case was object and its volume that we changed to 5.

- For the same reason, not knowing what `this` is, we don't use arrow function as declaration for a method, because if we did that, then the arrow function wouldn't know what scope to use, so it would refer back to global scope and nothing would work inside arrow function.

- If you are using this in a method within an object and you then get an odd result, try turning the function into an arrow function to see if that solves the problem, most likely it's the issue with scope.

---

## 08_06 Practice: Build a function

- Ref: [08_06](08_06/script.js)

- Create a basic function declaration.
- Make a change to an element in the DOM. (querySelector, adding a class) etc.
- Call the function declaration
- Create a basic function expression

---

## 08_07 Pass data to a function with parameters

- Functions are great tool for using or transforming data in some way.

- To parse data, we have to pass data to the function, and this is done by passing arguments through function parameters.

- We want to calculate the tip for a given amount. We pass a amount and percentage, and then return the tip and total amount to us.

- Ref: [08_07/script.js](08_07/script.js)

---

## 08_08 Return values from a function

- Our tip calculator in [08_07/script.js](08_07/script.js) executes code and outputs it into the console. In some other cases we want the function to return something where the function was originally called so that we can process that content further.

- If wo look at console output from `08_07` we will see that we are using full stop to represent the decimals in the currency. This is correct for some currencies in some languages but not for all of them. We are also not showing correct currency output.

- We will improve tip calculator in [08_08/script.js](08_08/script.js) to output the correct currency, formatting and symbols for whatever currency we are targeting.

- To do that we create a new helper function to transform these numbers for us.

- Transform a number into an internationalized format for this we use `Intl.NumberFormat`. We will use this international number formatting object, and it's a constructor for objects that enable language sensitive formatting.

- MDN Reference for [Intl.NumberFormat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat)
