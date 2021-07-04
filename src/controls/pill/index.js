import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

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
  option: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  activeId: PropTypes.string,
  pillsOnClick: PropTypes.func,
}

Pill.defaultProps = {
  option: { id: '', name: '' },
  activeId: '',
  pillsOnClick: ()=>{},
}

export default Pill;