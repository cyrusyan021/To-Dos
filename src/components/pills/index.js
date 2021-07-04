import React, { memo } from 'react';
import PropTypes from 'prop-types';

import Pill from 'controls/pill';

import { PILL_PROP_TYPES } from 'controls/pill';

const Pills = ({ className, options, activeId, pillsOnClick }) => {
  return (
    <div className={ `flex-center--center ${ className }` }>
      <div className="flex-center--space-between" style={ { width: `${ options.length * 92 }px` } }>
        { options.map((o, idx) => (
          <Pill
            key={ `pill__${ idx }` }
            option={ o }
            activeId={ activeId }
            pillsOnClick={ pillsOnClick }
          />
        )) }
      </div>
    </div>
  );
}

Pills.propTypes = {
  className: PropTypes.string,
  options: PropTypes.arrayOf(PILL_PROP_TYPES),
  activeId: PropTypes.string,
  pillsOnClick: PropTypes.func,
}

Pills.defaultProps = {
  className: '',
  options: [],
  activeId: '',
  pillsOnClick: ()=>{},
}

export default memo(Pills);