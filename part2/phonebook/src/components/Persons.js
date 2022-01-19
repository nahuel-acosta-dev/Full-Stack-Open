const Persons = ({persons, newFilter}) => {
    const showPerson = (person) =>{
        console.log("newFilter:" + newFilter)
        console.log(person.name.indexOf(newFilter))
        if(person.name.toLowerCase().indexOf(newFilter) !== -1 || newFilter === ""){
          return <p>{person.name}  {person.number}</p>
        }
        else if(person.name.indexOf(newFilter) !== -1){
          return <p>{person.name}  {person.number}</p>
        }
        else return false;
    }

    return (
        <>
        {persons.map(person => (
          <div key={person.name}>
            {showPerson(person)}
          </div>
      ))}
        </>
    )
}

export default Persons;