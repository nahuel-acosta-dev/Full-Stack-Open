import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import axios from 'axios';
//import Note from './components/Note'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [ newFilter, setNewFilter ] = useState('');
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes, 'notes')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter}/>
      <h2>Add a New</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <div>
      <Persons persons={notes} newFilter={newFilter}/>
      </div>
    </div>
  )
}

export default App
