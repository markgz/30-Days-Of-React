import React from 'react';
import ReactDOM from 'react-dom';


const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li>{number}</li>)
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

const App = () => {
  const numbers = [1, 2, 3, 4, 5]
  return (
    <div className='container'>
      <div>
        <h1>Skills Level</h1>
        <Skills skills={skills} />
      </div>
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)
