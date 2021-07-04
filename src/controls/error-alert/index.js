import React from 'react';
import PropTypes from 'prop-types';

import { API_ERROR_MESSAGE } from 'constants/api';

const ErrorAlert = ({ error }) => {
  return (
    <div className="error-alert__container">
      { error }
    </div>
  );
}

ErrorAlert.propTypes = {
  error: PropTypes.string,
}

ErrorAlert.defaultProps = {
  error: API_ERROR_MESSAGE,
}

export default ErrorAlert;