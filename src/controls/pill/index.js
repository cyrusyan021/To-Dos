import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

export const PILL_PROP_TYPES = PropTypes.exact({
  id: PropTypes.string,
  name: PropTypes.string,
});

const Pill = ({ option, activeId, pillsOnClick }) => {
  return (
    <div
      className={ `main__pills ${ activeId === option.id ? "main__pills--active" : "" }` }
      onClick={ () => { pillsOnClick(option.id); } }
    >
      { option.name }
    </div>
  );
}

Pill.propTypes = {
  option: PILL_PROP_TYPES,
  activeId: PropTypes.string,
  pillsOnClick: PropTypes.func,
}

Pill.defaultProps = {
  option: { id: '', name: '' },
  activeId: '',
  pillsOnClick: ()=>{},
}

export default Pill;