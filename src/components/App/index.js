import React from 'react';
import './app.scss'
import Form from '../Form';
import List from '../List';

import cities from '../../datas/cities';
import { findCities } from '../../utils/function';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities,
      formValue: '',
    }
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue = (formValue) => {
    this.setState({
      formValue,
    })
  }
  
  render () {
    const { formValue, cities } = this.state;
    return (
      <div className="App">
        <Form value={formValue} handleChange={this.changeValue} />
        <div className="container">
          <List cities={findCities(cities, formValue)} />
          Map
        </div>
      </div>
    );
  }
}

export default App;
