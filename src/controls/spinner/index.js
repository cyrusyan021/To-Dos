import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = ({ size='md' }) => {
  return (
    <div className="spinner__container">
      <BootstrapSpinner animation="border" variant="secondary" size={ size } />
    </div>
  );
}

export default Spinner;