

import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'
const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag ,setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('Add this to your visited country');
        console.log(country);
        const newVisitedCountries = [...visitedCountries ,country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlag = flag => {
        console.log('Flag clicked');
        const newFlag = [...visitedFlag , flag]
        setVisitedFlags(newFlag)
    }

    return (
        <div>
            <h3>Countries :{countries.length}</h3>
            <div>
                <h4>Visited Countries : {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            <div className="image-container">
                {
                    visitedFlag.map(flag => <img src={flag}></img>)
                }
            </div>
            <div className="country-container">
                {
                    countries.map(country =>
                        <Country
                            key={country.cca3}
                            handleVisitedCountry={handleVisitedCountry}
                            handleVisitedFlag = {handleVisitedFlag}
                            country={country}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;