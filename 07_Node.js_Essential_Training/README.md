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

# 4. Node Modules

## 04_01 Core Modules

- We have seen globally available functions and objects, one such function is `require()` function. We used require() in previous section to load the path module.

- We require path module, and this is a core module. We can use path module to link paths and nested directories.

- Ref: [core.js](04_Node_Modules/core.js)

## 04_02 Collect Information with readline

- readline is a module that we can use to build an app that would ask questions to a terminal user. It's an interface around readable and writeable streams that allows us to easily write code that would prompt user and collect their answers.

- Ref: [ask.js](04_Node_Modules/ask.js)

## 04_03 Use readline functions

- We created a collectAnswers function, to which we can simply send an array of questions. A callback to handle once we have all the answers. In this case we log the answers array. `collectAnswers` function takes array of questions as first argument as well as a callback to invoke once we are done. Then we create a new array of answers and we use readline rl to ask the first question, after that every other question is asked based on checking the condition if length of answers array is equal to questions array or not. When length of answers and questions array are same then we invoke the done callback and pass the answers there.

- Ref: [questions.js](04_Node_Modules/questions.js)

## 04_04 Export custom modules

- In Node.js every JS file is its own module. We have been loading modules with the require function so far. The require function is part of the common JS module pattern, but it's only the first half of the pattern that loads the module, the other half is the one that exports the module i.e. module.exports. The mechanism that we use to export the data and functionality from the module.

- Ref: [myModule.js](04_Node_Modules/myModule.js)

- Whenever we want to load other JS files that we have created in our file system and files that are not part of node global collection or not installed via npm then we have to specify the path to the files.

- NodeJS module system allows us to separate our functionality into separate files. We consume that functionality with the require function, and what gets returned by the require function is what we have exported with the module.exports function.

## 04_05 Create A Module

- We made questions.js, which had a function that will collect the answers from an array of questions and print it. This is a perfect case of reusable function and we should perhaps move it to its own module. We create a lib directory and add collectAnswers function to this lib folder. We will create this module by modifying the code to the questions.js file.

- We create a lib folder and a collectAnswers function to this lib folder. We export the collectAnswers as a module using module.exports in [questionModule.js](04_Node_Modules/lib/questionModule.js) . This will allow consumers to name the function whatever they want, we will name the file as questionModule.

- Now we create a [questionFromModule.js](04_Node_Modules/questionFromModule.js) and this will only have questions array and collectAnswers function from our questionModule.js.

## 04_06 Custom Events with the EventEmitter

- EventEmitter is a powerful tool that's shipped with NodeJS. The EventEmitter is NodeJS's implementation of the Pub-Sub design mechanism and it gives us a mechanism for emitting custom events, and wiring up listeners and handlers for those events.

- Ref: [events.js](04_Node_Modules/events.js)

- Events are raised in events.js and what we need to do next is handle them, and we do so using emitter's `.on()` function we can wire up a handler or function that handles custom events.

- Event emitter gives us a way to raise and handle custom events. One other important feature of event emitter is that it's asynchronous. These events are raised when they happen.

- In events.js we handle all our custom events using the on function and we raise the event based on user has entered exit or not.

## 04_07 Improve a module with EventEmitter

- In 04_05 we turned questions.js into a module that we exported using module.exports. If we look within our exercise files under the lib folder, there's a [questionModule.js](04_Node_Modules/lib/questionModule.js) and this is our module for collectAnswers function from [questions.js](04_Node_Modules/questions.js). We can improve this function by using eventEmitter. Now we try to improve the questionModule.js using EventEmitter.

- Ref: [questionModule.js](04_Node_Modules/lib/questionModule.js)

- If we want to raise an event every time user answered a question, right before we push the answer in answers array we can call emitter.emit() and we emit an answer event.

---

# 5. File System Basics

## 05_01 List directory files

- NodeJS also ships with a module that allows us to interact with file system. fs module can be used to list dir and create new files and folders, stream files, watch files, modify file permissions.

- Ref: [list.js](05_File_System_Basics/list.js)

- We use `readdirSync('<dirName>')` to read the file names of all files in a given dir. This function is executing synchronously. That means it is blocking code. JS stops everything it's doing until all the files in that directory are read, before processing any other line of the code that might be written below it.

- Another way to read files is to make it nonblocking using `readdir` which is an asynchronous function. `readdir` reads the files within a directory but it doesn't stores it into a variable. Once the files within a dir are read, they will be passed to a callback function that we supply as the second argument. First argument of the callback function is any errors that have been thrown. Second arg of this callback function are files themselves.

## 05_02 Read Files

- We can also use the fs module to read the contents of a file. We create a new file readFile.js. `readFileSync` is blocking code. We can use the `readFile` function that is async in nature.

- To read binary file such as an img with jpg format is we do not supply the encoding argument. We read the contents of a binary file into a NodeJS type that we call the buffer.

## 05_03 Write and Append Files

- File system module can also be used to create new files and write data to files.

- There are 3 arguments that go into writeFile, address with name.ext of file to write, content to write, callback function with err as only parameter.

```js
fs.writeFile("./assets/notes.md", md.trim(), (err) => {
  if (err) {
    console.log(`An error has occured: ${err.message}`);
    process.exit();
  }
  console.log("File Saved 💾✅");
});
```

- Ref: [writeFile.js](05_File_System_Basics/writeFile.js)

## 05_04 Directory Creation

- Here we create directory using fs module.

- First argument to `fs.mkdir()` is name of directory to create with path, callback handler that accepts error if it occurs. If we run the fs.mkdir second time and tell it to create the same directory again, then we get an error that says file already exists.

- Filesystem has a function that we can use to check if directory already exists, this is done using `fs.existsSync`.

- Ref: [directory.js](05_File_System_Basics/directory.js)

## 05_05 Append Files

- We can also use the fs module to append files.

- We do not need filesystem to read json documents, we can directly go to append.js and import the json data by using require simply.

- Ref: [append.js](05_File_System_Basics/append.js)

## 05_06 Rename and Remove files

- We may need to rename and remove files. The fs module has methods for that as well.

- We use rename function to move and rename files, and unlink to delete files.

## 05_07 Rename and Remove Directories

- We can use fs.rename() to rename and move directories and to remove directories we make use of fs.unlink or unlinkSync function to remove files.

---

# 6. Files and Streams

## 06_01 Readable file streams

- The stream interface provides us with technique to read and write data. We can use it to read and write data to files, to communicate with internet, to communicate with other processes.

- Ref: [readStream.js](06_Files_and_Streams/readStream.js)

- Process stdin is a readable stream, we read the data by listening to data events. The file system also comes with a method to create readable strings. We have lorem-ipsum.md in assets dir we will use that. We can create binary readStream or text readStream, for text stream we need to specify encoding format as second argument.

- Reading using stream causes our nodejs application to use less memory, because instead of reading everything all at once and loading it into a buffer, we are reading files bit by bit and chunk by chunk. This gives us a lot of control as they raise events. We could also use readStream.once with callback to put the very first stream of data that's read on console.

## 06_02 Writeable File Streams

- We saw readable file streams in 06_01, we saw writeable stream in form of `process.stdout`. For this section refere [writeStream.js](06_Files_and_Streams/writeStream.js)

- Here we define a readStream of lorum-ipsum.md file and we write its contents using a writeStream to a txt named myFile.txt. We read data from readStream and an event listener listens to data on terminal and writes it to myFile.txt.

- Since readable streams are made to work with writeable streams, there are lots of common methods among them as well. If we take the process.stdin readable stream then we can pipe with to our writeStream. This will send it to writeStream, which will write it to the file specified in writeStream.

## 06_03 Create child process with exec

- NodeJS comes with a child process module. This allows us to execute external processes in our environment. In other words, our NodeJS app can run and communicate with other apps within the env that's hosted. Spawn and execute are 2 functions that we use to create child processes.

- So far we have ran our node files from terminal. We create [exec.js](06_Files_and_Streams/exec.js) for this section. `cp.exec()` command can be used to execute any command on terminal, it has err to display the error on running the command, and stderr to view the error that is displayed on terminal if command is ran.

- Here we used the execute function to execute external system commands.

## 06_04 Create Child Processes with spawm

- Here we go over spawn function. `exec()` is designed to handle synchronous processes. These are processes that run and close and split some data as an one time event. `exec()` isn't made to handle async processes. This could mean long running processes or processes that are waiting for input or anything that remains open.

- Ref: [spawn.js](06_Files_and_Streams/spawn.js)
