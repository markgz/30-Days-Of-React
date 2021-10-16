import React from "react";
import ReactDOM from "react-dom";
import asabenehImage from './images/asabench.png'

const firstName = "markgz"
const lastName = "yan"
const country = "china"
const title = "mobile manager"
const skills = ['swift', 'java', 'javascript', 'react.js']
const Header = () => (
        <header>
            <h1>{firstName} {lastName}</h1>
            <h2>{country}</h2>
            <h3>{title}</h3>
            <h4>{skills.join(" + ")}</h4>
        </header>
    )

const UserCard = () => (
        <div>
            <img src={asabenehImage} alt='asabeneh image' />
            <h2>Asabeneh Yetayeh</h2>
        </div>
    )

const TechList = () => {
    const techs = ['html', 'css', 'javascript']
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}

const hexaColor = () => {
    const str = '0123456789abcdef'

    let color = 0
    for (let i = 0; i < 6; i++) {
        let random = Math.random()
        console.log(`random: ${random}`)
        let index = Math.floor(random * str.length)
        color += str[index]
    }
    return '#' + color
}

const HexaColor = () => (
    <div>{hexaColor()}</div>
)


const Main = () => (
    <main>
        <div className='main-wrapper'>
            <p>Prerequist to get started react.js</p>
            <ul>
                <TechList />
            </ul>
            <UserCard />
            <HexaColor />
        </div>
    </main>
)

const Footer = () => (
    <div>
        <p>Copyright 2021</p>
    </div>
)

const App = () =>(
        <div>
            <Header />
            <Main />
            <Footer />
        </div>
    )

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)