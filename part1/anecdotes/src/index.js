import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({onClick, text}) => (
  <>
    <button onClick={onClick}>{text}</button> 
  </>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setCopy] = useState(new Uint8Array(6))

  const Random = () => {
    let random = Math.floor(Math.random() * 4)
    if(selected + random < 6) return setSelected(selected + random);
    else if(selected - random >= 0)return setSelected(selected - random);
    else if(selected + 1 < 6)return setSelected(selected + 1);
    else return setSelected(selected - 1)
}

  const plusCopy = () => {
    const copy = [...points];
    copy[selected] += 1;
    setCopy(copy)
}

  const votesAnecdotes = () => {
    let max = Math.max.apply(null,points);
    let position = points.indexOf(max);
    if(max !== 0){
      return (
        <div>
          <h1>Anecdote of the day</h1>
            {props.anecdotes[position]}
          <div>
            has {points[position]} votes
          </div>
        </div>
      )}
    }
 


  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}.
      <div>
        <div>
          has {points[selected]} Votes
        </div>
        <button onClick={plusCopy}>Vote</button>
        <Button onClick={Random} text="next selected"/>
      </div>
      {votesAnecdotes()}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

