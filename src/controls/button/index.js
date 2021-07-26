import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import { BUTTON_TYPE, BUTTON_TYPE_VALID_PROPS, SIZE_VALID_PROPS, SIZE } from 'constants/types';

import './index.css';

const Button = ({ className, children, buttonType, buttonSize, ...otherProps }) => {
  const buttonClassName = useMemo(() => {
    switch (buttonType) {
      case BUTTON_TYPE.clear: { return 'clear__button'; }
      case BUTTON_TYPE.outlined: { return 'outlined__button'; }
      case BUTTON_TYPE.warning: { return 'warning__button'; }
      case BUTTON_TYPE.icon: { return 'icon__button'; }
      case BUTTON_TYPE.primary:
      default:
        return 'primary__button';
    }
  }, [buttonType]);

  return (
    <button
      className={ `main__button main__button--${ buttonSize } ${ buttonClassName } ${ className }` }
      { ...otherProps }
    >
      { children }
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  buttonType: PropTypes.oneOf(BUTTON_TYPE_VALID_PROPS),
  buttonSize: PropTypes.oneOf(SIZE_VALID_PROPS),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  className: '',
  children: <></>,
  buttonType: BUTTON_TYPE.primary,
  buttonSize: SIZE.md,
  disabled: false,
  onClick: ()=>{},
}

export default Button;