import React from 'react';

import './list.scss';
import Card from './Card';

const List = ({ cities, handleClick, currentCity }) => (
  <div className="list">
    {cities.map(city => (
      <Card
      {...city}
      key={city.rank}
      handleClick={handleClick}
      currentCity={currentCity}
      />
    ))}
  </div>
);

export default List;
