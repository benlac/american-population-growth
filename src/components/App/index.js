import React from 'react';
import './app.scss'
import Form from '../Form';
import List from '../List';
import Maps from '../Maps';

import cities from '../../datas/cities';
import { findCities, findMarker, findCurrentCityValue } from '../../utils/function';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities,
      formValue: '',
      currentCity: '',
      lat: 40.7127837,
      lng: -74.0059413,
    }
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue = (formValue) => {
    this.setState({
      formValue,
    })
  }

  setCurrentCity = (currentCity) => {
    this.setState({
      currentCity,
    })
  }

  render () {
    const { formValue, cities, currentCity } = this.state;
    const position = [ this.state.lat, this.state.lng];
    findMarker(cities, currentCity);
    return (
      <div className="App">
        <Form value={formValue} handleChange={this.changeValue} />
        <div className="container">
          <List
            cities={findCities(cities,
            formValue)}
            handleClick={this.setCurrentCity}
            currentCity={currentCity}
          />
          <Maps
            position={position}
            currentMarker={findMarker(cities,
            currentCity)}
            currentCityValue={findCurrentCityValue(cities,
            currentCity)}
          />
        </div>
      </div>
    );
  }
}

export default App;
