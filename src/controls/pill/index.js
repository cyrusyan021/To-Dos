import React from 'react';

import './index.css';

const Pill = ({ option={}, activeId, pillsOnClick }) => {
  return (
    <div
      className={ `main__pills ${ activeId === option.id ? "main__pills--active" : "" }` }
      onClick={ () => { pillsOnClick(option.id); } }
    >
      { option.name }
    </div>
  );
}

export default Pill;