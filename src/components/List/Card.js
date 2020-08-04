import React from 'react';

const Card = ({
  city,
  growth_from_2000_to_2013,
  population,
  state,
  handleClick,
  currentCity
}) => {
  const className = currentCity === city ? 'list__card active' : 'list__card';
  const positif = growth_from_2000_to_2013.includes('-');
  return (
    <div className={className} onClick={(e) => {
      handleClick(city);
    }}>
      <div className="card__name">
        <h2 className="card__name__title">{city}</h2>
        <h3 className="card__name__subtitle">{state}</h3>
      </div>
      <div className="card__stats">
        <div className="card__population">
          <p><i class="fas fa-users"></i>{population}</p>
        </div>
        <div className="card__growth">
          <p>
          {positif ? <i class="fas fa-arrow-down"></i>
          : <i class="fas fa-arrow-up"></i>
          }
          {growth_from_2000_to_2013}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
