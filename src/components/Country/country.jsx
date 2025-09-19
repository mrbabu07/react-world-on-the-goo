import React from "react";
import "./country.css";

const country = ({ country }) => {
    console.log(country.area.area);
  return (
    <div className="country">
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3> Name: {country.name.common}</h3>
      <p> population: {country.population.population} </p>
      <p>capital: {country.capital.capital}</p>
      <p>Language: {country.languages.languages.eng}</p>
      <p>Area: {country.area.area} {country.area.area>300000? "Big Country" :  "Small Country"}</p>
      <p>Capital: {country.jam}</p>
    </div>
  );
};

export default country;
