import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlag }) => {
  const [visited, setVisited] = useState(false);

  const handleVisitCountry = () => {
    setVisited(!visited); // toggle visited
    handleVisitedCountries(country);

    
  };

  return (
    <div className={`country ${visited ? "country-visited" : ""}`}>
      <img src={country.flags.png} alt={country.flags.alt} />
      <h3>Name: {country.name.common}</h3>
      <p>Population: {country.population}</p>
      <p>Capital: {country.capital ? country.capital[0] : "N/A"}</p>
      <p>Languages: {country.languages ? Object.values(country.languages).join(", ") : "N/A"}</p>
      <p>
        Area: {country.area} {country.area > 300000 ? "Big Country" : "Small Country"}
      </p>

      <button onClick={handleVisitCountry}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleVisitedFlag(country)}>
        Add Visited Flag
      </button>
    </div>
  );
};

export default Country;
