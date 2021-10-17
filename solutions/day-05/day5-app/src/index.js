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

const App = () => (
  <div>
    <Header firstName="markgz" lastName="yan" country="china" title="mobile manager" skills="java, javascript, html, css" />
  </div>
)
const root = document.getElementById('root')
ReactDOM.render(<App />, root)