import React from "react";

const country = ({ country }) => {
    console.log(country.population);
  return (
    <div>
        <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h3> Name: {country.name.common}</h3>
      <p> population: {country.population.population} </p>
      <p>capital: {country.capital.capital}</p>
      <p>Language: {country.languages.languages.eng}</p>
      <p>Area: {country.area.area} km</p>
      <p>Capital: {country.jam}</p>
    </div>
  );
};

export default country;
