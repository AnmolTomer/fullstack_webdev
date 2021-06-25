// import React from 'react';
import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"

import { Home,About,Events,Contact } from "./pages"
// https://api.github.com/users/AnmolTomer
function App5() {
        return (
            <div>
                <Routes>
                    {/* Create route for each individual component */}
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/events" element={<Events />}/>
                    <Route path="/contact" element={<Contact />}/>
                </Routes>
            </div>
            )
}

// This will export the App function and we need to import this into our index file.
export default App5;