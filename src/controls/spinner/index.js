import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { SIZE, SIZE_VALID_PROPS } from 'constants/types';

const Spinner = ({ size }) => {
  return (
    <div className="spinner__container">
      <BootstrapSpinner animation="border" variant="secondary" size={ size } />
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.oneOf(SIZE_VALID_PROPS),
}

Spinner.defaultProps = {
  size: SIZE.md,
}

export default Spinner;