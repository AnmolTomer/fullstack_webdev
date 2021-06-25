// import React, {useState} from 'react';
import React, {useState,useEffect} from 'react';
import './App.css';
// https://api.github.com/users/AnmolTomer
function App({login}) {
// Create data variable and function to update data

    const [data,setData] = useState(null)

    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    useEffect(() => {
        if(!login) return;
        setLoading(true)
        fetch(`https://api.github.com/users/${login}`)
        .then(response => response.json())
        .then(setData)
        .then(() => setLoading(false))
        .catch(setError);
    },[login])

    if(loading) return <h1>Loading...</h1>
    if(error) return <pre>{JSON.stringify(error,null,2)}</pre>
    if(!data)return null;


        // return <div>{JSON.stringify(data)}</div>
        return (
            <div>
                <h1>Name of User: {data.name}</h1>
                <img alt={data.login} src={data.avatar_url} height="200"/>
                <p>Profile Url: <a target="_blank" rel="noreferrer" href={data.html_url}>{data.html_url}</a></p>
                <p>Organizations: {data.company}</p>
                <p>Blog/Site: <a target="_blank" rel="noreferrer" href={data.blog}>{data.blog}</a></p>
                
                <p>Location: {data.location}</p>
                <p>Twitter Username: <a target="_blank" rel="noreferrer" href={"https://twitter.com/"+data.twitter_username}>{data.twitter_username}</a></p>
                <p>Looking for Job/Hireable? {data.hireable ? "Yes" : "No"} </p>
                <p>GitHub Bio: {data.bio}</p>
                <p>Public Repos: {data.public_repos}</p>
                <p>Public Gists: {data.public_gists}</p>
                <p>Followers: {data.followers}</p>
            </div>)
}

// This will export the App function and we need to import this into our index file.
export default App;