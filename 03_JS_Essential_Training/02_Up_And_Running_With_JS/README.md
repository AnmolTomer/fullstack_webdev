# 02. Up and Running with JS

## 02.01 JavaScript in HTML Document

- There are several different approaches when it comes to storing and serving JS in an HTML document. Mostly either it is inline or an external file imported into the HTML.

- In [02_01/index.html](02_01/index.html) we write html and then select the content between `<code>` tags and using .innerHTML add `< >` to them before displaying on browser and using for loop we also print the content of `<code>` tags before a loop applies `< >` to it.

![](https://i.imgur.com/mcrMN26.png)

- Anything inside `<script>` gets rendered as javascript code by the browser. Script tag is placed at the very end of the document most of the time, that's because when we give the browser a HTML document, browser starts to read it from the top and renders it as it reads it and everytime browser encounters JS it stops as JS may make changes to the document. As a result, we renders the HTML/CSS first and then we import our JS code/logic.

---

## 02.02 Writing JavaScript in an external file

- Writing JS inline is something that we don't see often and only makes sense when we only have a little bit of JS in our webpage and only applies to the current document and doesn't appears anywhere else.

- In most cases when we write JS, we will write a lot of JS and we would want to apply it to multiple pages. In those circumstances best practice is to take the script, place it in its own file or several different files and reference the file whenever we want to use it. There's already a model for this in how we handle CSS.

- Similar to inline CSS, and we call the external CSS, we do the same thing here with JS. Ref. [02_02/index.html](02_02/index.html) and [02_02/script.js](02_02/script.js)

- `script.js` contains all the JS code and in index.html we have used script tag with src attribute to import the external js file.

- When you open an HTML document in browser, the browser will read that document line by line from top down and fetches and executes any elements it encounters as necessary. In a typical header for an HTML document we may have references to external style sheets and JS files as both are needed to render the page.

---

## 02.03 Modern Javascript Loading: Async and Defer

- JS being imported early before HTML is rendered can cause issues, that's why we move the script tag at the end of the document, so browser renders it after it has rendered everything else on the page, this is not a solution though, this is a hack and it introduces a whole set of other problems such as what if you want a script to run at the beginning or should happen while the document is being loaded.

- It is really imprecise way and for this reason we have tools in JS to control how and when JS is loaded. These tools are `async` and `defer` keywords. First we have render blocking which goes like:

![](https://i.imgur.com/GXIA4PG.png)

- `async`: This keyword changes the render blocking behavior significantly. Better than render blocking, downloads in parallel and then renders, blocking is minimized.

![](https://i.imgur.com/myXi9KM.png)

- `defer`: Browser downloads JavaScript in parallel while HTML renders, then defers execution of JavaScript until HTML rendering is complete.

![](https://i.imgur.com/BmMPYVt.png)

- Async/defer should be the standard for loading the JS. Only use render blocking when you have a specific reason. Loading JS in the fotter is now an `anti-pattern.`

---

## 02.04 JavaScript Modules

- As you would see in [02_02/script.js](02_02/script.js) these js files tend to get really large and kind of hard to work with. There are lots of pieces which rely on other functions as such and to figure out how it is working requires a lot of scrolling up and down. To solve this we have something called modules. JS modules allows us to break pieces of code out of a long js file and place them in a separate file and then import them back into the original file.

- Ref: [02_04](02_04)

- If you work with React, Vue then JS Modules usage is standard practice. Infact the module thinking came from these popular JS frameworks. Anytime you go into a JS Framework you'll find yourself using import and export all the time. Now you know what it is, and you can do it in Vanilla JS too.

-

## Wrap up:

1. When does the browser execute JavaScript?

   > By default: When the script is encountered. If the script is set to "async", when the script is fully loaded. If the script is set to "defer", when the entire HTML page is rendered.

2. What is the correct markup for adding an external JavaScript file to an HTML document?

   > `<script src="javascript.js" async></script>` While `<script src="javascript.js"></script>` is technically correct, it is recommended to always async or defer your script unless you have a specific reason for the script to cause render blocking.

3. What happens when you `defer` JavaScript?

   > The browser loads the JavaScript asynchronously when it is encountered, then waits until all HTML is rendered before executing the script.

4. JavaScript modules are heavily used in frameworks like React and Vue. What is the advantage of using modules?
   > Modules enable modularization of code where individual functions, components, data objects, and other parts can be separated into individual files.
