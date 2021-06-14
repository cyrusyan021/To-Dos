import React, { useEffect, useState } from 'react';

import { checkEnterOnPress } from 'utilities/form';

import './index.css';

/*
  Note:
  - value of input is mainly controlled by itself
  - we will only pass value to parent component when it is onBlur / enterOnPress
*/
const Input = ({ className="", initialValue, placeholder, disabled, onBlur }) => {
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

export default Input;