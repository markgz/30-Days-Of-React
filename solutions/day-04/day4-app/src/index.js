import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from './images/asabench.png'

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

const UserCard = () => {
    return (
        <div>
            <img src={asabenehImage} alt='asabeneh image' />
            <h2>Asabeneh Yetayeh</h2>
        </div>
    )
}

const TechList = () => {
    const techs = ['html', 'css', 'javascript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}

const App = () => {
    return (
        <div>
            <Header />
            <UserCard />
            <TechList />
        </div>
    )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)