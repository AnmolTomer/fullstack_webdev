# DOM

## 05_01 DOM: The Document Object Model

- When you present a web browser, with a HTML document, the browser creates an object model DOM for the document and this DOM represents hierarchical structure of how different elements relate to each other and how are they nested. It is so similar that we can create DOM representation of real world objects as well.

- This allows us to traverse the DOM tree to find the elements we are looking for is an essential skill while working with JS. It allows us to tell JS what to look for before we can do something on what we find.

---

## 05_02 Access elements with querySelector methods

- Ref: [05_02](05_02/script.js)

- We have updated `index.html` with a backpack image and other things, but from JS pov nothing much has changed so far.

- Anytime we want to do something in DOM, we start by finding out the element(s) you want to work with. For this we have 2 methods, `querySelector()` and `querySelectorAll()`. They both apply to document object. These methods use the standard CSS queries to go through the DOM tree and find the specified elements. If you know how to target things with CSS, a class, an id etc. then you also know how to target things using JS via these methods. That's what makes these 2 methods so powerful.

- `document.querySelector("main")` returns whatever is inside main element. We can use `document.querySelector(".maincontent")` will allow us to get content as per class name. We can use any CSS query with `querySelector()`. Similarly, `document.querySelector("main li:last-child")` will give us `last-child` of the list.

- Difference between `querySelector()` and `querySelectorAll()` is that `querySelector()` returns the first Element within the document that matches the specified selector. If no matches are found then null is returned.

- If we want to get all the list items then we use `querySelectorAll()` this returns an array/NodeList that has all the objects. We can do `document.querySelectorAll("main li")` this will return to us an array of all the list items within main element.

- Once we receive NodeList we can use a `for each` loop to go through all the items and do something to each of the items. Below are examples of performing batch actions on items returned from `querySelectorAll()` method.

```js
document.querySelectorAll("main li:last-child").forEach((item) => {
  item.style.backgroundColor = "blue";
});

document.querySelectorAll("main li").forEach((item) => {
  item.style.backgroundColor = "red";
});
```

---

## 05_03 Access elements using older methods

- In tutorials you might find 2 other methods to access elements and there are `getElementsByClassName()` and `getElementById()`. These 2 methods still work but querySelector() and querySelectorAll() were introduced to simplify this process and remedy some of the shortcoming of the older methods. querySelector methods are just better.

- `getElementsByClassName()`: This method returns an array like object of all the nodes or child elements matching the query in the document. The query is a string of space separated class names. Ref:[05_03](./05_03/script.js)

- `document.getElementsByClassName("packprop")` is an example to get all the items with class packprop.

- `document.getElementsByClassName("packprop backpack__color")` can be used to query on 2 classes. Some older code is full of ids so that developers don't have to worry about iterating over returned HTML collection that comes with using getElementsByClassName() and they can directly use `getElementsById()` as it returns single object.

---

## 05_04 Find an Element

- Ref: [05_04](./05_04/script.js)

- Queries such as following can be used to change what's on a page: `document.querySelectorAll(".feature.backpack__pockets")[0].innerText = "Number of pockets: 18"`

---

## 05_05 Modifying element classes

- A common task in JS is to modify classes of an element in some way. This is a simple way of changing the appearence or behavior of an element without having to inject CSS into the HTML itself. Instead, we just add a class or remove a class to make something happen. E.g. Hiding and showing a panel or highlighting a button or a section etc.

- Class manipulation is common enough, and for that we have 2 specialized properties for it. The first and the oldest one is `className` and is available for all the elements in the DOM. className holds a string listing out all the classes appended to an element. Ref: [05_05](05_05/script.js)

- `className` returns a string and if you have an element with multiple classes and you want to add another class you will have to type all the previous classes as well, you can't just append a new class or remove selectively.

- For that reason if you have an element with multiple classes and you want to just change one of the classes, you have to somehow go in and parse out which classes you want to keep and which ones you want to change and this gets really clunky and requires a lot of code. The other problem is even more serious. In react and other JS frameworks the term `className` is used in place of `class` in markup to avoid collisions with JS class keyword used when we are trying to set up classes. This means if you are trying to target the class name property, but you are inside a JS framework then you are doing something else leading to unexpected behavior.

- As a result, avoid using `className` property in frameworks and we should be careful about using the `className` property. Instead to get around both of these problems we have a solution, and that solution is: `classList`.

- The `classList` property gives us a DOM token collection of all the classes appended to an element. What makes `classList` even more powerful is that it comes with its own set of methods to manipulate the individual classes. If we want to add a new class we can use `add("className")` to remove a class we can do `remove("className")` and we can use `toggle("className")` when we want to add a class if it's not there and remove it if it's there, there's a replace method where we give in name of class we want to replace, and then we give the name of class we want to replace it by. `replace("classToRemove","classToAdd")`.

- If you want to add, remove, toggle or replace classes you should use classList property and use the methods that come with it. On the other hand, If you are looking for a string and you want just the output of all the classes to do something else with you can use the `className` property.

---
