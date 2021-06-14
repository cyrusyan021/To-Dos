import React, { useMemo } from 'react';

import './index.css';

const Button = ({ className="", children, buttonType='primary', buttonSize='md', ...otherProps }) => {
  const buttonClassName = useMemo(() => {
    switch (buttonType) {
      case 'clear':
        return 'clear__button';

      case 'outlined':
        return 'outlined__button';

      case 'warning':
        return 'warning__button';

      case 'icon':
        return 'icon__button';

      case 'primary':
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

export default Button;