import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import the component
import App from './App'

function AppTwo(){
  return(
    <h1>This is the second App.</h1>
  )
}

ReactDOM.render(
  /* React.createElement("h1", {
      style: {
        color: "blue"
      }
    },
    "Heyy Everyone!"), */

  // Using JSX
 
    /* <ul>
      <li>Monday</li>
      <li>Tuesday</li>
      <li>Wednesday</li>
    </ul> */
  
  // <App/>, // Use the App component

  // Using React Fragment
  /* <React.Fragment>
    <App />
    <AppTwo />
  </React.Fragment> */

  // Shorthand React Fragment
  <>
    <App authorized={true}/>
    {/* Use this authorized in App.js App component to decide which component to render.*/}

    <AppTwo />
  </>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();