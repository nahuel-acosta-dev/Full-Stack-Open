/* eslint-disable react/jsx-pascal-case */
import React, { useState } from 'react'
import './App.css';

const Statistics = (props) => (
  <tr>
    <td>{props.title}</td>
    <td>{props.count}</td>
  </tr>

)

const Statics_complet = (props) => (
  <table>
    <tbody>
      <Statistics title ="Good" count ={props.Values[0]}/>
      <Statistics title ="Neutral" count ={props.Values[1]}/>
      <Statistics title ="Bad" count ={props.Values[2]}/>
      <Statistics title ="All" count ={props.Values[3]}/>
      <Statistics title ="Average" count ={props.Values[4]}/>
      <Statistics title ="Positive" count ={props.Values[5]}/>
    </tbody>
  </table>

)

const Button = ({onClick, text}) => (
  <button onClick={onClick}>{text}</button>
)


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  
  const plusGood = () => setGood(good + 1);
  const plusNeutral = () => setNeutral(neutral + 1);
  const plusBad = () => setBad(bad + 1);

  const All = () =>  good + neutral + bad;
  const Average = () => (good - bad) / (good + neutral + bad);
  const Positive = () => 100 / (All() / good);
  const Values = [good, neutral, bad, All(), Average().toFixed(1), Positive().toFixed(1)];
  const Buttons = <><Button onClick={plusGood} text="good"/><Button onClick={plusNeutral} text="neutral"/>
  <Button onClick={plusBad} text="bad"/></>;
 
 if (All() === 0) return(
  <div>
  <h1>give feedback</h1>
    {Buttons}
  <h2>Statistics</h2>
    <p>No feedback given</p>
</div>
 )

  return (
    <div>
      <h1>give feedback</h1>
      {Buttons}
      <h2>Statistics</h2>
      <Statics_complet Values= {Values}/>
    </div>
  )
}

export default App;
