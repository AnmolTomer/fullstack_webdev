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

- We create a template literal, add object with currentPack param and then createElement of article and then we use `innerHTML`
