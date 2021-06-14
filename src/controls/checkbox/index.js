import React from 'react';

import Button from 'controls/button';

import { CheckIcon } from 'assets/icons';

import './index.css';

const Checkbox = ({ className="", isChecked, onClick }) => {
  return (
    <Button
      buttonType="icon"
      onClick={ onClick }
    >
      { isChecked ? (
        <CheckIcon />
      ) : (
        <div className={ `main__checkbox ${ className }` } />
      ) }
    </Button>
  );
}

export default Checkbox;