import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <div className='header-wrapper'>
          <h1>Welcome to 30 Days of React</h1>
          <h2>Getting Started React</h2>
          <h3>JavaScript Library</h3>
          <p>markgz yan</p>
          <small>Oct 19, 2021</small>
        </div>
      </header>
    )
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const techs = ['HTML', 'CSS', "JavaScript"]
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <main>
        <div className="main-wrapper">
          <p>Prerequiste to get started react.js</p>
          <ul>
            <TechList />
          </ul>
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>CopyRight 2021</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='app'>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}
const rootElement = document.getElementById('root')
ReactDOM.render(<Header />, rootElement)