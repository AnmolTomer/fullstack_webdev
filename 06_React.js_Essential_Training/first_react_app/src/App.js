import React from 'react';
import './App.css';
import restaurant from "./restaurant.jpg";

function Header(props){
  console.log(props)
  return(
    <header>
      {/* Use JSX expression to insert dynamic data */}
      <h1>{props.name}'s Italian Restaurant</h1>
    </header>
  )
}

// Create More Data
const dishes = [
  "Mac and Cheese",
  "Salmon",
  "American Supreme Cheese Burger",
  "Penne Pasta"
]

// Return objects instead of string items from dishes array
const dishObjects = dishes.map((dish,i)=>({id: i, title: dish}))
console.log(dishObjects)

// Using key

function Main(props){
  return(
    <section>
      <p>We serve the most {props.adjective} food in the town.</p>
      <img src={restaurant} height="250" alt="restaurant snap"/>
      <ul style={{textAlign:"left"}}>
        {props.dishes.map((dish) =>(
          <li key={dish.id}>{dish.title}</li>
          ))}
      </ul>
    </section>
  )
}


// Using index as key, creating a li outside the <ul> and then inserting dishItems directly using JSX in between <ul> tags

/* function Main(props){
  const dishes = props.dishes
  const dishItems = dishes.map((dish,index) => (
    <li key={index}>{dish}</li>
  ))
  return(
    <section>
      <p>Best fast food place in town serving the most {props.adjective} food.</p>
      <ul style={{textAlign:"left"}}>
      {dishItems}
      </ul>
    </section>
  )
} */

function Footer(props){
  return(
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  )
}

// SecretComponent for logged in users, and RegularComponent for visitors to see

function SecretComponent(){
  return <h1>Secret information for authorized users only.</h1>
}

function RegularComponent(){
  return <h1>Everyone can see this component. Please log in to view restuarant items and media content.</h1>
}


function App(props) {
  if(props.authorized){
  return (
    <div className="App">
      {/* Header is a tag here which is used to call the function Header defined above on line 5. */}

      <Header name = "Leonardo"/>
      <Main adjective="delicious" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
      {/* Use JS date data and put it in Footer as param */}
      <SecretComponent/>
    </div>
  );}else{
    return <RegularComponent/>
  }

}

// This will export the App function and we need to import this into our index file.
export default App;