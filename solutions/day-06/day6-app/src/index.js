import React from 'react';
import ReactDOM from 'react-dom';


const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li key={number}>{number}</li>)
  return list
}

const skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['Java', 2],
  ['JavaScript', 10]
]

const Skill = ({ skill: [tech, level] }) => (
  <li>
    tech:{tech} level:{level}
  </li>
)

const Skills = ({ skills }) => {
  const skillsList = skills.map((skill) => <Skill skill={skill} />)
  console.log('skillsList', skillsList)
  return <ul>{skillsList}</ul>
}

const countries = [
  {name: 'China', city: 'Shanghai'},
  {name: 'Finland', city: "hexj"},
  {name: 'USA', city: 'New York'},
  {name: 'Braitain', city: 'London'}
]

const Country = ({country: { name, city }}) => {
  const country = <li>country: {name} city: {city}</li>
  return country
}

const Countries = ({ countries }) => {
  const coutriesList = countries.map((country) => <Country key={country.name} country={country} />)
  return <div>{coutriesList}</div>
}


const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
      <div>
        <h1>Countries List</h1>
        <Countries countries={countries} />
        <h2>Numbers List</h2>
        <Numbers numbers={numbers} />
        <h3>Skills List</h3>
        <Skills skills={skills} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
