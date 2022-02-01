import ShowCountry from './CountrysShow/ShowCountry';

const Countries = ({countries, newFilter, weather}) => {
    const showCountrys = () => {
        
        if(newFilter === "")return false;

        const newCounter = countries.filter(country =>
           country.name.common.toLowerCase().indexOf(newFilter.toLowerCase()) !== -1
        )
        
        console.log("este es el numero de paises: " + newCounter.length);

        if(newCounter.length > 10)return <p>Too many results are more accurate</p>;

        return(
            <div className="country">
                {
                newCounter.map((country, i) =>(
                    <ShowCountry key={i} country={country} weather={weather} newCounter={newCounter}/>
                ))
                }
            </div>
            )
    }

    return (
        <>
            <div>
            {
                showCountrys()
            }
            </div>
        </>
    )
}

export default Countries;