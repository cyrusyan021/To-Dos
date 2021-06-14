import React from 'react';

import { API_ERROR_MESSAGE } from 'constants/api';

const ErrorAlert = ({ error=API_ERROR_MESSAGE }) => {
  return (
    <div className="error-alert__container">
      { error }
    </div>
  );
}

export default ErrorAlert;