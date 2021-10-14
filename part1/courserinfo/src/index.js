import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) =>{
  return(
    <div>
        <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) =>{
  return(
    <p>{props.part} {props.exercise}</p>
  )
  }

const Content = (props) =>{
  return(
    <div>
      <Part part={props.p_exercises[0]}/>
      <Part part={props.p_exercises[1]}/>
      <Part part={props.p_exercises[2]}/>
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      <p>{props.total}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development';
  const parts = ['Fundamentals of React', 'Using props to pass data','State of a component'];
  const exercises = [10, 7, 14];
  const p_exercises = [`${parts[0]} ${exercises[0]}`, `${parts[1]} ${exercises[1]}`, `${parts[2]} ${exercises[2]}`]
  const total =`Number of exercises ${exercises[0] + exercises[1] + exercises[2]}`;
  return (
    <div>
    <Header course={course} />
    <Content p_exercises={p_exercises}/>
    <Total total={total}/>
  </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);