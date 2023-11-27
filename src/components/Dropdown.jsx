import React, { useState } from 'react';
import countries from './Data';

const Dropdown = () => {
  // assignin gthe object to state
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  
  return (
    <div>
      <select
        value={selectedCountry.name}
        onChange={(e) => {
          const selectedCountryObject = countries.find((country) => country.name === e.target.value);
          setSelectedCountry(selectedCountryObject);
        }}
      >
        {countries.map((item, index) => {
          return (
            <option key={index} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </select>

      {/* Another dropdown of country related cities */}
      
      <select>
        {selectedCountry &&
          selectedCountry.cities.map((city, index) => {
            return (
              <option key={index} value={index}>
                {city}
              </option>
            );
          })}
      </select>
    </div>
  );
};

export default Dropdown;
