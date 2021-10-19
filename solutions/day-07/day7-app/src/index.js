import React from 'react';
import ReactDOM from 'react-dom';

const Button = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>
      {text}
    </button>
  )
}

const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

class Header extends React.Component {
  constructor(props) {
    super(props)
  }

  greetPeople = () => {
    alert('Welcome to 30 Days of React Challenge, 2021')
  }

  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date
    } = this.props.data
    return (
      <header>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{firstName} {lastName}</h3>
          <small>{date}</small>
          <button onClick={this.greetPeople}>Greet</button>
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
    const { techs } = this.props
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
            <TechList techs={this.props.techs} />
          </ul>
        </div>
        <Button text='Greet People' onClick={this.props.greetPeople} style={buttonStyles} />
        <Button text='Show Time' onClick={this.props.handleTime} style={buttonStyles} />
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
          <p>CopyRight {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  handleTime = () => {
    alert(new Date())
  }

  greetPeople = () => {
    alert('Welcome to markgz space')
  }

  render() {
    const headerData = {
      welcome: 'Welcome to 30 Days of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'markgz',
        lastName: 'yan'
      },
      date: 'Oct 19, 2021'
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    console.log('headerData: ', headerData)

    return (
      <div className='app'>
        <Header data={headerData}/>
        <Main techs={techs} greetPeople={this.greetPeople} handleTime={this.handleTime}/>
        <Footer date={new Date()}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)