import React from 'react';
import ReactDOM from 'react-dom';

const rootElement = document.getElementById('root')
const headerStyle = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}

const header = (
  <header className='header-wrapper'>
    <h1>Welcome to 30 Days of React</h1>
    <h2>This is day 3 exercises</h2>
    <h3>markgz</h3>
    <h4>yan</h4>
  </header>
)

const mainStyle = {
  backgroundColor: '#F3F0F5'
}
const main = (
  <main className='main-wrapper'>
    <p>Prerequisite to get started react.js</p>
    <ul>
      <li>css</li>
      <li>html</li>
      <li>javascript</li>
      <li>react</li>
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