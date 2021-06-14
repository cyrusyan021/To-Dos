import React from 'react';

import './index.css';

/*
  Note:
  - value of form/Input is mainly controlled by parent component
  - mainly used in Form
  - so we might have a different css when comparing to controls/input
*/
const Input = ({ className="", ...otherProps }) => {
  return (
    <input
      className={ `main__form__input ${ className }` }
      { ...otherProps }
    />
  );
}

export default Input;