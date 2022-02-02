import React, { useState } from 'react';
import personsService from './../services/PersonsService';

const PersonsForm = ({ persons, setPersons, getPersons, setVisibility, setName }) => {
    const [ newName, setNewName ] = useState('');
    const [ newPhone, setNewPhone ] = useState('');

    const addPerson = (event) => {
        event.preventDefault();
  
        const newPersons = {
          name: newName,
          number: newPhone
        }

        for(let person of persons) {
          console.log("show" + person)
          if(person.name.toLowerCase() === newName.toLowerCase()) {
            const response = window.confirm(`${newName} is already added to phonebook, 
            replace the old number with a new one?`);
            if(response){
              personsService
              .update(person.id, newPersons)
              .then(() => {getPersons();
                setVisibility('added');
                setName(person.name);
                setTimeout(() => {
                  setVisibility('')
                }, 5000)
              })
              return false;
            }
            else return false;
          }
          
        }
        console.log('button clicked', newName)

          personsService
          .create(newPersons)
          .then(response => {setPersons(persons.concat(response.data))
            setVisibility('added');
            setName(response.data.name)
            setTimeout(() => {
              setVisibility('')
            }, 5000)
          
            return false;
            
          })
          
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