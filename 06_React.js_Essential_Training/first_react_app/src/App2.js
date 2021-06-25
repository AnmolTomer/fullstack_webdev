import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
//   useState returns a stateful value and a function to update it, https://reactjs.org/docs/hooks-reference.html#usestate
    const [emotion, setEmotion] = useState("happy")
    const [secondary, setSecondary] = useState("tired")
    // useEffect takes in a callback function
    
    // watches emotion, when it is changed console logs it
    useEffect(()=>{
        console.log(`It's ${emotion} around here in the app!`)
    },[emotion])

    // watches secondary emotion, when it is changed console logs it
    useEffect(()=>{
        console.log(`It's ${secondary} around here in the app!`)
    },[secondary])


//   console.log("emotion: "+emotion)
  return (
    <>
        <h1>Current emotion is {emotion} and {secondary}.</h1>
        <button className="button1" onClick={() => setEmotion("happy")}>
            Make Happy
        </button>

        <button className="button2" onClick={() => setSecondary("crabby")}>
            Make Crabby
        </button>

        <button className="button1" onClick={() => setEmotion("frustrated")}>
            Frustrate
        </button>

        <button className="button2" onClick={() => setEmotion("excited")}>
            Excite
        </button>
    </>
  )
}

// This will export the App function and we need to import this into our index file.
export default App;