import React, { useState } from 'react'
import Weather from './Weather';

const Caracteristics = ({country, weather,  newCounter}) =>{
    const idiomas = [];
    const Api_Weather = `http://api.weatherstack.com/current?access_key=${weather}`;
    const [dataWeather, setDataWeather] = useState([]);


    for(let languages in country.languages){
        idiomas.push(country.languages[languages]);
    }

    React.useEffect(() => {
        getWeather();
    }, [])
    
    const getWeather = async () =>{
        const data = await fetch(`${Api_Weather}&query=${country.capital}`);
        const weatherData = await data.json();
        console.log(weatherData)
        setDataWeather(weatherData)
    }

    return(
        <div>
            <h3>{country.name.common}</h3>
            <p>Capital {country.capital}</p>
            <p>Population {country.population}</p>
            <div>
                <h3>lenguages</h3>
                <ul>
                    {idiomas.map(language => (<li key={language}>{language}</li>))}
                </ul>
            </div>
            <div className="div-bandera">
                <img className="bandera" src={country.flags["png"]} alt={`bandera de ${country.name.common}`} />
            </div>
            <div>
                <Weather capital={country.capital} dataWeather={dataWeather} newCounter={newCounter}/>
            </div>
        </div>

    )
}

export default Caracteristics;