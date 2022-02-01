const Weather =  ({capital, dataWeather}) => {
    if(dataWeather.current){
        console.log("este es el array");
        console.log(dataWeather);
        console.log(dataWeather.current.weather_icons[0]);
        return (
        <div className="weather">
            <h5><strong>Temperature:</strong> {dataWeather.current.temperature} Celsius</h5>
            <img src={`${dataWeather.current.weather_icons[0]}`} alt="" />
            <p>{dataWeather.current.wind_speed} mph direction SSW</p>
        </div>)
        
    }
    else{
        console.log("No muestra el array");
        console.log(dataWeather);
        return <><p>loading...</p></>
    }

}

export default Weather;