# 0. Introduction

## 00_01 Learn the Node.js Fundamentals - Welcome

- If you have worked with JS before, you might think of it as a front-end technology, a way to add interactivity to the web applications, to add features like button clicks and drop downs etc. But that's not all what JS can do. With `Node.js` one can use their JS skills for more. Everything from building command line tools to creating servers to interacting with the file system.

- Since Node.js was released in 2009, companies like PayPal, Netflix and Microsoft has used it as a way to build scalable, event-driven applications.

- These days Node.js is everywhere, and this is one of the best times to become a full stack js developer with Node.js.

## 00_02 Pre-requisites

- JavaScript

- Command Line

---

# 1. What is Node.js

## 01_01 Node.js History

- Node.js can feel like a brand new technology but it has been around for more than a decade now. It's one of the most powerful JS tools available. Created by Ryan Dahl in 2009 as a JS runtime based on Chrome's V8 Engine. In 2011, NPM v1 was released, to allow for sharing of open source node libraries. This marked a huge shift in the way code was written, shared and maintained, and it led to Node.js becoming a huge player in the ecosystem.

- After some infighting in the community about implementation and the project management, the Node.js foundation was formed in 2015. Foundation is made up of several large companies including IBM, Microsoft, PayPal and Groupon. It's referred to as a collaborative project at The Linux Foundation. One can find Node.js foundation on Github as well as Node.js project itself as it's an open source project.

## 01_02 How Node.js works ?

- Say there are 2 restaurants one is `Apache Steaks and Chops`, Apache being the keyword.

- In this restaurant every new guest represents a new user. And making an order is like making a request. If we make a new request, then restaurant manager has to hire a new waiter (thread) to take care of our order. We will have our own thread, and this thread/waiter will handle all of our requests. This is similar to how Apache works. Every request is single threaded. After request is made, the thread will take the request to the kitchen and give it to the chef. And now the thread just waits for chef to complete the request. While chef serves the request, waiter/thread won't do anything and will stay idle. You might like to order a Pinot Noir but you can't order anything until the thread finishes the task for which it is waiting in the kitchen.

- Chef is blocking you from ordering that Pinot Noir. In this analogy the chef represents the file system or a data store. In Apache, the single thread waits for the file system to finish reading files before it can do anything else. We refer to this as blocking. Request is finished, so now the manager fires the waiter/thread as they are not needed to service me anymore.

- Imagine, this restaurant gets busy during peak hours or on weekends, every guest has their own waiter which is pretty nice, and this leads to really high quality of service even when there are lots of requests being made. But waiters for the most part are hanging around the kitchen waiting for the chef to give them food while they are idle. If this restuarant gets popular and expands it would need a lot of space, as accomodating more guests means hiring more waiters/threads.

- Let's look at this other place `Chez Node`.

- At this cafe, there is only one waiter, because `NodeJS is single threaded`. Here we order some muffins, waiter places the order for the food and then moves on to take an order from another new table. This single thread services all of the restaurant guests. When muffins are ready, the chef rings a bell and our waiter goes and gets the order and delivers them to the table that made the request. Waiter then proceeds to take another order from a new table, when their food is ready, waiter brings their food to them asap. This waiter behaves asynchronously.

- Everything this waiter needs to do represents a new event. A new table, placing orders, delivering orders, these are all events and these events will get handled in the order they are raised. FIFO order. Our waiter does not wait, isn't idle, there is no blocking. Our single waiter is busy, busy and always busy, but he/she is killing it because they can multitask.

- This is what we mean when we say non blocking event driven IO. We have a single thread responding to the events in the order they are raised. This thread behaves asynchronously. If Chez Node becomes popular we can franchise it. Chez Node can be expanded by duplicating or forking the restaurant into a neighboring space and this is precisely how we host NodeJS Applications in the cloud.

- NodeJS is single threaded, all of the users are sharing the same thread. Events are raised and recorded in the event queue, and are serviced/handled in the order they were raised. NodeJS is asynchronous which means that it can do more than one thing at a time. This ability to be non blocking is what makes NodeJS so fast and one of the many reasons why so many developers are building their web apps with NodeJS.

---

# 2. Setup Your Environment

## 02_01 Using VSCode

- If you already have a IDE that you prefer for JS, feel free to use that, if not, we would recommend VSCode which is free and open source. More about it [here](https://code.visualstudio.com/)

## 02_02 Install NodeJS

- NodeJS can be downloaded from [here](https://nodejs.org/en/). Install like normal application with a setup, check node version by using the command `node --version`.

---

# 3. Node Globals

## 03_01 The global object

- We create `firstFile.js`, and within our first file we are going to print hello world to the console. To run this file we will open the terminal and to run the file we will have to type `node firstFile.js`, and you will see hello world on terminal.

- Sure we can create js files and see their output using node, but what's actually going on here is, console object that we use to log data to console is part of the global object. Everything in global object is available to us globally, this means we can use any of the objects or values that are available to us on the global object, within our JS files, so the global object contains all the objects, values and methods that we can use in a Node.js file without importing specific libraries.

- We can see global objects in node js docs [here](https://nodejs.org/api/globals.html). These are all of the values, objects and functions available for us to use globally within any JS file.

## 03_02 The require function

- Another thing that is available to us globally is the name of the current file, as well as the full path to the directory that we are currently using. `console.log(__dirname)` will give us directory name and `console.log(__filename)` gives us file name.

- Ref: [global.js](global.js)

- Node.js also comes with some tools that allows us to manipulate and edit filepaths. We have to load these tools as they come in a separate module. But it's okay as another thing that's also available globally to us is `CommonJS` module pattern. This pattern is how we import other code into our files. There's a function called require(), and then there's an object called exports.

- We import other external modules using `require()` function. Modules are just other js files containing re-usable code. We can either load modules that were shipped with our installation of nodejs or we can import modules we install in our project through npm or the ones we install globally.

- `path` module is shipped with Node.js, and it gives us tools that we can use to work with path strings.

- Every nodejs file that we create is referred to as a module. It contains its own code. When we want to load other modules, we must use the require function that is available to us on the global object.

## 03_03 Argument variables with process.argv

- Another important object that is available to us globally is the process object. So within our files, we create a new file [`globalProcess.js`](03_Node_Globals/globalProcess.js).

- Process object can be accessed globally and it contains information about the current process as well as tools to allow us to interact with that process. With process object we can get environment information, read env variables, communicate with terminal or parent processes, through standard I/O. We can also use it to exit the current process.

- Another thing that we can do is to collect information from the terminal, when we load the application. There's a variable called `process.argv`, these are the argument variables that are sent to the process when we run it. When we console log process.argv we see that it is an array and it contains everything we typed to run the process. First command was node, hence it's full path at index 0, second arg is path to the current module that we are trying to run, that's at index 1.

- Anything we type when we run a node file gets added to this `process.argv` array. Since `process.argv` is an array, we can work with it in similar manner we work with arrays. We could use array destructuring.

- Ref: [globalProcess.js](03_Node_Globals/globalProcess.js)

## 03_04 Standard Output & 03_05 Standard Input

- We create a CLI based question answer app, we start with [question.js](./03_Node_Globals/question.js). Another feature of process object is standard input and standard output. These two objects offer us a way to communicate with this process while it is running. For now we just use these objects to read and write data from the terminal.

- Ref: [question.js](03_Node_Globals/question.js)

## 03_06 Creating delay with setTimeout & 03_07 setInterval & 03_08 Report progress with setInterval

- We started working with Node.js asynchronously by using event listeners. Another way we can work with Nodejs asynchronously is through the timing functions. Timing functions such as setTimeout, clearTimeout, setInterval and clearInterval work the same way they do in browser, and are available to us globally.

- setTimeout takes in the function to execute when timer is finished, second argument is time to wait for this delay

- setInterval takes a function to run and duration in which to repeat it, in our case we stop the setInterval when the function to print done is executed.

- Ref: [timers.js](03_Node_Globals/timers.js)

---
