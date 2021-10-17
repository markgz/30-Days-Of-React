import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log('props', props)
  return (
    <header>
      <h1>{props.firstName}</h1>
      <h2>{props.lastName}</h2>
      <h3>{props.country}</h3>
      <p>{props.title}</p>
      <small>{props.skills}</small>
    </header>
  )
}

const Age = (props) => <div>The person is {props.age} years old</div>
const Weight = (props) => (
  <p>The weight of the object on earth is {props.weight} N.</p>
)

const App = () => {
  let currentYear = 2021
  let birthYear = 1990
  const age = currentYear - birthYear
  const gravity = 9.81
  const mass = 75

  return (
    <div className='app'>
      <Age age={age} />
      <Weight weight={gravity * mass} />
    </div>
  )
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)