const Filter = ({ setNewFilter }) => {
    const handleFilterResultChange = (event) =>{
        console.log(event.target.value);
        setNewFilter(event.target.value);
      }
    return(
        <>
            find countries: <input className="search"
            placeholder="Enter the country" onChange={handleFilterResultChange} />
        </>
    )
}

export default Filter;