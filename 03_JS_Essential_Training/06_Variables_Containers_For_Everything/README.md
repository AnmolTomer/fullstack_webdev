# 06. Variables: Containers for Everything

## 06_01 Variables

- We organize objects using variables to be able to refer them and call them in our methods or wherever required. Variable is a container with a name containing some piece of data.

---

## 06_02 Var & 06_03 Scope

- Here we look at fundamentals of JS, including variables, data types, and various operators. Ref: [06_02/script.js](06_02/script.js)
- `var` was default for variables for decades in JS, it is also the default for a variable created if we forget to mention we are creating a new variable.

- We can define multiple different variables at the same time using var statement. If we know we will have several different variables, we can use a comma separated list to declare them all.

```js
var x = 4,
  y = 5,
  z = "blue";
// creates 3 variables with values provided to them

var empty;
// create undefined variables which have nothing in them, empty returns undefined i.e. it is there but something needs to be put inside it.
```

- var is defined as globally scoped variable in MDN Web Docs. [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). This means that if we assign a value to var and inside the function if we assign a new value to the var of same name, that new value inside the function takes effect in all corresponding code, even outside the function. This can lead to scope issues, which can lead to unexpected behavior, errors and a lot of frustration while you debug.

```js
var x = 1;

if (x === 1) {
  var x = 2;
  console.log(x); // prints 2
}
console.log(x);
// expected output: 2
```

- Ref: [06_03](06_03/script.js) and how changing function call place as well as where we have defined function will change the output as the scope issues arise with var named color globally and in the function.

- This issue has been a major one for JS devs, and as result of this really non-standard hacks like custom variables inside functions and leads to cluttered code overall. For this reason let and scope variables and both are locally scoped variables.

---

## 06_04 Let

- The let statement declares a block-scoped local variable, optionally initializing it to a value. Let var is only defined in the scope it is declared, and this allows us to safely avoid variable scope issue. When we are working in local scope with the help of let we can declare variables that exist within that local scope, having nothing to do with variables outside of local scope unless we pass the outer scope variables as parameters obviously. When we work in local scope we treat the code in local scope as its own separate code base with its own variables separate from everything else.

-

```js
let x = 1;

if (x === 1) {
  let x = 2;

  console.log(x);
  // expected output: 2
}

console.log(x);
// expected output: 1
```

- Ref: [06_04/script.js](./06_04/script.js)

- Reference: [Let](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

- `How to decide between var or let ?` For most situations, when you want to use a changeable or a mutable variable, you should use a let. That includes when you want to use it in global scope, because when you declare a let in global scope, it will apply everywhere except when you re-declare it. The var is only really useful if you want a mutable variable that can be changed from number to string or other data types with global scope all the time and that situation is rare and a special case.

- By default when needed a mutable variable use a let.

---

## 06_05 Const

- Const statement defines a block scoped constant. From a scope perspective it works the same as let statement but const is a constant.
- Ref: [06_05](06_05/script.js)

- We can still change the properties, classes of a const object it just means that const can't be assigned to some other object. For any data that should be prevented from accidentally being overwritten like array, function, object, use a const.

---

## 06_06 Data Types

- Now we know how to declare different types of variables. What can be put inside those variables ? In JS, pretty much anything can be stored in a variable. Ref: [06_06](06_06/script.js) . JS is a weakly typed language, i.e. we don't have to declare what type of data goes into your variables. We just fill the variables with whatever data we want and JS will identify or atleast try to identify that data type for you.

- MDN Reference: [Link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

- You can use `typeOf` operator could be used to find out what is the data type held by a variable.

---

## 06_07, 06_08 Assignment vs Comparison and Math Operators

- In JS the equal symbol is not used in the same way as we use it in math, or even same as other programming languages due to triple equal sign. `=` means assignment, value on right side is assigned to the container on the left. Ref: [06_07](06_07/script.js)

- Computers are really good at computing as in doing math, but humans are really good at telling computers what math to do when. For mathematical needs we have standard arithmetic operators in JS. Similar to other languages mostly. Arithmetic operators, modulo, exponentiation `**`, pre/post (inc/dec)rement. Make sure when you are operating with `+` that you have 4 + 3 and not "4" + 3 as the latter would give you 43, but "4" - 3 will give 1.

---

## Wrap Up

1. What does a single equals symbol in JavaScript indicate?

- Assignment of value to the named variable

2. What happens if you use a named variable without first declaring it using the var, let, or const keywords?

- A global var is created with the name and value assignment.

3. What is the value of `defaultColor` when it is logged in the console?

```js
var defaultColor = "purple";

function setColor() {
  if (defaultColor === "purple") {
    let defaultColor = "orange";
  }
}

setColor();
console.log(defaultColor);
```

- "purple". The console.log statement happens in the global scope while the color is changed in a local scope where a separate let with the same name is created. let defaultColor only exists inside the function scope of setColor().

4. How do you capture the result of a math equation like 42 \* 38 in JavaScript?

- Create a variable and set it equal to the math equation.

5. In what scenario should you use var instead of let to define a variable?

- When you need a globally scoped reassignable variable available to all functions and statements.

6. Which statement is true?

- Object properties within a constant can be changed.

7. What is logged in the console after this code is executed?

```js
let sum = 23.95;
let tip = "3";

console.log("The total is $" + sum + tip + ".");
```

- "The total is $23.953."

8. What is the do the operators (equals symbols) in these three lines of code signify?

```js
a = b;
a == b;
a === b;
```

- a = b assigns the value of b to a. a == b tests for equality between a and b. a === b tests for identical equality between a and b.
