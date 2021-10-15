import React from 'react'
import ReactDOM from 'react-dom'
/*

const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p', null, 'Hello world, it is ', now.toString()
    ),
    React.createElement(
      'p', null, a, ' plus ', b, ' is ', a + b
    )
  )
}*/

/*ReactDOM.render(
  React.createElement(App, null),
  document.getElementById('root')
)*/

/*El nombre de cada variale debe estar en mayuscula para que el codigo funcione y si no envuelve en div
tambien fallara*/

const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = "Peter"
  const age = 10
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="George" age={26 + 10}/>
      <Hello name={name} age={age}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
