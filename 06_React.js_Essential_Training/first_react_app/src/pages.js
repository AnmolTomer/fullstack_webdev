import React from "react"
import {Link, useLocation, Outlet} from "react-router-dom"

export function Home(){
    return(
        <div>
            <h1>[Company's Website]</h1>
            <nav>
                <Link to="about">About</Link>
                <Link to="events">Events</Link>
                <Link to="contact">Contact</Link>
            </nav>
        </div>)
}


export function About(){
    return(
        <div>
            <h1>[About]</h1>
            <Outlet/>
            <Link to="/">Home</Link>
        </div>)
}

export function Services(){
    return(
        <div>
            <h2>Our Services</h2>
        </div>
        )
}

export function CompanyHistory(){
    return(
        <div>
            <h2>Our Company History</h2>
        </div>
        )
}

export function Location(){
    return(
        <div>
            <h2>Our Location</h2>
        </div>
        )
}

export function Events(){
    return(
        <div>
            <h1>[Event]</h1>
            <Link to="/">Home</Link>
        </div>)
}

export function Contact(){
    return(
        <div>
            <h1>[Contact]</h1>
            <Link to="/">Home</Link>
        </div>)
}

export function Whoops404(){
    let location = useLocation();
    console.log(location)
    return(
        <div>
            <h1>Resource not found at {location.pathname}!</h1>
            <Link to="/">Home</Link>
        </div>)
}