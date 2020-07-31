import React from 'react';

import './form.scss';

const Form = ({ value, handleChange }) => (
  <header className="header">
    <h1 className="header__title">American Population Growth</h1>
    <input
      type="text"
      className="header__input"
      value={value}
      onChange={(e) => {
        handleChange(e.target.value);
      }}
    />
  </header>
);

export default Form;
