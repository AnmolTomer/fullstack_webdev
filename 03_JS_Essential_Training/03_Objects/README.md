# 03. Objects

## 03_01 Objects in JS: Explanation

- JS is a prototype based Object Oriented Programming (OOP) language. That means at its core, when we work with JS we are working with objects, and these objects are based on prototypes.

- An object in JS is pretty much same as object in real life. E.g. backpack is an object which has many identifiable properties such as color, size, straps etc. Object properties define the specifics of an object. Each object has different set of properties which sets them apart from other objects of the same kind.

- Prototype based Object Oriented Programming (OOP) language means that each object is a unique instance of an object prototype. The properties describe the prototype of an object. Properties can be used to verify the objects.

- Objects can have features built into them, which allow us to change their properties. In JS these `property changing features` inside an object are called `methods`. Objects can contain other objects.

- Remember that objects can be described by their unique properties, based on an object prototype whose individual properties can be modified using internal methods.

---

## 03_02 JavaScript Objects: Code Version

- JS Objects are collection of data, and functionality stored as properties and methods that describe the object and what it can do. To define an object, to create it, we first need a variable to hold the object.

- We use const to give the object a name and `{}` brackets are used to define data as an object. Next, we populate our object with data. Each value is a `name:"Value"` pair separated by a colon `:`. Value can be many different datatypes.

- An object can have as many properties as you like. You can separate them using a comma. And the convention is to add each new property on its own line so it's easy to read.

- An objects can also have methods, and these are used to change the properties of the object. These methods are also named value pairs. Only in a method the value is a function or a call to a function to be executed when method is called. Calling the method from outside the object triggers whatever function is contained within that method. E.g. of an object can be as follows:

```js
const backpack = {
  name: "Backpack",
  volume: 30,
  color: "grey",
  pockets: 15,
  strapLength: {
    left: 25,
    right: 25,
  },
  lidOpen: false,

  // toggleLid is the name and function is the value, that takes the value lidStatus as input and sets the lidOpen = lidStatus provided
  toggleLid: function (lidStatus) {
    this.lidOpen = lidStatus; // this keyword simply refers to current object's properties
  },
  newStrapLength: function(lenLeft, lenRight){
      this.strapLength.left: lenLeft;
      this.strapLength.right: lenRight;
  }
};
```

---

## 03_03 Object Containers

- We use a variable to store the object properties and give it a name. `const` keyword says it is a constant and name is what we use to get the data within object.

- Objects are typically constants. It means that while we can change the properties inside an object, we can't remove or replace the object from the container. If we try to do so by calling the constant name and using the equal symbol to set the contents to something else, the browser will tell us we can't do that, as it's a constant.

- Once we have created an object we might want to change its properties but we never want to change the object itself to something entirely different. This prevents us from destroying our objects while working with them.

---

## {03_04, 03_05, 03_06}: {Object Properties, Accessing Objects, Accessing Object Properties}

- Object properties describe the different aspect/data contained within an object. Object properties are defined using a `:` (colon) separated `name:value` pair, where name can be any string and is placed on left, value can be string, int, bool, array or even another object etc. Property names can only contain letters, digits, dollar signs and underscores. If you add `""`, `-` or other symbols, then objects might not work properly and use `camelCase` to avoid name issues.

- If you want to access an object or anything inside a variable, you call the object by its name and JS will pass that object to you. If you want to print an object to console, JS has a series of console method for that, most popular one being `console.log()`.

- Accessing an entire object can be done by calling object by its name, but in most of the cases we need access to an object's properties or methods that it contains. We can access the object properties and methods by 2 methods:

1. `Dot Notation`: We want to output the value one single property we can do so by doing `console.log("The pocketNum value: ",backpack.pocketNum)` Dot notation is the preferred way of accessing the object properties as it is easy to read and understand.

2. `Bracket Notation`: In some cases, we need more control, either because we want to use a variable as the property name, or because the property name is non-standard for some reason. For this, we have bracket notation and we can use it in following manner: `console.log("The pocketNum value: ", backpack["pocketNum"]`

- Bracket notation allows us to pass in a particular value. You have a function, it gives a value and you want to pass on that value. Also using dot notation you cannot access a property that starts with a number, hyphen in such circumstances bracket notation comes to use. Property names with non standard values where data is transformed into JS object via a software in those cases we use bracket notation.

- In most cases use dot notation as it's simple, if you want to pass in a variable or you need to access a property name that is somehow breaking naming convention use bracket notation.

---

## 03_07 Project: Build a new Object

- Ref: [03_07](./03_07/script.js)

---

## 03_08, 03_09 Object Methods and Build a method

- Objects can contain their own functions. These functions typically perform actions on the properties of the object. When a function is inside an object it is called a method. Each method is added to the object as a property. We can write methods in following 2 ways in js object:

```js
// Method 1

const backpack = {
  property1: "Val1",
  property2: "Val2",
  property3: "Val3",
  property4: "Val4",
  property5: "Val5",
  // Method 1 - Conventionally preferred method due to readability benefits
  method1: function (inputParam) {
    // method logic
  },
  // Method 2
  method2(inputPara) {
    // method logic
  },
};
```

- We call the method by doing `objectName.methodName(inputParam)`, you might get `undefined` on calling a method even if method works as intended that just means that method is not returning anything.

---

## 03_10 Classes: Object Blueprints

- Now we see how to create object blueprints aka classes. Classes are relatively a new introduction to JS but they've been around in C++, Java for a long time.

- Say you have a series of objects, and you want to make quick work of setting them up. Manually declaring each object as we've done for backpack in previous examples will produce a lot of code and a lot of repetition since each property and method would have to be defined for each new object. A better solution is to build some sort of template. For that we have `classes`.

- Classes work as template/blueprint for an object type and anytime we create a new object based on a class, that object automatically gets all the properties and the methods from that class. That means we can change the properties or the methods of the class and those changes apply to every single instance of that class we have created.

- Ref: [03_10/Backpack.js](03_10/Backpack.js) for details on creation of class with constructor and exporting it in JS.

- To create new object all we have to do is create a new const objName and pass in the values in the way constructor expects. This prevents repetitive work while creating multiple objects of same class.

- We can only use a class after it has been declared. Remember, JS reads from the top down and we have to make sure the class is declared before you start using it. A good way of avoiding this problem altogether is to place your classes in a separate file and importing them because all imports need to happen at the top of the main file where it's being used.

---

## 03_11 Object Constructors

- While classes are the preferred tool for creating object templates, there is another shorter and less advanced way of doing the same thing and this relies on a basic function. This is called `object constructor function.` Ref: [03_11/script.js](03_11/script.js)

- Just like classes object constructor uses a capitalized name to let us know that this is a constructor function that produces new objects. Object constructor function captures the properties of the new objects using parameters and then defines and assigns values for each property and method using `this` keyword and `dot notation`.

- The `difference between the class and object constructor` here is that `methods live inside the main constructor` function just like the properties for an object constructor.

- To create a new object and store it in a var we use the keyword `new` and name of the object constructor which takes in the inputParams as required. End result is same as classes, `but classes have quite a few benefits` such as we can `extend classes`. We can add new features to the classes that are not available inside the classes, and the `class is now the preferred method of creating object` based on a blueprint.

- Still, `in legacy code one might come across object constructors` because prior to introduction of classes that used to be the only way we could do this and that's why we are covering it here, so that we are aware of something like object constructors exists as well. `Rule of thumb`, use a class unless you are required to use object constructor by coding standard, as classes gives you more capabilities than the object function does.

---

## 03_12 Practice: Build a new object with a constructor

- Create new classes based on one or more of the objects.
- Create separate files for each class and import them as modules so you have a clear understanding of separation.
- Start with a fully created object and then migrate properties and methods one by one. Once class is created, test it by recreating an original object using that class.
- Ref: [03_12](03_12/)

---

## 03_13 Global Objects

- In addition to objects we build ourselves directly or through a class or a constructor, the browser has a long list of default objects which we can use for a variety of different purposes. These global objects work like the objects we have seen so far, except we don't need to define them and they're just available through the browser.

- Add date to the Backpack class and pass on to the object `everydayPack`, in script.js. Ref: [Backpack.js](03_13/Backpack.js)

- We define a method that takes in acquired date of the backpack and compares it with the current date and returns the number of days since the backpack was acquired.

- [Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)

---

## 03_14 Challenge: Create a new object type

- Create a new object type named book
- Use Class, object constructor function or individual objects
- Add properties and methods
- Add atleast 5 book objects.
- Ref: [03_14](./03_14/Book.js)

---
