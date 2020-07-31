import React from 'react';

const Card = ({ city, growth_from_2000_to_2013, population, state }) => (
  <div className="list__card">
    <div className="card__name">
      <h2>{city}</h2>
      <h3>{state}</h3>
    </div>
    <div className="card__stats">
      <div className="card__population">
        <p>{population}</p>
      </div>
      <div className="card__growth">
        <p>{growth_from_2000_to_2013}</p>
      </div>
    </div>
  </div>
);

export default Card;
