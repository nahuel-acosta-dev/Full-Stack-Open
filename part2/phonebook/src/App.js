import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personsService from './services/PersonsService'
import axios from 'axios';
//import Note from './components/Note'


const App = () => {
  const [ newFilter, setNewFilter ] = useState('');
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    console.log('effect')
    const newLocal = 'http://localhost:3001/persons';
    /*axios
      .get(newLocal)
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })*/
      personsService
      .getAll()
      .then(response => setPersons(response.data))
  }, [])
  console.log('render', persons, 'persons')

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter}/>
      <h2>Add a New</h2>
      <PersonForm persons={persons} setPersons={setPersons}/>
      <h2>Numbers</h2>
      <div>
      <Persons persons={persons} newFilter={newFilter}/>
      </div>
    </div>
  )
}

export default App
