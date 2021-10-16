import React from "react";
import ReactDOM from "react-dom";

const firstName = "markgz"
const lastName = "yan"
const country = "china"
const title = "mobile manager"
const skills = ['swift', 'java', 'javascript', 'react.js']
const Header = () => {
    return (
        <header>
            <h1>{firstName} {lastName}</h1>
            <h2>{country}</h2>
            <h3>{title}</h3>
            <h4>{skills.join(" + ")}</h4>
        </header>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)