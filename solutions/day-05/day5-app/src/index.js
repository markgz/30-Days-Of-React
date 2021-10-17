import React from 'react';
import ReactDOM from 'react-dom';


const Header = (props) => {
  console.log('props', props)
  return (<header>
    <h1>{props.firstName}</h1>
    <h2>{props.lastName}</h2>
    <h3>{props.country}</h3>
    <p>{props.title}</p>
    <small>{props.skills}</small>
  </header>
)
}

const App = () => {
  const firstName = "markgz"
  const lastName = "yan"
  const country = "china"
  const title = "mobile manager"
  const skills = ["java", "javascript", "html", "css"]

  return (
    <div>
      <Header firstName={firstName} lastName={lastName} country={country} title={title} skills={skills.join(" + ")} />
    </div>
  )
}
const root = document.getElementById('root')
ReactDOM.render(<App />, root)