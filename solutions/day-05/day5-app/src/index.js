import React from 'react';
import ReactDOM from 'react-dom';


const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const month = months[time.getMonth()].slice(0, 3)
  const year = time.getFullYear()
  const date = time.getDate()
  return ` ${month} ${date}, ${year}`
}

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  }
}) => {
  // console.log('props', data)
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techList
}

const UserCard = ( {user: {firstName, lastName} }) => {
  return (
    <div className='user-card'>
      <h2>
        {firstName}
        {lastName}
      </h2>
    </div>
  )
}

const Button = ({ text, onClick, style }) => {
  return (
    <button style={style} onClick={onClick}>{text}</button>
  )
}

const buttonStyle = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequiste to get started react.js</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text='Greet People' onClick={greetPeople} style={buttonStyle} />
      <Button text='Show Time' onClick={handleTime} style={buttonStyle} />
    </div>
  </main>
)

const Footer = ({ copyRight }) => {
  return (
    <div className='footer-wrapper'>
      <p> Copyright {copyRight.getFullYear()}</p>
    </div>
  )
}

// const Age = (props) => <div>The person is {props.age} years old</div>
// const Weight = (props) => (
//   <p>The weight of the object on earth is {props.weight} N.</p>
// )

// const Status = (props) => {
//   let status = props.status ? 'Old enough to drive' : 'Too young for driving'
//   return <p>{status}</p>
// }

// const Skills = (props) => {
//   return (
//     <ul>
//       {props.skills.map((skill) => <li key={skill} >{skill}</li>)}
//     </ul>
//   )
// }

const App = () => {
  // let currentYear = 2021
  // let birthYear = 1990
  // const age = currentYear - birthYear
  // const gravity = 9.81
  // const mass = 75

  // let status = age >= 18

  // let skills = ["java", "javascript", "html", "css", "react"]
  const data = {
    welcome: 'Welcome to 30 Days of React',
    author: {
      firstName: 'markgz',
      lastName: 'yan',
    },
    title: "mobile manager",
    subtitle: 'JavaScript Library',
    country: "china",
    skills: ['java', 'html', 'css'],
    date: new Date(),
  }

  const date = new Date()
  const techs = ['HTML', 'CSS', 'JavaScript']
  const user = {...data.author}

  // const sayHi = () => {
  //   alert('Hi')
  // }

  const handleTime = () => {
    alert(showDate(new Date()))
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days of React Challenge, 2021')
  }

  return (
    <div className='app'>
      <Header data={data} />
      <Main user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />

      <Button onClick={() => alert('Hello')} text="CLICK ME" />
      <Button onClick={greetPeople} text='Greet People' />
      <Button onClick={() => alert(new Date())} text='Show Time' />
    </div>
  )
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)