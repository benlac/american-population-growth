import React from 'react';
import {
  Map,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';


import './maps.scss';

const Maps = ({ position, currentMarker, currentCityValue }) => {
  return (
    <Map center={position} zoom={4} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {currentMarker
      && <Marker position={currentMarker}>
        <Popup>
          {currentCityValue.city} <br /> Population: {currentCityValue.population} <br /> Growth: {currentCityValue.growth_from_2000_to_2013} 
        </Popup>
      </Marker>
      }
    </Map>
  )
};


export default Maps;
