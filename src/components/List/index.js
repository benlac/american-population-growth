import React from 'react';

import './list.scss';
import Card from './Card';

const List = ({ cities }) => (
  <div className="list">
    {cities.map(city => (
      <Card {...city} key={city.rank} />
    ))}
  </div>
);

export default List;
