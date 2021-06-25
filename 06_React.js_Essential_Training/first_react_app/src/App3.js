// import React, {useState} from 'react';
import React, {useReducer} from 'react';
import './App.css';

function App() {

    // Handle state of checkBox
    // const[checked,setChecked] = useState(false);
    const[checked,toggle] = useReducer(
        (checked) => !checked,
        false
    )

    // Create a toggle function to toggle checkbox, this is similar to reducer.
    /* function toggle() {
        setChecked(checked => !checked)
    } */

  return (
    <>
    {/* set value as checked and an onChange function, that calls the function, any time the value changes. */}
        <input type="checkbox"
        value={checked}
        onChange={toggle}>
        </input>

        <p>{checked ? "Checked ✅" : "Not Checked ❌"}</p>
    </>
  )
}

// This will export the App function and we need to import this into our index file.
export default App;