import React, { useState, useEffect } from 'react';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';
import Persons from './components/Persons';
import personsService from './services/PersonsService';


const App = () => {
  const [ newFilter, setNewFilter ] = useState('');
  const [ persons, setPersons ] = useState([]);
  const [ visibility, setVisibility ] = useState('');
  const [ name, setName ] = useState('');
  const footerStyle = {
    fontStyle: 'italic',
    fontSize: 16
  }

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
      {visibility === 'added' ? 
        (<h3 style={footerStyle} className={"add"}>Added {name}</h3>):
        visibility === 'delete' &&
        (<h3 style={footerStyle} className={"delete"}>delete {name}</h3>)
      }
      <Filter setNewFilter={setNewFilter}/>
      <h2>Add a New</h2>
      <PersonForm setVisibility={setVisibility} persons={persons} 
      setPersons={setPersons} getPersons={getPersons} setName={setName}/>
      <h2>Numbers</h2>
      <div>
      <Persons setVisibility={setVisibility} persons={persons} 
      newFilter={newFilter} getPersons={getPersons} setName={setName}/>
      </div>
    </div>
  )
}

export default App
