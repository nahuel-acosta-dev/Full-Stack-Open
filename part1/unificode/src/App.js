import React, { useState } from 'react'
import './App.css';

const Text = (props) => (
  <div>
    {props.title} {props.count}
  </div>
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
  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick = {plusGood} text = "good"/>
      <Button onClick = {plusNeutral} text = "neutral"/>
      <Button onClick = {plusBad} text = "bad"/>
      <h2>Statistics</h2>
      <Text title ="Good" count = {good}/>
      <Text title ="Neutral" count = {neutral}/>
      <Text title ="Bad" count = {bad}/>
    </div>
  )
}

export default App;
