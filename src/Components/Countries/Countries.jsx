import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css"

const Countries = () => {
    const [countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res=> res.json())
        .then(data=>setCountries(data)
        
        )
        
    },[])
    const handleVisitedCountry= (country) =>{
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
        
    } 
    return (
        
        <div>
            <h1 className="text-blue-800">Country tour {countries.length}</h1>
            <h3>Visited Country: {visitedCountries.length}</h3>
            <ul>
                {
                    visitedCountries.map(country => <div className="grid grid-cols-4" key={country.cca3}>
                       <div className="flex">
                       <h1>{country.name.common}</h1>
                       <img className="w-12 h-10" src={country.flags.png} alt="" />
                       </div>
                        </div>)
                }
            </ul>
            <div className="grid grid-cols-4 gap-4">

            {
                countries.map(country => 
                    <Country key={country.cca3}
                    handleVisitedCountry = {handleVisitedCountry}
                     country={country}></Country>)
            }
            </div>
        </div>
    )
};

export default Countries;