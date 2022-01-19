import React, { useState } from 'react';

const PersonsForm = ({ persons,setPersons }) => {
    const [ newName, setNewName ] = useState('');
    const [ newPhone, setNewPhone ] = useState('');

    const addPerson = (event) => {
        event.preventDefault();
        for(let person of persons) {
          console.log("show" + person)
          if(person.name === newName)return alert(`${newName} is already added to phonebook`);
        }
        console.log('button clicked', newName);
        setPersons(persons.concat({
         name: newName,
         number: newPhone}))
      }
    
      const handleNameChange = (event) => {
        console.log(event.target.value);
        setNewName(event.target.value);
      }
    
      const handlePhoneChange = (event) => {
        console.log(event.target.value);
        setNewPhone(event.target.value);
      }
    

return (
    <form onSubmit={addPerson}>
        <div>
          name: <input onChange={handleNameChange} />
          <div>number: <input onChange={handlePhoneChange} /></div>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
)
}

export default PersonsForm;