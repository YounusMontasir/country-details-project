import { useState } from "react";
import "./country.css"
const Country = ({country,handleVisitedCountry}) => {
    console.log(country);
    const [visited,setVisited] = useState(false)
    function handleVisited(){
        setVisited(!visited)
        
    }
    
    
    const {name, flags} = country
    return (
        <div className={`p-4 bg-[#387478] ${visited ? 'bg-[#629584]': ''}`}> 
            
            
            <img className="w-full h-[150px]" src={flags.png} alt="" />
            <h4 className="text-[#E2F1E7] text-2xl font-bold text-left">Name: {name.common}</h4>
            <button onClick={() => handleVisitedCountry(country)} className="p-3 bg-green-700 text-white font-semibold">Mark Visited</button>
            <br />
            <button  onClick={handleVisited} className="p-3 bg-green-700 text-white font-semibold">{visited ? "visited":"visit"}</button>
            {visited ? 'This country is visited' : 'I want to Visit'}
        
        </div>
    );
};

export default Country;