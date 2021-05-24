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

- References:

1. [Document.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)
2. [Document.querySelectorAll()](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll)

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

![](https://i.imgur.com/OI03n6y.png)

- References:

1. [Document.getElementsByClassName()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName)
2. [Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

---

## 05_06 Attributes

- JS can be used to modify the attributes of any element. Attributes are stored in the attributes property and can be accessed directly by calling it. Attributes property returns a different type of data compared to className and classList properties. We get a `NamedNodeMap` and it is not an array, so no array methods can be used on it. Attribute is a complex piece of data, it has a key and a value, and we need to be able to manipulate just the key or just the value or both at any time and array won't do that.

![](https://i.imgur.com/sWyw2Pf.png)

- Now to work with this data for attributes we have dediated methods to do all the things one would want to do on attributes. First to see if the element has an attribute we are looking for and for this we use `hasAttribute("attributeToFind")` and this returns true or flase based on element has the attribute we passed or not. After that we check what the attribute contains using `getAttribute("attributeName")`. We can set an attribute using `setAttribute("attributeName", "valueToPutIn")`

```js
// Checks if the img element has the attribute title and returns true or false
document.querySelector("img").hasAttribute("title");

// getAttribute("attrName") what all that attribute contains
document.querySelector("img").getAttribute("src");

// setAttribute(): Add This shouldn't be here to title attribute in img
document.querySelector("img").setAttribute("title", "This shouldn't be here!");

// removeAttribute(): Remove the attribute by name
document.querySelector("img").removeAttribute("title");
```

- Everything inside a tag is considered an element. Class will also show up as an attribute and we can use the attribute methods to manipulate classes if we wanted to, but we have dedicated methods for class manipulations and we wento over those in `05_05` above.

---

## 05_07 Inline Style

- If an element has inline styles, i.e. there are CSS declarations in element itself, that inline CSS is stored in the style property of the elements and we can access it as a regular property using `.style`. This will give us a CSS style declaration which is a list of all the available, possible styles that could be applied and then a specification of which ones are actually applied. You can set the properties individually or use `.cssText` as shown below to set all the properties in one go for a particular element, id or class.

```js
document.querySelector(".site-title").style;

// Changing individual style properties using .style
document.querySelector(".site-title").style.color = "rebeccapurple";

// put all the style declarations in one go using cssText("prop1: val1; prop2: val2;") - NOT RECOMMENDED
document.querySelector(".site-title").style.cssText =
  "color: rebeccapurple; background-color:pink;";
```

- If you want to know what all CSS properties can be applied to an element, go to console, call the element using querySelector and do a `.style` on it.

---

## 05_08 Practice: Modify Classes and attributes and styles

- Being able to quickly access, modify and remove classes, attributes and inline styles from any element in the DOM is a bit like having a bag of tools on hand which will solve pretty much any problem. Need to indicate state change of an element ? Add or remove a class. Need to pass data from one element to another ? Add a data attribute. Need to change appearence of a specific element for some reason ? Add an inline style.

- Actively modify the elements by adding or removing classes, attributes and inline styles.

- Find an element and add two different classes to it. Remove only one of those 2 classes and replace the other class.
- Add a new attribute to an element, request the value of the attribute, change the value of the attribute.
- Add inline CSS to an element by specifying the style property and setting its value.
- Query the style property of an element in the console to get a list of all the style properties available.

- Ref: [05_08](05_08/script.js)

---

## 05_09 Add DOM Elements

- If you look at [05_09/script.js](05_09/script.js) at line 21 and 53 you will see that we are adding HTML in template literal to the existing document by targetting an existing element using querySelector and replacing its content with template literal using `innerHTML` property. This is an effective way of injecting new HTML into a document but it is also rather `crude and destructive` as it requires an existing element to be in the HTML document and it wipes up whatever code was inside the element.

- Say you have some text in HTML's main element already and you are adding some HTML via template literal by the help of `innerHTML` property on main element in that case whatever was already inside from the HTML doc gets disappeared. What we want is to have whatever is added via template literal appear after whatever is already there in HTML document. For this to work we need to add a new DOM element and place it exactly where we want it to appear in addition to whatever is already there in the document.

- Reference: [Document.createElement()](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)

- Instead of destructive process we want to use a process that creates new content. DOM Manipulation like this is essential part of JS and there is a huge toolkit available for just this purpose.

- We will create a new element for backpack content, it'll be an article, populate that element with classes, ids and content and finally somehow append that new element to the existing document. It all starts with `createElement()` method.

- `append()` method in [05_09](05_09/script.js) can be used to add one or several comma-separated elements and they all go at the end of parent node in a constructive manner that is without removing the content that was already present.

- To add an element as first child you can do `ParentNodeName.prepend()` to place the element at the top instead of bottom.

- If you want to move an element from one location to another inside the DOM or you want browser to return the appended object to be further worked with you can also use the `appendChild()` method, this will return the element to you.

- There are other methods like `Node.replaceChild()` to replace a child within the given parent node. `insertBefore()` to insert a element before a parent element as a child of a specified parent node. `insertAdjacentElement()` is extremely powerful as we can specify where we want the new element to appear, inside or outside the target element.

---

## Challenge: 05_10 Add a new Element

1. Create a element for a nav menu in JS.

2. Add unordered list with 5 items.

3. Add new navigation menu to DOM directly after the header.

4. Write basic CSS for a horizontal menu, use flex or grid to create the horizontal menu layout.

- Ref: [05_11](05_11/script.js)

---

## Wrap Up

1. What method(s) would you use to check if an element has a specific ID and if so replace it with a different ID?

   > the element.hasAttribute() and element.setAttribute() methods.

2. What is the difference in the return from the element.className and element.classList properties?

   > element.className returns a string containing all classes appended to the element. element.classList returns a DOMTokenList with each class appended to the element.

3. What does the HTML markup of this image element look like after the following script has executed?

```js
const newImage = document.createElement("img");
newImage.classList.add("feat-img");
newImage.setAttribute("src", "logo.svg");
newImage.setAttribute("alt", "The company logo");
newImage.style.cssText = "display: block";
```

> `<img class="feat-img" src="logo.svg" alt="The company logo" style="display: block;">`

4. What is the value of `const target` after this code has executed? `const target = document.querySelectorAll("a");`

   > A node list containing each element object matching the query.

5. What is the value of `const target` after this code has executed (assuming there are elements in the DOM with the class "note")? `const target = document.getElementsByClassName(".note");`

   > An empty array-like HTMLCollection object. The getElementsByClassName() method receives a string of classnames to be found as its parameter Adding the . in front of the classname invalidates the query and no match is produced.

6. The querySelector() and querySelectorAll() methods use what kind of selectors as their parameter?

   > A CSS selector string.

7. What happens if you run this code:

```js
const target = document.querySelector(".first-paragraph");
target.style.font-family = "sans-serif";
```

> "Uncaught SyntaxError: Invalid left-hand side in assignment" JavaScript does not allow for hyphens in property names. When targeting CSS properties, use camelCase, so the "font-family" property becomes "fontFamily".

8. What does the `element.classList.toggle()` method do?

   > Adds the specified class if it is not appended to the element, removes the specified class if it is appended to the element.

9. Where in the HTML document does the new element appear when you use the `document.createElement()` method?

   > Nowhere: The element is created, but has not been added to the DOM.

10. What is the "DOM"?

> DOM is short for "Document Object Model", the document object the browser creates when it renders an HTML document.
