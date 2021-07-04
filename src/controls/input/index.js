import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { checkEnterOnPress } from 'utilities/form';

import './index.css';

/*
  Note:
  - value of input is mainly controlled by itself
  - we will only pass value to parent component when it is onBlur / enterOnPress
*/
const Input = ({ className, initialValue, placeholder, disabled, onBlur }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const onKeyDown = (event) => {
    if (checkEnterOnPress(event)) {
      event.target.blur();
    }
  }

  return (
    <input
      className={ `main__input ${ className }` }
      value={ value }
      placeholder={ placeholder }
      disabled={ disabled }
      onChange={ (e) => { setValue(e.target.value); } }
      onBlur={ () => { onBlur(value.trim()); } }
      onKeyDown={ onKeyDown }
    />
  );
}

Input.propTypes = {
  className: PropTypes.string,
  initialValue: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onBlur: PropTypes.func,
}

Input.defaultProps = {
  className: '',
  initialValue: '',
  placeholder: '',
  disabled: false,
  onBlur: ()=>{},
}

export default Input;