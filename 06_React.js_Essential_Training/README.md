# 0. Introduction

- React is one of the most popular libraries used to build user interfaces, and companies like Twitter, Netflix, AirBNB and PyaPal use it to power their front-end experiences.

- React can help you build projects of all kinds and one of the most sought after front end library.

- This course goes over React's core concepts, we will go over concepts like testing, data fetching and routing.

- React.js is JS at its core, so a little bit of js would be really helpful before getting started. We will use ES6 syntax throughout. We will also install some of the packages using npm. That's all you need to know to get started with learning React.

---

# 1. What is React?

## 01_01 What is React?

- React is a JS library, that we can use to create user interfaces. It was created at facebook and opensourced in March 2013. Since then react has expanded beyond the web with React Native, a tool that allows you to create native mobile applications using React. One of the best resources that you can use to learn React is official documentation of react available at [reactjs.org](https://reactjs.org/docs/getting-started.html).

- React is an increasingly popular library with 10k+ stars on GitHub and we have already gone over tech giants that use React.

- React has component architecture that makes it faster and easier to build amazing products for web and native platforms.

## 01_02 Setting up Chrome Tools for React

- We install react developer tools, chrome extension from chrome web store. You can open developer tools by using `Ctrl+Shift+J`. When you are on a website which uses react, the developer tools extension lights up to either blue or red, depending on the development or production build of react that's running on that website.

- As our apps become more robust, the components tab under developer tools will be really helpful to understand the structure of the project and to debug issues.

- React Developer Tools are also available for Firefox. Present in addons.mozilla.org.

---

# 2. Intro to React Elements

## 02_01 Installing Create React App

- One of the most common tools for creating a new react application is [Create React App](https://create-react-app.dev/).

- Create React App gives us a project structure, the ability to use the latest JS features and tools to optimize our app for production. To get started, go to your terminal, check if node is installed by running `node -v` in your command line or terminal and if your node version is above v8 then we can use Create React App.

- Now we do `npx create-react-app first_react_app` . Here npx is the package runner, create react app is the tool to build our project and first_react_app is the name of the project.

- Once the packages are installed, we can do `cd first_react_app` and then `npm start` will start the development server on port 3000.

## 02_02 Generating a Project

- `package.json` file has all the packages and different dependencies that are needed. React scripts has babel, webpack and other tooling setup is done in `react-scripts`.

- `src 📂` folder has all the files that we will be writing for our application. Public folder contains assets such as logos, index.html file and all other stuff that will be used when we build our application. For now, just know that create-react-app is the toolkit that we can use to start our projects quickly.

## 02_03 Creating React Elements

- With our environment set up, now we will write some code. We will use the index.js file to take the elements we create and add them to our DOM/page. We have `ReactDOM.render` in index.js, first argument that it takes is the element we want to create, then name of tag followed by properties we want in the element followed by message we want to add.

- First argument that we sent to `ReactDOM.render` is what we want to create, the second argument is where we want to put the element we have defined. In our `public/index.html` we have a div by the name of root, and this is where we put in the element we created. We have used React Library to create an element. We are using JS to create HTML elements to create our DOM on the page.

## 02_04 Refactoring Elements with JSX

- We rendered an H1 to the DOM using React. Say we wanted to render an unordered list, and list has many different items, that would be a lot of createElement calls and too repetitive. Consider you are building an entire page with divs and headings, lists and things which needs a lot of nesting. This is where JSX comes in.

- JSX aka JavaScript as XML is a language extension that allows you to write tags directly in JavaScript.

```js
// without JSX

ReactDom.render(
  React.createElement(
    "ul",
    null,
    React.createElement("li", null, "Monday"),
    React.createElement("li", null, "Tuesday"),
    React.createElement("li", null, "Wednesday")
  ),
  document.getElementById("root")
);

// with JSX
ReactDom.render(
  <ul>
    <li>Monday</li>
    <li>Tuesday</li>
    <li>Wednesday</li>
  </ul>,
  document.getElementById("root")
);
```

- The above works as create-react-app has babel that's working here. Check out how babel works [here](https://babeljs.io/)

- If you are writing JSX or some sort of new JS Syntax that isn't supported, in that case **Babel** does all the heavyweight lifting for you, by compiling your code behind the scenes.

---

# 03. React Components

## 03_01 Creating a react components

- Now that we do understand how to create elements, we will move to creating our first component. Component is like a building block. It is a little piece of UI that we are going to use to describe one part of our application. First, we will make use of a component that is already in our project i.e. `app.js`. App component is there in `App.js` file. We create a component by creating a function, and this function is the one that returns a JSX, that we are able to add to the DOM.

- We will edit the App.js file and add some h1 and h2 elements in there. We create header, main and footer and we create components which will occupy all three of these slots and we define them in App.js. A component is just a function that is returned and showed on the webpage.

- Think of a component as a function that we write and then include it in the main function which is called. Here we have 3 components header, main and footer that are called inside the 4th component app that we import into index.js to be shown on the page using `ReactDOM.render()`.

- Ref: [index.js](./first_react_app/src/index.js)

## 03_02 Adding Component Properties

- Here we see how to use components to display dynamic data. Every react object has access to an object called props. We go to Header component in App.js, we pass in the props into the function Header, the props object will hold all the different properties for our component.

- To add values to the props component, we will have to add them to the place where the component is being rendered. We do so inside the App() in this case. This way we can build a template with dynamic data. Props is an object that can include all the data for every single component you want and to be displayed dynamically on the webpage. When we render the components, we pass the properties into the component, and then in the component itself, we are going to display them using dot notation.

## 03_03 Working With Lists

- We passed properties to the components in `03_02`, how to display more data in component tree? To demonstrate this we create more data in `App.js`. We create a list, and we map over it first, before adding it to a component.

## 03_04 Adding keys to list items

- We have rendered a list of menu items dynamically on the web page in 03_03, but we have a Warning that says `Each child in a list should have a unique "key" prop.`

- A key is like an ID that helps to keep everything in sync. It is possible that our array items might get out of sync when rendering the component, particularly when something is added to the DOM at the beginning or in the middle of the list instead of the end.

- We can make index as key in the following manner, but react documentation recommends against this, as there can be problems with rendering, and to avoid this is the point of keys in the first place. What we can do is, we will adjust our dishes array to return objects instead of strings of dish names.

```js
function Main(props) {
  const dishes = props.dishes;
  const dishItems = dishes.map((dish, index) => <li key={index}>{dish}</li>);
  return (
    <section>
      <p>
        Best fast food place in town serving the most {props.adjective} food.
      </p>
      <ul style={{ textAlign: "left" }}>{dishItems}</ul>
    </section>
  );
}
```

- So, we can just use the index as key, or we can make the data into object with key as index and data value. Keys can help us keep data in sync as app grows.

## 03_05 Displaying Images with React

- We have seen how to add text to react app, we will go over adding an image now. We add images to react apps, just how we add them in HTML.

- We just have to impor the image and include it using img tag and some jsx.

```js
function Main(props) {
  return (
    <section>
      <p>We serve the most {props.adjective} food in the town.</p>
      <img src={restaurant} height="250" alt="restaurant snap" />
      <ul style={{ textAlign: "left" }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}
```

- First we import the image as variable, after placing them in src folder. We pass the name of the variable into the src attribute, we can set height and other properties of the image, we can add alt tag for increased accessibility of the image.

## 03_06 Using Fragments

- Currently, we are defining components into App.js and then those are rendered by `ReactDOM.render()` present in `index.js`. Here we try to render an additional component, alongside the app, we name it AppTwo present in index.js.

- We have defined a component in index.js by the name of `AppTwo()` and to render it inside `ReactDOM.render()`, we can wrap them in a `<div>`. This is due to the rule of JSX that, we can only render one component, we can't render two sibling components, unless they are wrapped in some another tag, like a div, section or something else.

- This will lead to a lot of extra wrapping divs, that gets added to all sort of objects, we can get around this by wrapping App and AppTwo inside a `<React.Fragment>`. Fragment allows us to render two sibling components without adding anything extra to DOM in form of div or section tags.

- Shorthand for `<React.Fragment> </React.Fragment>` is just using `< > < / >`.

## Quick Revision

- Which transformation function can be written to set the dishes array to return objects? `const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));`

- How would you include a reference to a picture from your current local directory into your React.js code? `import restaurant from "./restaurant.jpg";` A valid reference contains the pathname, the filename, and the name to use as an object reference.

- You have a function called `App` inside of a file named `App.js`. Which code would you need to put inside your `index.js` file to utilize the `App` function?

```js
import App from "./App";
ReactDOM.render(<App />, document, getElementById("root"));
```

To use the `App` function, you must import the function, and then call it from `ReactDOM.render`.

- There is a function called App and another called Header. What is the correct function code to render the contents of the Header function from within the App function?

```js
function App() {
  return (
    <div classname="App">
      <Header />
      <h2>Main</h2>
      <div>); }
```

Enclosing the `Header` function within angle brackets will cause the contents of the function to be rendered.

- Given a list called dishes and a function parameter name called props, what is the correct statement that will print the contents as unordered list elements on a webpage using React?

```js
{
  props.dishes.map((dish) => <li>{dish}</li>);
}
```

The correct way to print a list is to call the `map` function on the list `dishes` that is attached to the `props` function parameter.

- You want to add the copyright year to your webpage using a function called Footer. Which of these represents the correct function call? `<Footer year={new Date().getFullYear()} />`

The correct way to pass in a parameter is to provide a property name which equals the content we want to send. In this case, the content is the output of a JavaScript function.

- How should the header component appear if you replace the name "Eve's Kitchen" with the new name "Horacio's Kitchen" stored in a variable?

```js
function Header(props) {
  console.log(props);
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}
```
