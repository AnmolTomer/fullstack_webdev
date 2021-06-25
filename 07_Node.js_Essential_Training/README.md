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
