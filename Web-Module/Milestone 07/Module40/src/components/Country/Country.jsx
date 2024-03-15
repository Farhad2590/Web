import { useState } from 'react';
import './country.css'
const Country = ({country , handleVisitedCountry, handleVisitedFlag}) => {
    console.log(country);
    const {name ,flags ,population , area , cca3} = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited)
    } 
    const passWithParams = () => {handleVisitedCountry(country)}
    // console.log(handleVisitedCountry);
    return (
        <div className={`box ${visited && 'visited'}`}>
            <h3 style={{color:visited ? 'green' : 'black'}}> Name : {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Area : {area}</p>
            <p><small>Code : {cca3}</small></p>
            <button onClick={passWithParams}>Mask Visited</button>
            <br />
            <button onClick={() => {handleVisitedFlag(country.flags.png)}}>Add Flag</button>
            <br />
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
        </div>
    );
};
export default Country;

