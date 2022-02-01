import Caracteristics from './Caracteristics';
import React, { useState } from 'react';

const ShowCountry = ({country, weather, newCounter}) => {
const [stateStyle, newStateStyle] = useState(false);

const showCaracteristics = () =>{
    if(stateStyle === false)newStateStyle(true);
    else newStateStyle(false);
}

    if(newCounter.length === 1)return <Caracteristics country={country} weather={weather}  />


    return(
        <>
            <div className="country">
                <div className="row">
                    <p className="col-1">{country.name.common}</p>
                    <button className="col-3 btn btn-warning button-show" onClick={showCaracteristics}>Show caracteristics</button>
                </div>
                <div>
                    {stateStyle === true &&
                        <Caracteristics country={country} weather={weather} 
                        newCounter={newCounter}/>}
                </div>
            </div>
        </>
    )
}

export default ShowCountry;