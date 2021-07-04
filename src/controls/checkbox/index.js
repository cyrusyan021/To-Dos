import React from 'react';
import PropTypes from 'prop-types';

import Button from 'controls/button';

import { CheckIcon } from 'assets/icons';

import './index.css';

const Checkbox = ({ className, isChecked, onClick }) => {
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

Checkbox.propTypes = {
  className: PropTypes.string,
  isChecked: PropTypes.bool,
  onClick: PropTypes.func,
}

Checkbox.defaultProps = {
  className: '',
  isChecked: false,
  onClick: ()=>{},
}

export default Checkbox;