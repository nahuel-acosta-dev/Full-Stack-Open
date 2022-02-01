import React, { useState, useEffect } from 'react';
import './App.css';
import Filter from './components/Filter';
import Countries from './components/Countries';
import axios from 'axios';

const api_key = process.env.REACT_APP_API_KEY;
console.log(api_key);

function App() {
  const [countries, setCountries] = useState([]);
  const [ newFilter, setNewFilter ] = useState('');

  useEffect(() => {
    axios
    .get('https://restcountries.com/v3.1/all')
    .then(response => setCountries(response.data))
  }, [])
  //console.log(countries[1])

  return(
    <div className="principal">
      <Filter setNewFilter={setNewFilter} />
      <Countries countries={countries} newFilter={newFilter} weather={api_key} />
    </div>
  );
}

export default App;
