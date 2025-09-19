import React, { use } from "react";
import Country from "../Country/Country";
import "./countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = React.useState([]);

  const handleVisitedCountries = (country) => {
    console.log("handle visited countries clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);

  const handleVisitedFlag = (country) => {
    console.log("handle visited flag clicked", country);

  return (
    <div>
      <h1>In the countries : {countries.length}</h1>
      <h3>Total Country Visited : {visitedCountries.length} </h3>
      <ol>
        {visitedCountries.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {
        countries.map(country => (
          <Country
            country={country}
            handleVisitedCountries={handleVisitedCountries}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};
};

export default Countries;


