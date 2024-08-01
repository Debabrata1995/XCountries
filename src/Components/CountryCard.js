import React from 'react';

function CountryCard({ country }) {
  return (
    <div className="country-card">
      <img src={country.flag} alt={`${country.name} flag`} />
      <p>{country.name}</p>
    </div>
  );
}

export default CountryCard;
