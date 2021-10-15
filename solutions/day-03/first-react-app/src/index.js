import React from 'react';
import ReactDOM from 'react-dom';
import asabenchImage from './images/asabench.png'

const welcome = '感冒清胶囊'
const title = "疏风解表"
const subtitle = '清热解毒'
const author = {
  firstName: 'markgz',
  lastName: 'yan'
}

const user = (
  <div>
    <img src={asabenchImage} alt='asabench image'/>
  </div>
)

const header = (
  <header>
    <h1>{welcome}</h1>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <p>
      firstName: {author.firstName}
      lastName: {author.lastName}
    </p>
  </header>
)

// JSX element, main
const techs = ['HTML', 'CSS', 'JavaScript']
const techsFormatted = techs.map((tech) => <li>{tech}</li>)

const main = (
  <main>
    <div className='main-wrapper'>
      <ul>
        {techsFormatted}
      </ul>
      {user}
    </div>
  </main>
)

const copyRight = 'CopyRight 2021'
const footer = (
  <footer>
    <div className="footer-wrapper">
      <p>{copyRight}</p>
    </div>
  </footer>
)
const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)
const rootElement = document.getElementById('root')

ReactDOM.render(app, rootElement)