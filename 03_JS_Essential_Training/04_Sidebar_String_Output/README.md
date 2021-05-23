# 04. Sidebar: Displaying from Console to Browser

## 04_01 : Mix text and variables with template literals

- Here we look at how to output content from console/js documetn to the browser/HTML document.

- We are about to bridge the gap from printing output on console to displaying it on browser.

- We need a way to connect what happens in JS console world and what happens in the human world i.e. in browser and HTML functions as that bridge. A typical use of JS is to either `generate HTML`, `modify existing HTML`, or `remove HTML from a live document` in the browser.

- It's useful to think of JS as an interactive layer on top of the content HTML, and its presentation, the CSS. And we can use JS to manipulate the HTML and CSS to get the browser to do what we want.

- Most basic way of doing this is to use JS to inject new HTML content into the document. To do that, first we need to access an element within the document. We can then manipulate with JS and now all that work we have been doing so far with objects comes into play. The entire document is an object in the browser.

- When a browser renders a document it creates a document object model (DOM) of that document, and we can then access that document using javascript.

- We can manipulate the document using something called a `template literal.` We will try to edit the properties such that in the html instead of just having property name, we also get property values. Property values are sitting in another JS object. We will replace the content in the browser, with the content generated with JS.

- In console `document.body.innerHTML` will return us all the html that is present inside body and we can also change it by doing `document.body.innerHTML = "some text"` this will wipe off whatever is on the webpage and replace it with `some text` on webpage. We want to create a template where we fill the list items with data from our JS object.

- We remove all the HTML in between `<main>` tag. We go to [script.js](04_01/script.js) and here we will define how to define a template literal.

---

## 04_02 Traditional String Output

- Template Literals are great for outputting HTML and other content mixed with JS. However, some of the code and tutorials do not use template literals and you would find standard strings being used. This is the classic way of outputting string content using plain old strings. It's a bit more convoluted but it is and will be used. So it's worth knowing about.

- We will use string concatenation in classic way to add some value and then send it.

```js
const content = "<h1>" + object.propertyName + "</h1>";

document.body.innerHTML = content;
```

- The traditional string concatenation is not used but it's better to know something like this exists, in your own projects try to use template literals whenever possible.
