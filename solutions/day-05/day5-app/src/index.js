import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log('props', props)
  return (
    <header>
      <h1>{props.data.firstName}</h1>
      <h2>{props.data.lastName}</h2>
      <h3>{props.data.country}</h3>
      <p>{props.data.title}</p>
      <small>{props.data.skills}</small>
    </header>
  )
}

const Age = (props) => <div>The person is {props.age} years old</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

const Status = (props) => {
  let status = props.status ? 'Old enough to drive' : 'Too young for driving'
  return <p>{status}</p>
}

const Skills = (props) => {
  return (
    <ul>
      {props.skills.map((skill) => <li key={skill} >{skill}</li>)}
    </ul>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>{props.text}</button>
  )
}


const App = () => {
  let currentYear = 2021
  let birthYear = 1990
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  let status = age >= 18

  let skills = ["java", "javascript", "html", "css", "react"]
  const data = {
    firstName: 'markgz',
    lastName: 'yan',
    title: "mobile manager",
    country: "china",
    skills: ['java', 'html', 'css']
  }

  const sayHi = () => {
    alert('Hi')
  }

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={gravity * mass} />
      <Status status={status} />
      <Skills skills={skills} />
      <Header data={data} />
      <Button onClick={sayHi} text="CLICK ME" />
    </div>
  )
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)