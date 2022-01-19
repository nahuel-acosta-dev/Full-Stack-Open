const Filter = ({ setNewFilter }) => {
    const handleFilterResultChange = (event) =>{
        console.log(event.target.value);
        setNewFilter(event.target.value);
      }
    return(
        <>
            filter shown with: <input onChange={handleFilterResultChange} />
        </>
    )
}

export default Filter;