# 09. Events

## 09_01 Events in programming

- When we interact with computer software, we are literally firing events that are then detected and captured and handled by the software. Click on your mouse, and the click event is detected. Press a button on keyboard and an event identifying what key was pressed and for how long it was pressed is captured. Each of these events can have their own custom functions attached to them specifying exactly what happens when the event is captured.

- This process is called event handling. Event handling is key for JavaScript interactivity.

---

## 09_02 Typical DOM Events

- Everything that happens in browser is an event. Opening the browser is an event, visiting a URL is an event. Moving your mouse or clicking it or touching the screen is an event, so is clicking, reloading, hitting a key on keyboard, anything and everything that happens in the browser is an event.

- In JS, we can listen for those events then capture them when they happen and do stuff when they are triggered. Refer MDN Events reference.

- Everything that happens in browser is an event, and we can monitor any of those events by adding an event listener and listening for them. Event listeners can be appended to any elements inside the window and inside the DOM and we can trigger whatever function we want, either using an anonymous function inside the event listener or by using a callback.

- Ref: [09_02](09_02/script.js)

- MDN Reference Documentation: https://developer.mozilla.org/en-US/docs/Web/Events

---

## 09_03 Event Listeners

- An event listener is a method added to a target, usually to an element that listens for a specific event, and then calls back a function when that event is detected.

```js
const button = document.querySelector("button");
// In this example we have an EventListener appended to a button. When the button is clicked we log an event in the console.
button.addEventListener("click", (e) => {
  // listening for click event, with a callback that captures the event e and console logs it.
  console.log(`Event fired: ${e}`);
});
```

- Structure of an EventListener: `target.addEventListener("eventToListenTo", callback [,options]);`

- We start by grabbing an event target, this can be a window object, or the document object or any element within the DOM, then we `addEventListener` method, and this method takes 2 arguments primarily, first is the event we want to listen to in quotation marks, this can be any of the events listed in the MDN events reference and second argument is a callback function which should run when that event is triggered. This can be either an inline anonymous function or it can be call to an external function.

- There is also a third optional argument for an options object that gives you more control, this is an advanced feature, beyond the scope of this course. Developers often set this as false to make sure default behaviour takes places but is not strictly necessary. In most cases `eventToListenTo` and `callback` is all that you need.

- Ref: [09_03](09_03/script.js)

---

## 09_04 Practice: Experiment with Event Listeners

- Use an event listener and CSS to draw a highlight around the entire grid when you hover over it with mouse.

- Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.

- Add an event listener to each grid cell to change its background color when it is clicked.

---

## 09_05 Advanced Event listeners and "this"

- Now we also change the value in the button when we click on Open Lid it should change to switch lid and vice versa.
