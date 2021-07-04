import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

/*
  Note:
  - value of form/Input is mainly controlled by parent component
  - mainly used in Form
  - so we might have a different css when comparing to controls/input
*/
const Input = ({ className, ...otherProps }) => {
  return (
    <input
      className={ `main__form__input ${ className }` }
      { ...otherProps }
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  value: '',
  placeholder: '',
  disabled: false,
  onBlur: ()=>{},
  onChange: ()=>{},
}

export default Input;