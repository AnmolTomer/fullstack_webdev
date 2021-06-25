// import React from 'react';
import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom"

import { Home,About,Events,Contact,Whoops404, Services,CompanyHistory,Location } from "./pages"
// https://api.github.com/users/AnmolTomer
function App5() {
        return (
            <div>
                <Routes>
                    {/* Create route for each individual component */}
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}>
                        {/* Nesting routes here */}
                        <Route path="services" element={<Services />}/>
                        <Route path="history" element={<CompanyHistory />}/>
                        <Route path="location" element={<Location />}/>
                    </Route>
                    <Route path="/events" element={<Events />}/>
                    <Route path="/contact" element={<Contact />}/>
                    <Route path="*" element={<Whoops404 />}/>
                </Routes>
            </div>
            )
}

// This will export the App function and we need to import this into our index file.
export default App5;