import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personsService from './services/PersonsService';


const App = () => {
  const [ newFilter, setNewFilter ] = useState('');
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    console.log('effect')
      getPersons();
  }, []);

  const getPersons = () =>{
    personsService
    .getAll()
    .then(response => setPersons(response.data))
  }

  console.log('render', persons, 'persons')

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter setNewFilter={setNewFilter}/>
      <h2>Add a New</h2>
      <PersonForm persons={persons} setPersons={setPersons} getPersons={getPersons}/>
      <h2>Numbers</h2>
      <div>
      <Persons persons={persons} newFilter={newFilter} getPersons={getPersons}/>
      </div>
    </div>
  )
}

export default App
