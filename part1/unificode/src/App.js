import React, { useState } from 'react'
import './App.css';

const Statistics = (props) => (
  <tr>
    <td>{props.title}</td>
    <td>{props.count}</td>
  </tr>

)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () => {
    setGood(good + 1)
  }

  const plusNeutral = () => {
    setNeutral(neutral + 1)
  }

  const plusBad = () => {
    setBad(bad + 1)
  }

  const Valor = () =>  good + neutral + bad;
  const Average = () =>{ 
    if(Valor() !== 0) return (good - bad) / (good + neutral + bad)
    else return 0};
  const Positive = () =>{ 
    if(Valor() !== 0) return 100 / (Valor() / good)
    else return 0;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {plusGood} text = "good"/>
      <Button onClick = {plusNeutral} text = "neutral"/>
      <Button onClick = {plusBad} text = "bad"/>
      <h2>Statistics</h2>
      <Statistics title ="Good" count = {good}/>
      <Statistics title ="Neutral" count = {neutral}/>
      <Statistics title ="Bad" count = {bad}/>
      <Statistics title ="All" count = {Valor()}/>
      <Statistics title ="Average" count = {Average()}/>
      <Statistics title ="Positive" count = {Positive() + " %"}/>
    </div>
  )
}

export default App;
