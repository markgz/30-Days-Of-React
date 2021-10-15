import React from 'react';
import ReactDOM from 'react-dom';


const welcome = 'Welcome to 30 Days of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'markgz',
  lastName: 'yan'
}
const date = 'Oct 15, 2021'

const rootElement = document.getElementById('root')
const headerStyle = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header className='header-wrapper'>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <p>{subtitle}</p>
    <h3>{author.firstName}</h3>
    <h4>{author.lastName}</h4>
    <small>{date}</small>
  </header>
)

const mainStyle = {
  backgroundColor: '#F3F0F5'
}
const techs = ['css', 'html', 'javascript', 'python', 'swift']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const main = (
  <main className='main-wrapper'>
    <p>Prerequisite to get started react.js</p>
    <ul>
      {techsFormatted}
    </ul>
  </main>
)

const footerStyle = {
  backgroundColor: '#61DBFB'
}
const footer = (
  <footer className='footer-wrapper'>
    <p>
      copyright 2021
    </p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
ReactDOM.render(app, rootElement)